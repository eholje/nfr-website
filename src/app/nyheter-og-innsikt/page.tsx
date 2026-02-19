import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/NewsCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nyheter & innsikt - Norsk Førstehjelpsråd",
  description:
    "Siste nytt fra Norsk Førstehjelpsråd — nyheter, kronikker, pressemeldinger og arrangementer.",
};

const articles = [
  {
    title: "Banebrytende samfunnsøkonomisk analyse med Handelshøyskolen BI",
    date: "4. desember 2025",
    excerpt:
      "I samarbeid med Handelshøyskolen BI har NFR publisert verdens første samfunnsøkonomiske analyse av førstehjelpsopplæring. Resultatet er oppsiktsvekkende: hver krone investert gir 12 kroner tilbake til samfunnet. Analysen dokumenterer gevinster knyttet til redusert responstid, lavere behandlingskostnader og færre tapte leveår.",
    slug: "samfunnsokonomisk-analyse-bi",
  },
  {
    title: "NFR tildelt EU-midler gjennom Erasmus+",
    date: "2. september 2025",
    excerpt:
      "Norsk Førstehjelpsråd har fått innvilget prosjektmidler fra EU-kommisjonen gjennom Erasmus+ for å utvikle risikoprofilbasert førstehjelpsopplæring. Prosjektet gjennomføres sammen med Dansk Førstehjelpsråd og latviske helsemyndigheter, og skal tilpasse opplæringen til ulike befolkningsgruppers faktiske risikoprofil.",
    slug: "eu-erasmus-prosjekt",
  },
  {
    title: "Førstehjelpskonferansen 2025 samlet rekordmange deltakere",
    date: "20. august 2025",
    excerpt:
      "For tredje år på rad arrangerte NFR den nasjonale Førstehjelpskonferansen. Over 200 fagpersoner, instruktører og beslutningstakere møttes for å diskutere fremtidens førstehjelpsopplæring. Konferansen har på kort tid blitt den viktigste møteplassen for førstehjelpsfeltet i Norge.",
    slug: "forstehjelpskonferansen-2025",
  },
  {
    title: "NFR på Stortinget om nasjonalt mandat",
    date: "15. mars 2025",
    excerpt:
      "Generalsekretær Thomas Berg Green møtte helsepolitikere på Stortinget i forbindelse med representantforslaget om en nasjonal strategi for førstehjelpsopplæring. NFR argumenterte for et tydelig nasjonalt mandat og øremerket finansiering.",
    slug: "nfr-stortinget-mandat",
  },
  {
    title: "Nye forenklede retningslinjer — Norge leder an internasjonalt",
    date: "10. februar 2025",
    excerpt:
      "NFR lanserer forenklede nasjonale retningslinjer basert på et nytt prinsipp: du kan ikke gi feil førstehjelp. Norge er det første landet som konsekvent forenkler retningslinjene for å senke terskelen for handling. De nye retningslinjene erstatter kompliserte protokoller med intuitive handlingsmønstre.",
    slug: "forenklede-retningslinjer-2025",
  },
  {
    title: "Samarbeid med NIMN om forenklede råd til innringer",
    date: "22. januar 2025",
    excerpt:
      "I samarbeid med Nasjonalt informasjonssenter for medisinsk nødmeldetjeneste har NFR forenklet alle «råd til innringer» ved 113-henvendelser. Målet er at flere tør å handle i akutte situasjoner, også før ambulansen ankommer.",
    slug: "samarbeid-nimn-raad-innringer",
  },
  {
    title: "DSB anbefaler førstehjelp i oppdaterte egenberedskapsråd",
    date: "5. november 2024",
    excerpt:
      "Direktoratet for samfunnssikkerhet og beredskap har oppdatert sine egenberedskapsanbefalinger. For første gang er førstehjelp eksplisitt nevnt, og NFR har bidratt faglig til anbefalingene. DSBs egen undersøkelse viser at bare 6 av 10 nordmenn har nødvendig førstehjelpsmateriell hjemme.",
    slug: "dsb-egenberedskap-forstehjelp",
  },
  {
    title: "Befolkningsundersøkelser avdekker kunnskapsgap",
    date: "18. september 2024",
    excerpt:
      "Nye undersøkelser fra Røde Kors, LHL og Stiftelsen Norsk Luftambulanse tegner et urovekkende bilde: nordmenn overvurderer egen førstehjelpsevne, og mange har ikke oppdatert kompetansen sin på over ti år. NFR bruker funnene i arbeidet med å styrke den nasjonale opplæringsinnsatsen.",
    slug: "befolkningsundersokelser-kunnskapsgap",
  },
];

export default function NyheterOgInnsikt() {
  return (
    <>
      <PageHero
        title="Nyheter & innsikt"
        subtitle="Siste nytt fra Norsk Førstehjelpsråd — nyheter, kronikker og pressemeldinger"
        breadcrumb={[
          { label: "Nyheter & innsikt", href: "/nyheter-og-innsikt" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <div className="mb-16">
            <article className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-nfr-primary/5 to-nfr-sage/10 flex items-center justify-center min-h-[300px]">
                <svg
                  className="w-16 h-16 text-nfr-primary/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <time className="text-sm text-nfr-muted">
                  {articles[0].date}
                </time>
                <h2 className="text-2xl lg:text-3xl font-bold mt-3 mb-4 group-hover:text-nfr-primary-mid transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-nfr-body leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-nfr-muted text-sm">
                  Fullstendig artikkel kommer snart
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
