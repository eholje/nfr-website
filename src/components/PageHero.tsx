import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
}

export function PageHero({ title, subtitle, breadcrumb, image, imageAlt }: PageHeroProps) {
  return (
    <section className={`bg-nfr-midnight relative overflow-hidden ${image ? "pt-32 pb-24 min-h-[400px] lg:min-h-[480px] flex items-end" : "pt-32 pb-20"}`}>
      {/* Background image (optional) */}
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${withBasePath(image)}')` }}
            role="img"
            aria-label={imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000F44]/90 via-[#000F44]/60 to-[#000F44]/30" />
        </>
      )}
      {/* Nordlys shimmer */}
      <div className="absolute inset-0 nordlys-glow pointer-events-none" />
      {/* Diagonal accent line */}
      {!image && (
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nfr-gold/[0.04] to-transparent" />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
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
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
      {/* Bottom accent line — gold */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nfr-gold/30 to-transparent" />
    </section>
  );
}
