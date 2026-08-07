const GRADIENTS = [
  "from-neutral-900 via-neutral-700 to-neutral-500",
  "from-neutral-950 via-neutral-800 to-neutral-600",
  "from-neutral-800 via-neutral-600 to-neutral-400",
  "from-neutral-900 via-neutral-800 to-neutral-500",
  "from-neutral-950 via-neutral-700 to-neutral-500",
  "from-neutral-800 via-neutral-700 to-neutral-400",
];

function seededBars(seed: number, count: number) {
  let value = seed * 9301 + 49297;
  const bars: number[] = [];
  for (let i = 0; i < count; i++) {
    value = (value * 9301 + 49297) % 233280;
    const rand = value / 233280;
    bars.push(30 + Math.floor(rand * 70));
  }
  return bars;
}

// Cloudinary migration note: `art` also accepts a string key (e.g. a future
// Cloudinary public_id) which is hashed to a stable numeric seed here. Once
// real photos are wired up, swap this component's output for a Cloudinary
// <Image> using that same key, without touching callers.
function hashToSeed(key: string) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) % 233280;
  }
  return Math.abs(hash);
}

export default function BuildingArt({
  art,
  className = "",
  alt = "",
}: {
  art: number | string;
  className?: string;
  alt?: string;
}) {
  if (typeof art === "string" && /^https?:\/\//.test(art)) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={art} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  const seed = typeof art === "string" ? hashToSeed(art) : art;
  const gradient = GRADIENTS[seed % GRADIENTS.length];
  const bars = seededBars(seed, 12);
  const width = 400;
  const height = 260;
  const barWidth = width / bars.length;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-90"
      >
        {bars.map((barHeight, index) => (
          <rect
            key={index}
            x={index * barWidth + barWidth * 0.12}
            y={height - barHeight}
            width={barWidth * 0.76}
            height={barHeight}
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth={1}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
