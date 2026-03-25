export const RECENT_SCANS_STORAGE_KEY = "watchwire-recent-scans";
const MAX_RECENT_SCANS = 5;

export type SavedScan = {
  id: string;
  itemTitle: string;
  listingPrice: number;
  estimatedProfit: number;
  roi: number;
  dealScore: number;
  recommendation: string;
  createdAt: string;
};

export function readRecentScans() {
  if (typeof window === "undefined") {
    return [] as SavedScan[];
  }

  try {
    const rawValue = window.localStorage.getItem(RECENT_SCANS_STORAGE_KEY);

    if (!rawValue) {
      return [] as SavedScan[];
    }

    const parsedValue = JSON.parse(rawValue) as unknown;

    if (!Array.isArray(parsedValue)) {
      return [] as SavedScan[];
    }

    return parsedValue.filter(isSavedScan).slice(0, MAX_RECENT_SCANS);
  } catch {
    return [] as SavedScan[];
  }
}

export function saveRecentScan(scan: SavedScan) {
  if (typeof window === "undefined") {
    return;
  }

  const nextScans = [
    scan,
    ...readRecentScans().filter((existingScan) => existingScan.id !== scan.id),
  ].slice(0, MAX_RECENT_SCANS);

  window.localStorage.setItem(RECENT_SCANS_STORAGE_KEY, JSON.stringify(nextScans));
}

function isSavedScan(value: unknown): value is SavedScan {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<SavedScan>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.itemTitle === "string" &&
    typeof candidate.listingPrice === "number" &&
    typeof candidate.estimatedProfit === "number" &&
    typeof candidate.roi === "number" &&
    typeof candidate.dealScore === "number" &&
    typeof candidate.recommendation === "string" &&
    typeof candidate.createdAt === "string"
  );
}
