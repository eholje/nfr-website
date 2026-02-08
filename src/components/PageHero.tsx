import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-nfr-navy pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Hjem
                </Link>
              </li>
              {breadcrumb.map((item) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span>/</span>
                  <Link href={item.href} className="hover:text-white/80 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
