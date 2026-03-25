import "server-only";

const EBAY_BROWSE_SEARCH_URL = "https://api.ebay.com/buy/browse/v1/item_summary/search";
const EBAY_OAUTH_URL = "https://api.ebay.com/identity/v1/oauth2/token";
const EBAY_SCOPE = "https://api.ebay.com/oauth/api_scope";

type EbayPriceSummary = {
  prices: number[];
  medianSoldPrice: number | null;
  lowSoldPrice: number | null;
  highSoldPrice: number | null;
  resultCount: number;
  sourceType: "live-ebay-listings";
  note: string;
};

type CachedToken = {
  accessToken: string;
  expiresAt: number;
};

let cachedToken: CachedToken | null = null;

function getMedian(values: number[]) {
  if (values.length === 0) {
    return null;
  }

  const sortedValues = [...values].sort((left, right) => left - right);
  const midpoint = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 0) {
    return (sortedValues[midpoint - 1] + sortedValues[midpoint]) / 2;
  }

  return sortedValues[midpoint];
}

async function getEbayAccessToken() {
  const appAccessToken = process.env.EBAY_APP_ACCESS_TOKEN;

  if (appAccessToken) {
    return appAccessToken;
  }

  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.accessToken;
  }

  const appId = process.env.EBAY_APP_ID;
  const certId = process.env.EBAY_CERT_ID;

  if (!appId || !certId) {
    throw new Error("Missing eBay server credentials");
  }

  const basicCredentials = Buffer.from(`${appId}:${certId}`).toString("base64");
  const response = await fetch(EBAY_OAUTH_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicCredentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: EBAY_SCOPE,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`eBay OAuth failed with status ${response.status}`);
  }

  const payload = (await response.json()) as {
    access_token?: string;
    expires_in?: number;
  };

  if (!payload.access_token || !payload.expires_in) {
    throw new Error("eBay OAuth response did not include an access token");
  }

  cachedToken = {
    accessToken: payload.access_token,
    expiresAt: Date.now() + payload.expires_in * 1000,
  };

  return payload.access_token;
}

export async function getEbayPriceSummary(title: string): Promise<EbayPriceSummary> {
  const token = await getEbayAccessToken();
  const searchUrl = new URL(EBAY_BROWSE_SEARCH_URL);

  searchUrl.searchParams.set("q", title);
  searchUrl.searchParams.set("limit", "50");

  const response = await fetch(searchUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`eBay Browse search failed with status ${response.status}`);
  }

  const payload = (await response.json()) as {
    itemSummaries?: Array<{
      price?: {
        value?: string;
      };
    }>;
  };

  const prices =
    payload.itemSummaries
      ?.map((item) => Number(item.price?.value))
      .filter((value) => Number.isFinite(value) && value > 0) ?? [];

  return {
    prices,
    medianSoldPrice: getMedian(prices),
    lowSoldPrice: prices.length > 0 ? Math.min(...prices) : null,
    highSoldPrice: prices.length > 0 ? Math.max(...prices) : null,
    resultCount: prices.length,
    sourceType: "live-ebay-listings",
    note:
      "Live eBay values are currently sourced from Browse search price matches on the server.",
  };
}
