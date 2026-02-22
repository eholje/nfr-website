import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/NewsCard";
import { articles } from "@/data/articles";
import { withBasePath } from "@/lib/basePath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nyheter & innsikt - Norsk Førstehjelpsråd",
  description:
    "Siste nytt fra Norsk Førstehjelpsråd — nyheter, kronikker, pressemeldinger og arrangementer.",
};

export default function NyheterOgInnsikt() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <PageHero
        title="Nyheter & innsikt"
        subtitle="Siste nytt fra Norsk Førstehjelpsråd — nyheter, kronikker og pressemeldinger"
        breadcrumb={[
          { label: "Nyheter & innsikt", href: "/nyheter-og-innsikt" },
        ]}
        image="/images/pages/data-analyse.jpg"
        imageAlt="Dataanalyse og innsikt"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <div className="mb-16">
            <Link
              href={`/nyheter-og-innsikt/${featured.slug}`}
              className="group"
            >
              <article className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] lg:aspect-auto relative min-h-[300px] overflow-hidden">
                  <Image
                    src={withBasePath(featured.image)}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <time className="text-sm text-nfr-muted">
                    {featured.date}
                  </time>
                  <h2 className="text-2xl lg:text-3xl font-bold mt-3 mb-4 group-hover:text-nfr-primary-mid transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-nfr-body leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-nfr-primary-mid font-semibold text-sm group-hover:gap-3 transition-all">
                    Les hele artikkelen
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          </div>

          {/* Key resource highlight */}
          <div className="mb-16 bg-nfr-midnight rounded-2xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 nordlys-glow pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-nfr-gold">
                  Rapport
                </span>
                <h3 className="text-xl lg:text-2xl text-white mt-2 mb-2">
                  Samfunnsøkonomisk analyse: 12:1 avkastning
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Verdens første samfunnsøkonomiske analyse av
                  førstehjelpsopplæring, utarbeidet med Handelshøyskolen BI.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link
                  href="/nyheter-og-innsikt/samfunnsokonomisk-analyse-bi"
                  className="rounded-full bg-nfr-gold px-6 py-3 text-sm font-semibold text-nfr-midnight hover:bg-nfr-gold-soft transition-colors whitespace-nowrap"
                >
                  Les mer
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  Be om rapporten
                </Link>
              </div>
            </div>
          </div>

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <NewsCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
