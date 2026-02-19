interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl lg:text-4xl ${
          light ? "text-white" : "text-nfr-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-nfr-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
