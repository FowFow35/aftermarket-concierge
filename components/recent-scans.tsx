"use client";

import { useEffect, useState } from "react";
import { formatCurrency, formatPercent } from "@/lib/deal-estimate";
import { SavedScan, readRecentScans } from "@/lib/scan-history";

export function RecentScans() {
  const [recentScans, setRecentScans] = useState<SavedScan[]>([]);

  useEffect(() => {
    function syncRecentScans() {
      setRecentScans(readRecentScans());
    }

    syncRecentScans();
    window.addEventListener("storage", syncRecentScans);

    return () => {
      window.removeEventListener("storage", syncRecentScans);
    };
  }, []);

  return (
    <section className="recent-scans-panel">
      <div className="panel-heading">
        <p className="panel-kicker">Recent Scans</p>
        <h2>Latest watch opportunities you modeled</h2>
        <p className="section-text">
          WatchWire keeps the last five completed scans in your browser so you can
          quickly revisit the strongest setups.
        </p>
      </div>

      {recentScans.length === 0 ? (
        <div className="recent-empty-state">
          <p className="metric-label">No scans yet</p>
          <h3>Run your first watch scan to start building a local deal history.</h3>
          <p className="metric-detail">
            Recent results will appear here automatically after each completed scan.
          </p>
        </div>
      ) : (
        <div className="recent-scans-grid">
          {recentScans.map((scan) => (
            <article className="recent-scan-card" key={scan.id}>
              <div className="recent-card-header">
                <p className="metric-label">Item Title</p>
                <p className="recent-timestamp">
                  {new Date(scan.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <h3 className="recent-scan-title">{scan.itemTitle}</h3>
              <div className="recent-scan-metrics">
                <div>
                  <p className="metric-label">Listing Price</p>
                  <p className="alert-value">{formatCurrency(scan.listingPrice)}</p>
                </div>
                <div>
                  <p className="metric-label">Estimated Profit</p>
                  <p className="alert-value">{formatCurrency(scan.estimatedProfit)}</p>
                </div>
                <div>
                  <p className="metric-label">ROI</p>
                  <p className="alert-value">{formatPercent(scan.roi)}</p>
                </div>
                <div>
                  <p className="metric-label">Deal Score</p>
                  <p className="alert-value">{scan.dealScore} / 10</p>
                </div>
              </div>
              <div className="recent-scan-footer">
                <div>
                  <p className="metric-label">Recommendation</p>
                  <p className="recent-recommendation">{scan.recommendation}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
