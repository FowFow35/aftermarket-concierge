import Link from "next/link";
import { AdminDashboard } from "@/components/admin-dashboard";
import { SiteHeader } from "@/components/site-header";
import {
  getConciergeDashboardStats,
  getConciergeSubmissions,
} from "@/lib/concierge-submissions";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  const submissions = getConciergeSubmissions();
  const stats = getConciergeDashboardStats();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(250,247,241,0.96)_0%,rgba(242,237,228,0.94)_48%,rgba(255,252,247,0.98)_100%)] text-stone-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 luxury-marble opacity-90" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.18),transparent_65%)]" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(19,19,18,0.1),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-7rem] top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(201,161,74,0.15),transparent_66%)] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:px-12">
          <SiteHeader subtitle="Private Concierge Dashboard" />

          <div className="pt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9b7630]">
              Private Operations
            </p>
            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-[0.95] text-stone-950 sm:text-6xl">
                  Concierge intake dashboard for private client review.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
                  Monitor submissions, review intake details, and move premium items
                  into approval with the same discretion and polish clients expect
                  from the brand.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#b89345]/25 bg-white/65 px-6 py-5 shadow-[0_18px_42px_rgba(34,28,20,0.08)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7630]">
                  Queue Status
                </p>
                <p className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold text-stone-950">
                  White glove review in progress
                </p>
              </div>
            </div>

            <AdminDashboard initialSubmissions={submissions} initialStats={stats} />
          </div>
        </div>
      </section>
    </main>
  );
}
