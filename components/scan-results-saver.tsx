"use client";

import { useEffect } from "react";
import { saveRecentScan } from "@/lib/scan-history";

type ScanResultsSaverProps = {
  itemTitle: string;
  listingPrice: number | null;
  estimatedProfit: number | null;
  roi: number | null;
  dealScore: number | null;
  recommendation: string;
};

export function ScanResultsSaver({
  itemTitle,
  listingPrice,
  estimatedProfit,
  roi,
  dealScore,
  recommendation,
}: ScanResultsSaverProps) {
  useEffect(() => {
    if (
      !itemTitle ||
      listingPrice === null ||
      estimatedProfit === null ||
      roi === null ||
      dealScore === null
    ) {
      return;
    }

    saveRecentScan({
      id: `${itemTitle}-${listingPrice}-${roi.toFixed(2)}`,
      itemTitle,
      listingPrice,
      estimatedProfit,
      roi,
      dealScore,
      recommendation,
      createdAt: new Date().toISOString(),
    });
  }, [dealScore, estimatedProfit, itemTitle, listingPrice, recommendation, roi]);

  return null;
}
