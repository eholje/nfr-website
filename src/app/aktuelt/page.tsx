import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/NewsCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktuelt - Norsk Førstehjelpsråd",
  description: "Siste nytt fra Norsk Førstehjelpsråd - nyheter, arrangementer og oppdateringer.",
};

const articles = [
  {
    title: "Samfunnsøkonomisk analyse viser stor verdi av førstehjelpsopplæring",
    date: "15. januar 2026",
    excerpt:
      "En ny analyse viser at hver krone investert i førstehjelpsopplæring gir hele 12 kroner tilbake til samfunnet. Rapporten understreker behovet for økt satsing.",
    slug: "samfunnsokonomisk-analyse",
  },
  {
    title: "Nytt samarbeid styrker førstehjelpskompetansen i Norge",
    date: "8. januar 2026",
    excerpt:
      "Norsk Førstehjelpsråd inngår nytt samarbeid for å øke førsthjelpskompetansen blant barn og unge i hele landet.",
    slug: "nytt-samarbeid",
  },
  {
    title: "Rekordmange nye instruktører godkjent i 2025",
    date: "20. desember 2025",
    excerpt:
      "Over 400 nye instruktører ble godkjent i løpet av 2025, noe som styrker førstehjelpsberedskapen over hele landet.",
    slug: "rekordmange-instruktorer",
  },
  {
    title: "Førstehjelpskonferansen 2026",
    date: "5. desember 2025",
    excerpt:
      "Årets konferanse samler fagfolk fra hele Norge for å diskutere fremtidens førstehjelpsopplæring. Meld deg på nå.",
    slug: "forstehjelpskonferansen-2026",
  },
  {
    title: "Nye retningslinjer for hjerte-lungeredning",
    date: "15. november 2025",
    excerpt:
      "Oppdaterte retningslinjer fra Norsk Førstehjelpsråd sikrer at norske instruktører følger beste praksis.",
    slug: "nye-retningslinjer-hlr",
  },
  {
    title: "Samarbeid med Stortinget om førstehjelpspolitikk",
    date: "1. november 2025",
    excerpt:
      "Norsk Førstehjelpsråd har møtt helse- og omsorgskomiteen for å diskutere obligatorisk førstehjelpsopplæring.",
    slug: "stortinget-forstehjelp",
  },
];

export default function Aktuelt() {
  return (
    <>
      <PageHero
        title="Aktuelt"
        subtitle="Siste nytt fra Norsk Førstehjelpsråd"
        breadcrumb={[{ label: "Aktuelt", href: "/aktuelt" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <div className="mb-16">
            <article className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-nfr-navy/10 to-nfr-red/10 flex items-center justify-center min-h-[300px]">
                <svg className="w-16 h-16 text-nfr-navy/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <time className="text-sm text-nfr-muted">{articles[0].date}</time>
                <h2 className="text-2xl lg:text-3xl font-bold mt-3 mb-4 group-hover:text-nfr-red transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-nfr-body leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-nfr-red font-semibold">
                  Les mer
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </div>

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <NewsCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
