import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-nfr-primary pt-32 pb-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link href="/" className="hover:text-white/70 transition-colors">
                  Hjem
                </Link>
              </li>
              {breadcrumb.map((item) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span>/</span>
                  <Link href={item.href} className="hover:text-white/70 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl lg:text-6xl text-white">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nfr-accent/30 to-transparent" />
    </section>
  );
}
