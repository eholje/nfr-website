import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-nfr-midnight pt-32 pb-20 relative overflow-hidden">
      {/* Nordlys shimmer */}
      <div className="absolute inset-0 nordlys-glow pointer-events-none opacity-50" />
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nfr-gold/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav aria-label="Brødsmulesti" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white/70 transition-colors">
                  Hjem
                </Link>
              </li>
              {breadcrumb.map((item, i) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span>/</span>
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-white/60">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:text-white/70 transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl lg:text-6xl text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
      {/* Bottom accent line — gold */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nfr-gold/30 to-transparent" />
    </section>
  );
}
