import { normalizeItemTitle } from "@/lib/title-normalization";

export type DealSummary = {
  itemTitle: string;
  cleanedTitle: string;
  listingPrice: number | null;
  estimatedLowValue: number | null;
  estimatedHighValue: number | null;
  medianSoldPrice: number | null;
  fees: number | null;
  shipping: number | null;
  netResale: number | null;
  estimatedProfit: number | null;
  roi: number | null;
  dealScore: number | null;
  flipSpeed: string;
  easeOfFlip: string;
  recommendation: string;
};

type ComparableValues = {
  estimatedLowValue: number | null;
  estimatedHighValue: number | null;
  medianSoldPrice: number | null;
};

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

export function getDealScore(roi: number) {
  if (roi < 20) {
    return 3;
  }

  if (roi < 50) {
    return 5;
  }

  if (roi < 100) {
    return 7;
  }

  if (roi < 200) {
    return 8.5;
  }

  return 9.5;
}

export function getRecommendation(roi: number) {
  if (roi > 150) {
    return "BUY IMMEDIATELY";
  }

  if (roi >= 50) {
    return "DECENT DEAL";
  }

  return "RISKY";
}

function buildSummaryFromValues(
  itemTitle: string,
  rawListingPrice: string,
  comparableValues: ComparableValues,
) {
  const cleanedTitle = normalizeItemTitle(itemTitle);
  const parsedListingPrice = Number(rawListingPrice);
  const hasValidPrice = Number.isFinite(parsedListingPrice) && parsedListingPrice > 0;
  const listingPrice = hasValidPrice ? parsedListingPrice : null;
  const { estimatedLowValue, estimatedHighValue, medianSoldPrice } = comparableValues;
  const fees = medianSoldPrice !== null ? medianSoldPrice * 0.13 : null;
  const shipping = medianSoldPrice !== null ? 35 : null;
  const netResale =
    medianSoldPrice !== null && fees !== null && shipping !== null
      ? medianSoldPrice - fees - shipping
      : null;
  const estimatedProfit =
    netResale !== null && listingPrice !== null ? netResale - listingPrice : null;
  const roi =
    estimatedProfit !== null && listingPrice !== null
      ? (estimatedProfit / listingPrice) * 100
      : null;
  const dealScore = roi !== null ? getDealScore(roi) : null;

  return {
    itemTitle,
    cleanedTitle,
    listingPrice,
    estimatedLowValue,
    estimatedHighValue,
    medianSoldPrice,
    fees,
    shipping,
    netResale,
    estimatedProfit,
    roi,
    dealScore,
    flipSpeed: roi !== null ? (roi > 100 ? "FAST" : "MODERATE") : "N/A",
    easeOfFlip: listingPrice !== null ? (listingPrice < 1000 ? "HIGH" : "MEDIUM") : "N/A",
    recommendation: roi !== null ? getRecommendation(roi) : "Add a valid price",
  };
}

export function buildDealSummary(itemTitle: string, rawListingPrice: string): DealSummary {
  const parsedListingPrice = Number(rawListingPrice);
  const hasValidPrice = Number.isFinite(parsedListingPrice) && parsedListingPrice > 0;
  const listingPrice = hasValidPrice ? parsedListingPrice : null;
  const estimatedLowValue = listingPrice !== null ? listingPrice * 2.5 : null;
  const estimatedHighValue = listingPrice !== null ? listingPrice * 3.5 : null;
  const medianSoldPrice =
    estimatedLowValue !== null && estimatedHighValue !== null
      ? (estimatedLowValue + estimatedHighValue) / 2
      : null;

  return buildSummaryFromValues(itemTitle, rawListingPrice, {
    estimatedLowValue,
    estimatedHighValue,
    medianSoldPrice,
  });
}

export function buildDealSummaryFromComps(
  itemTitle: string,
  rawListingPrice: string,
  comparableValues: ComparableValues,
): DealSummary {
  return buildSummaryFromValues(itemTitle, rawListingPrice, comparableValues);
}
