import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ImpactNumbers } from "@/components/ImpactNumbers";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsCard } from "@/components/NewsCard";
import { CTABanner } from "@/components/CTABanner";

const sampleNews = [
  {
    title: "Samfunnsøkonomisk analyse viser stor verdi av førstehjelpsopplæring",
    date: "15. januar 2026",
    excerpt:
      "En ny analyse viser at hver krone investert i førstehjelpsopplæring gir hele 12 kroner tilbake til samfunnet.",
    slug: "samfunnsokonomisk-analyse",
  },
  {
    title: "Nytt samarbeid styrker førstehjelpskompetansen i Norge",
    date: "8. januar 2026",
    excerpt:
      "Norsk Førstehjelpsråd inngår nytt samarbeid for å øke førsthjelpskompetansen blant barn og unge.",
    slug: "nytt-samarbeid",
  },
  {
    title: "Rekordmange nye instruktører godkjent i 2025",
    date: "20. desember 2025",
    excerpt:
      "Over 400 nye instruktører ble godkjent i løpet av 2025, noe som styrker førstehjelpsberedskapen.",
    slug: "rekordmange-instruktorer",
  },
];

const courseCategories = [
  {
    title: "Grunnkurs førstehjelp",
    description: "For privatpersoner som ønsker grunnleggende førstehjelpsopplæring.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Bedriftskurs",
    description: "Skreddersydd førstehjelpsopplæring for din arbeidsplass.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Instruktørkurs",
    description: "Bli godkjent førstehjelpsinstruktør gjennom våre medlemsorganisasjoner.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactNumbers />

      {/* About intro */}
      <section className="py-20 bg-nfr-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-nfr-navy/10 to-nfr-red/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <svg className="w-24 h-24 text-nfr-navy/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <p className="text-nfr-muted text-sm">Bilde fra aktivitet</p>
              </div>
            </div>
            <div>
              <SectionHeading
                title="Om Norsk Førstehjelpsråd"
                subtitle="Vi er paraplyorganisasjonen som samler Norges førstehjelpsaktører under ett tak."
              />
              <p className="text-nfr-body leading-relaxed mb-6">
                Norsk Førstehjelpsråd ble opprettet for å koordinere og styrke
                førstehjelpsopplæringen i Norge. Med 28 medlemsorganisasjoner og
                2,2 millioner indirekte medlemmer er vi den sentrale aktøren for
                førstehjelp i landet.
              </p>
              <p className="text-nfr-body leading-relaxed mb-8">
                Vi arbeider for å profesjonalisere førstehjelpsopplæringen,
                påvirke lovgivning og sikre at alle i Norge har tilgang til
                livsviktig kunnskap.
              </p>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 text-nfr-red font-semibold hover:gap-3 transition-all"
              >
                Les mer om oss
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Aktuelt"
            subtitle="Siste nytt fra Norsk Førstehjelpsråd"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleNews.map((article) => (
              <NewsCard key={article.slug} {...article} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/aktuelt"
              className="inline-flex items-center gap-2 rounded-full border-2 border-nfr-navy px-8 py-3 font-semibold text-nfr-navy hover:bg-nfr-navy hover:text-white transition-colors"
            >
              Se alle nyheter
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-nfr-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Finn førstehjelpskurs"
            subtitle="Vi tilbyr kurs for alle nivåer - fra grunnleggende førstehjelp til avanserte livredningskurs"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {courseCategories.map((course) => (
              <Link
                key={course.title}
                href="/kurs"
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-nfr-red/10 text-nfr-red flex items-center justify-center mb-6 group-hover:bg-nfr-red group-hover:text-white transition-colors">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-nfr-muted leading-relaxed">
                  {course.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Member orgs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Våre medlemsorganisasjoner"
            subtitle="28 organisasjoner som sammen arbeider for bedre førstehjelp i Norge"
            centered
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-nfr-offwhite flex items-center justify-center p-4 hover:shadow-md transition-shadow"
              >
                <span className="text-xs text-nfr-muted text-center">
                  Medlem {i + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/om-oss"
              className="text-nfr-red font-semibold hover:underline"
            >
              Se alle 28 medlemsorganisasjoner →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
