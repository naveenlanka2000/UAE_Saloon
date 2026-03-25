type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 sm:gap-5 ${alignment}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="font-heading text-[clamp(2.1rem,9vw,4.75rem)] leading-[0.96] text-[var(--color-ivory)] lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[22rem] text-sm leading-6 text-[var(--color-muted)] sm:max-w-2xl sm:text-base sm:leading-7">
          {description}
        </p>
      ) : null}
    </div>
  );
}
