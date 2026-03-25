import { SavedAlertsPanel } from "@/components/saved-alerts-panel";
import { TopNav } from "@/components/top-nav";

export default function SavedAlertsPage() {
  return (
    <main className="app-shell">
      <TopNav currentPath="/alerts" />
      <section className="page-header">
        <div>
          <p className="eyebrow">Saved Alerts</p>
          <h1>Track the watch profiles worth buying fast.</h1>
          <p className="section-text">
            Create reusable alert rules for the brands and profit thresholds you want
            WatchWire to surface first.
          </p>
        </div>
      </section>
      <SavedAlertsPanel />
    </main>
  );
}
