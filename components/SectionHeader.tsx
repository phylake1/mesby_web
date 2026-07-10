export default function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {kicker}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-bold text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-neutral-500 ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
