const STATS = [
  { value: "15+", label: "Yıllık Deneyim" },
  { value: "24", label: "Tamamlanan Proje" },
  { value: "1200+", label: "Teslim Edilen Daire" },
  { value: "%98", label: "Müşteri Memnuniyeti" },
];

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 gap-8 border-y border-neutral-800 bg-neutral-950 py-14 text-white sm:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-widest text-neutral-400 sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
