type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <article className="metric-card">
      <p className="metric-label">{label}</p>
      <h2 className="metric-value">{value}</h2>
      <p className="metric-detail">{detail}</p>
    </article>
  );
}
