import { buildDealSummary, formatCurrency, formatPercent } from "@/lib/deal-estimate";
import { mockDealFeed, type MarketplaceName } from "@/lib/mock-deal-feed";

const marketplaceBadgeClassNames: Record<MarketplaceName, string> = {
  eBay: "marketplace-badge badge-ebay",
  "Facebook Marketplace": "marketplace-badge badge-facebook",
  Mercari: "marketplace-badge badge-mercari",
  Craigslist: "marketplace-badge badge-craigslist",
};

const feedItems = mockDealFeed
  .map((listing) => ({
    ...listing,
    summary: buildDealSummary(listing.itemTitle, String(listing.listingPrice)),
  }))
  .sort((left, right) => {
    const leftScore = left.summary.dealScore ?? 0;
    const rightScore = right.summary.dealScore ?? 0;

    if (rightScore !== leftScore) {
      return rightScore - leftScore;
    }

    return (right.summary.roi ?? 0) - (left.summary.roi ?? 0);
  });

export function LiveDealFeed() {
  return (
    <section className="live-feed-panel">
      <div className="panel-heading">
        <p className="panel-kicker">Live Deal Feed</p>
        <h2>Mock marketplace listings ranked like a live flipping terminal</h2>
        <p className="section-text">
          This feed uses local mock listings only for now, but it is structured like a
          live scanner with cleaned item detection, deal math, and marketplace-level
          visibility.
        </p>
      </div>

      <div className="live-feed-grid">
        {feedItems.map((listing) => (
          <article className="live-feed-card" key={`${listing.marketplace}-${listing.itemTitle}`}>
            <div className="live-feed-header">
              <span className={marketplaceBadgeClassNames[listing.marketplace]}>
                {listing.marketplace}
              </span>
              <p className="terminal-kicker">
                Score {listing.summary.dealScore ?? "N/A"}
              </p>
            </div>

            <div className="live-feed-title-block">
              <p className="metric-label">Item Title</p>
              <h3 className="live-feed-title">{listing.itemTitle}</h3>
            </div>

            <div className="terminal-divider" />

            <div className="feed-metrics-grid">
              <div>
                <p className="metric-label">Listing Price</p>
                <p className="feed-value">{formatCurrency(listing.listingPrice)}</p>
              </div>
              <div>
                <p className="metric-label">Detected Item</p>
                <p className="feed-value">{listing.summary.cleanedTitle || "N/A"}</p>
              </div>
              <div>
                <p className="metric-label">eBay Low</p>
                <p className="feed-value">
                  {listing.summary.estimatedLowValue !== null
                    ? formatCurrency(listing.summary.estimatedLowValue)
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="metric-label">eBay High</p>
                <p className="feed-value">
                  {listing.summary.estimatedHighValue !== null
                    ? formatCurrency(listing.summary.estimatedHighValue)
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="metric-label">Estimated Profit</p>
                <p className="feed-value">
                  {listing.summary.estimatedProfit !== null
                    ? formatCurrency(listing.summary.estimatedProfit)
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="metric-label">ROI</p>
                <p className="feed-value">
                  {listing.summary.roi !== null ? formatPercent(listing.summary.roi) : "N/A"}
                </p>
              </div>
              <div>
                <p className="metric-label">Deal Score</p>
                <p className="feed-value">
                  {listing.summary.dealScore !== null ? `${listing.summary.dealScore} / 10` : "N/A"}
                </p>
              </div>
              <div>
                <p className="metric-label">Flip Speed</p>
                <p className="feed-value">{listing.summary.flipSpeed}</p>
              </div>
            </div>

            <div className="live-feed-footer">
              <div>
                <p className="metric-label">Recommendation</p>
                <p className="recent-recommendation">{listing.summary.recommendation}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
