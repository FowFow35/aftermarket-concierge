import Link from "next/link";
import { ResultsLiveAnalysis } from "@/components/results-live-analysis";
import { TopNav } from "@/components/top-nav";
import { normalizeItemTitle } from "@/lib/title-normalization";

type ResultsPageProps = {
  searchParams?: Promise<{
    title?: string | string[];
    price?: string | string[];
  }>;
};

function getSingleValue(value?: string | string[]) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function DealResultsPage({ searchParams }: ResultsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const itemTitle = getSingleValue(resolvedSearchParams?.title).trim();
  const rawListingPrice = getSingleValue(resolvedSearchParams?.price).trim();
  const cleanedTitle = normalizeItemTitle(itemTitle);

  return (
    <main className="app-shell">
      <TopNav currentPath="/results" />
      <section className="page-header">
        <div>
          <p className="eyebrow">Deal Results</p>
          <h1>Instant watch flip estimate from your scanner input.</h1>
          <p className="section-text">
            WatchWire now queries a server-side eBay comp route using the cleaned
            detected title, then recalculates the deal once pricing data is returned.
          </p>
        </div>
        <Link href="/" className="ghost-button">
          Run another scan
        </Link>
      </section>
      <ResultsLiveAnalysis
        itemTitle={itemTitle}
        rawListingPrice={rawListingPrice}
        cleanedTitle={cleanedTitle}
      />
    </main>
  );
}
