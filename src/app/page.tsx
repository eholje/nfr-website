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

const memberOrgs = [
  "Røde Kors",
  "Norsk Folkehjelp",
  "Norsk Luftambulanse",
  "Helsedirektoratet",
  "Norges Livredningsselskap",
  "Redningsselskapet",
  "Norske Kvinners Sanitetsforening",
  "Forsvarets Sanitet",
  "Norsk Resuscitasjonsråd",
  "DSB",
  "Trygg Trafikk",
  "LHL",
  "Norges Speiderforbund",
  "Nasjonalforeningen for Folkehelsen",
];

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactNumbers />

      {/* About intro */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-nfr-primary/5 to-nfr-sage/15 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <svg className="w-24 h-24 text-nfr-primary/20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <p className="text-nfr-muted text-sm">Bilde fra aktivitet</p>
              </div>
            </div>
            <div>
              <p className="text-nfr-accent font-medium tracking-wide uppercase text-sm mb-4">
                Om oss
              </p>
              <SectionHeading
                title="Norges faglige autoritet for førstehjelp"
                subtitle="Vi setter normen, samordner fag og forvalter kvalitet — slik at flere liv blir reddet."
              />
              <p className="text-nfr-body leading-relaxed mb-8">
                Norsk Førstehjelpsråd er den nasjonale paraplyorganisasjonen
                som samler 28 organisasjoner med 2,2 millioner indirekte
                medlemmer. Vi er den normerende autoriteten som sikrer
                kvaliteten på førstehjelpsopplæring i Norge.
              </p>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 text-nfr-primary-mid font-semibold hover:gap-3 transition-all"
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
      <section className="py-28 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeading
              title="Aktuelt"
              subtitle="Siste nytt fra Norsk Førstehjelpsråd"
            />
            <Link
              href="/aktuelt"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-nfr-primary-mid hover:gap-3 transition-all"
            >
              Se alle nyheter
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleNews.map((article) => (
              <NewsCard key={article.slug} {...article} />
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link
              href="/aktuelt"
              className="inline-flex items-center gap-2 text-sm font-semibold text-nfr-primary-mid"
            >
              Se alle nyheter
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Fagrådet */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nfr-accent font-medium tracking-wide uppercase text-sm mb-4">
                Faglig ledelse
              </p>
              <SectionHeading
                title="Fagrådet — vår faglige ryggmarg"
                subtitle="Ekspertutvalget som sikrer at Norges førstehjelpsopplæring bygger på beste tilgjengelige kunnskap"
              />
              <p className="text-nfr-body leading-relaxed mb-6">
                Fagrådet er sammensatt av ledende fagpersoner innen akuttmedisin,
                anestesiologi, traumatologi og prehospitalt arbeid. De utvikler
                retningslinjer, kvalitetssikrer kursinnhold og rådgir om faglige
                standarder.
              </p>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 text-nfr-primary-mid font-semibold hover:gap-3 transition-all"
              >
                Les mer om Fagrådet
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Retningslinjer", desc: "Nasjonale førstehjelpsretningslinjer" },
                { label: "Kvalitetssikring", desc: "Godkjenning av kurs og instruktører" },
                { label: "Forskning", desc: "Evidensbasert opplæring" },
                { label: "Rådgivning", desc: "Faglig veiledning til myndigheter" },
                { label: "Standarder", desc: "Kursinnhold og kompetansekrav" },
                { label: "Utvikling", desc: "Oppdatering av fagstoff" },
              ].map((item) => (
                <div key={item.label} className="bg-nfr-cream rounded-xl p-5 text-center">
                  <p className="font-semibold text-nfr-dark text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-nfr-muted leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Member orgs */}
      <section className="py-28 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Våre medlemsorganisasjoner"
            subtitle="28 organisasjoner som sammen arbeider for bedre førstehjelp i Norge"
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {memberOrgs.map((name) => (
              <div
                key={name}
                className="rounded-xl bg-white flex items-center justify-center p-5 hover:shadow-md transition-shadow min-h-[80px]"
              >
                <span className="text-sm font-medium text-nfr-dark text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/fasteradsmedlem"
              className="text-nfr-primary-mid font-semibold hover:underline"
            >
              Se alle 28 medlemsorganisasjoner &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
