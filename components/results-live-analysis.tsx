"use client";

import { useEffect, useMemo, useState } from "react";
import { MetricCard } from "@/components/metric-card";
import { ScanResultsSaver } from "@/components/scan-results-saver";
import {
  buildDealSummary,
  buildDealSummaryFromComps,
  formatCurrency,
  formatPercent,
} from "@/lib/deal-estimate";

type ResultsLiveAnalysisProps = {
  itemTitle: string;
  rawListingPrice: string;
  cleanedTitle: string;
};

type EbayCompsResponse =
  | {
      ok: true;
      prices: number[];
      medianSoldPrice: number | null;
      lowSoldPrice: number | null;
      highSoldPrice: number | null;
      resultCount: number;
      sourceType: "live-ebay-listings";
      note: string;
    }
  | {
      ok: false;
      message: string;
    };

export function ResultsLiveAnalysis({
  itemTitle,
  rawListingPrice,
  cleanedTitle,
}: ResultsLiveAnalysisProps) {
  const fallbackSummary = useMemo(
    () => buildDealSummary(itemTitle, rawListingPrice),
    [itemTitle, rawListingPrice],
  );
  const [responseState, setResponseState] = useState<{
    loading: boolean;
    data: EbayCompsResponse | null;
  }>({
    loading: Boolean(cleanedTitle),
    data: null,
  });

  useEffect(() => {
    if (!cleanedTitle) {
      setResponseState({
        loading: false,
        data: {
          ok: false,
          message: "Enter an item title to load live eBay comparison data.",
        },
      });
      return;
    }

    let isCancelled = false;

    async function loadComps() {
      setResponseState({ loading: true, data: null });

      try {
        const response = await fetch(`/api/ebay-comps?title=${encodeURIComponent(cleanedTitle)}`, {
          cache: "no-store",
        });
        const payload = (await response.json()) as EbayCompsResponse;

        if (!isCancelled) {
          setResponseState({
            loading: false,
            data: payload,
          });
        }
      } catch {
        if (!isCancelled) {
          setResponseState({
            loading: false,
            data: {
              ok: false,
              message: "Live eBay data is unavailable right now. Showing local estimate fallback.",
            },
          });
        }
      }
    }

    loadComps();

    return () => {
      isCancelled = true;
    };
  }, [cleanedTitle]);

  const liveSummary =
    responseState.data?.ok === true
      ? buildDealSummaryFromComps(itemTitle, rawListingPrice, {
          estimatedLowValue: responseState.data.lowSoldPrice,
          estimatedHighValue: responseState.data.highSoldPrice,
          medianSoldPrice: responseState.data.medianSoldPrice,
        })
      : fallbackSummary;

  const metrics = [
    {
      label: "Detected Item",
      value: liveSummary.cleanedTitle || "No item entered",
      detail: "Normalized from the title entered on the scanner page.",
    },
    {
      label: "Listing Price",
      value:
        liveSummary.listingPrice !== null
          ? formatCurrency(liveSummary.listingPrice)
          : "No valid price",
      detail: "Using the price entered on the scanner page.",
    },
    {
      label: "eBay Low Value",
      value:
        liveSummary.estimatedLowValue !== null
          ? formatCurrency(liveSummary.estimatedLowValue)
          : "N/A",
      detail:
        responseState.data?.ok === true
          ? `Calculated from ${responseState.data.resultCount} live eBay price matches.`
          : "Showing local fallback estimate until live eBay comps are available.",
    },
    {
      label: "eBay High Value",
      value:
        liveSummary.estimatedHighValue !== null
          ? formatCurrency(liveSummary.estimatedHighValue)
          : "N/A",
      detail:
        responseState.data?.ok === true
          ? responseState.data.note
          : "Showing local fallback estimate until live eBay comps are available.",
    },
    {
      label: "Median Sold Price",
      value:
        liveSummary.medianSoldPrice !== null
          ? formatCurrency(liveSummary.medianSoldPrice)
          : "N/A",
      detail:
        responseState.data?.ok === true
          ? "Derived from the live server-side eBay comp set."
          : "Using the built-in WatchWire estimate because live comps were unavailable.",
    },
    {
      label: "Estimated Fees",
      value: liveSummary.fees !== null ? formatCurrency(liveSummary.fees) : "N/A",
      detail: "Calculated at 13% of the current median resale value.",
    },
    {
      label: "Shipping",
      value: liveSummary.shipping !== null ? formatCurrency(liveSummary.shipping) : "N/A",
      detail: "Flat shipping assumption for the current resale model.",
    },
    {
      label: "Net Resale",
      value: liveSummary.netResale !== null ? formatCurrency(liveSummary.netResale) : "N/A",
      detail: "Median value minus fees and shipping.",
    },
    {
      label: "Estimated Profit",
      value:
        liveSummary.estimatedProfit !== null
          ? formatCurrency(liveSummary.estimatedProfit)
          : "N/A",
      detail: "Net resale minus your original listing price.",
    },
    {
      label: "ROI",
      value: liveSummary.roi !== null ? formatPercent(liveSummary.roi) : "N/A",
      detail: "Estimated profit divided by listing price.",
    },
    {
      label: "Deal Score",
      value: liveSummary.dealScore !== null ? `${liveSummary.dealScore} / 10` : "N/A",
      detail: "WatchWire score recalculated from the current ROI.",
    },
    {
      label: "Flip Speed",
      value: liveSummary.flipSpeed,
      detail: "FAST above 100% ROI, otherwise MODERATE.",
    },
    {
      label: "Recommendation",
      value: liveSummary.recommendation,
      detail: "Updated after the current eBay comp analysis.",
    },
  ];

  return (
    <>
      <ScanResultsSaver
        itemTitle={itemTitle}
        listingPrice={liveSummary.listingPrice}
        estimatedProfit={liveSummary.estimatedProfit}
        roi={liveSummary.roi}
        dealScore={liveSummary.dealScore}
        recommendation={liveSummary.recommendation}
      />

      <section className="results-status-panel">
        <p className="metric-label">eBay Comp Status</p>
        <h2 className="results-status-title">
          {responseState.loading
            ? "Loading live eBay comparison data..."
            : responseState.data?.ok === true
              ? "Live eBay comp data loaded"
              : "Live eBay data unavailable"}
        </h2>
        <p className="metric-detail">
          {responseState.loading
            ? "WatchWire is querying the server-side eBay route using the cleaned detected item title."
            : responseState.data?.ok === true
              ? `${responseState.data.resultCount} eBay price results were used for this analysis.`
              : responseState.data?.message ??
                "WatchWire fell back to local estimates because eBay data could not be loaded."}
        </p>
      </section>

      <section className="metrics-grid">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
          />
        ))}
      </section>
    </>
  );
}
