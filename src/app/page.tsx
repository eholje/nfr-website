import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ImpactNumbers } from "@/components/ImpactNumbers";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsCard } from "@/components/NewsCard";
import { CTABanner } from "@/components/CTABanner";
import { withBasePath } from "@/lib/basePath";
import { articles } from "@/data/articles";

const homeNews = articles.slice(0, 3);

const memberOrgs = [
  { name: "Røde Kors", logo: "/images/logos/rode-kors.png" },
  { name: "Norsk Folkehjelp", logo: "/images/logos/norsk-folkehjelp.png" },
  { name: "Helsedirektoratet", logo: "/images/logos/helsedirektoratet.png" },
  { name: "DSB", logo: "/images/logos/dsb.png" },
  { name: "Forsvarets Sanitet", logo: "/images/logos/forsvaret.png" },
  { name: "Norsk Luftambulanse", logo: "/images/logos/norsk-luftambulanse.png" },
  { name: "Trygg Trafikk", logo: "/images/logos/trygg-trafikk.png" },
  { name: "LHL", logo: "/images/logos/lhl.png" },
  { name: "Norske Kvinners Sanitetsforening", logo: "/images/logos/sanitetskvinnene.png" },
  { name: "Norges Speiderforbund", logo: "/images/logos/norges-speiderforbund.png" },
  { name: "Redningsselskapet", logo: "/images/logos/redningsselskapet.png" },
  { name: "Nasjonalforeningen for Folkehelsen", logo: "/images/logos/nasjonalforeningen.png" },
  { name: "Norges Livredningsselskap", logo: "/images/logos/norges-livredningsselskap.png" },
  { name: "Norsk Resuscitasjonsråd", logo: "/images/logos/nrr.png" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactNumbers />

      {/* Beredskap og sivilsamfunnet */}
      <section className="py-28 bg-nfr-midnight relative overflow-hidden">
        <div className="absolute inset-0 nordlys-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
            Beredskap og sivilsamfunnet
          </p>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Når krisen rammer
                <br />
                — er du klar?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Gjennom våre 28 medlemsorganisasjoner kan vi nå folk på hver
                minste lille tue i hele Norge. Førstehjelpskunnskap er
                grunnmuren i et robust sivilsamfunn.
              </p>
              <div className="bg-white/10 rounded-2xl p-8 mb-8">
                <p className="text-4xl lg:text-5xl font-bold gold-highlight mb-3">78%</p>
                <p className="text-white/80 leading-relaxed">
                  mener husholdninger må kunne klare seg uten samfunnets hjelp
                  i én uke
                </p>
                <p className="text-white/50 text-sm mt-2">DSB/Ipsos 2024</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/for-beslutningstakere"
                  className="inline-flex items-center gap-2 rounded-full bg-nfr-gold px-8 py-4 text-base font-semibold text-nfr-midnight hover:bg-nfr-gold-soft transition-colors"
                >
                  For beslutningstakere
                </Link>
                <Link
                  href="/stott-oss"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Støtt arbeidet
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <blockquote className="border-l-2 border-nfr-gold/40 pl-6">
                <p className="text-white/70 leading-relaxed italic">
                  &ldquo;Befolkningen er en viktig ressurs ved akutt sykdom og
                  alvorlige ulykker&rdquo;
                </p>
                <footer className="mt-3 text-white/50 text-sm">
                  Meld. St. 23 — Akuttmeldingen
                </footer>
              </blockquote>
              <blockquote className="border-l-2 border-nfr-gold/40 pl-6">
                <p className="text-white/70 leading-relaxed italic">
                  &ldquo;Regjeringen skal sørge for at det sivile samfunnet er
                  forberedt på krise og krig&rdquo;
                </p>
                <footer className="mt-3 text-white/50 text-sm">
                  Meld. St. 9 — Totalberedskapsmeldingen
                </footer>
              </blockquote>
              <div className="bg-white/5 rounded-2xl p-6 mt-8">
                <p className="text-white/60 text-sm leading-relaxed">
                  Norsk Førstehjelpsråd arbeider aktivt for at
                  førstehjelpskompetanse skal bli en integrert del av Norges
                  totalberedskap — fra skoleelever til seniorer, fra byer til
                  bygder.
                </p>
              </div>
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
              href="/nyheter-og-innsikt"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-nfr-primary-mid hover:gap-3 transition-all"
            >
              Se alle nyheter
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeNews.map((article) => (
              <NewsCard key={article.slug} {...article} />
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link
              href="/nyheter-og-innsikt"
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
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
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
                href="/om-nfr#fagraadet"
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

      {/* Hva vi gjør — initiativer */}
      <section className="py-28 bg-nfr-cream relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Hva vi gjør
              </p>
              <SectionHeading
                title="Initiativer som gjør forskjell"
                subtitle="Fra Norges største fagkonferanse til banebrytende forskning — NFR driver utviklingen."
              />
            </div>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
              <Image
                src={withBasePath("/images/forstehjelpskonferansen.jpg")}
                alt="Førstehjelpskonferansen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Førstehjelpskonferansen",
                desc: "Norges største fagkonferanse for førstehjelp — tredje år på rad",
              },
              {
                title: "Førstehjelpsakademiet",
                desc: "Ny digital plattform for kvalitetssikret faginnhold og instruktørutvikling",
              },
              {
                title: "EU Erasmus+",
                desc: "Internasjonal satsing med Danmark og Latvia på risikoprofilbasert opplæring",
              },
              {
                title: "Samfunnsøkonomisk analyse",
                desc: "Banebrytende studie med Handelshøyskolen BI — den første i sitt slag globalt",
              },
              {
                title: "Forenkling",
                desc: "Norge i verdenstoppen: Førstehjelpsråd som er kunnskapsbaserte og enkle å forstå",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-nfr-dark text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-nfr-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={withBasePath("/images/hero-fjord.jpg")}
                alt="Norsk natur — førstehjelp for hele Norge"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
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
                href="/om-nfr"
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

      {/* Generalsekretæren */}
      <section className="py-28 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src={withBasePath("/images/thomas-berg-green.jpg")}
                  alt="Thomas Berg Green, Generalsekretær i Norsk Førstehjelpsråd"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Generalsekretæren
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-nfr-dark mb-2">
                Thomas Berg Green
              </h2>
              <p className="text-nfr-muted text-lg mb-8">
                Generalsekretær, Norsk Førstehjelpsråd
              </p>
              <p className="text-nfr-body leading-relaxed mb-8">
                Nesten 30 år i ambulansetjenesten. Leder NFR siden 2020.
                Jobber fortsatt deltid som paramedisiner ved siden av rollen
                som generalsekretær.
              </p>
              <blockquote className="border-l-4 border-nfr-accent pl-6 mb-8">
                <p className="text-xl lg:text-2xl text-nfr-dark leading-relaxed italic">
                  &ldquo;Vår visjon er helt tydelig: Alle kan gi førstehjelp!
                  Det er robusthet det!&rdquo;
                </p>
              </blockquote>
              <Link
                href="/for-beslutningstakere"
                className="block bg-white rounded-xl p-6 group hover:shadow-md transition-shadow"
              >
                <p className="text-nfr-body text-sm leading-relaxed">
                  NFR arbeider aktivt overfor Stortinget for et offentlig mandat
                  som nasjonal koordinator for førstehjelpsopplæring i
                  befolkningen.
                </p>
                <span className="inline-flex items-center gap-2 mt-3 text-nfr-primary-mid font-semibold text-sm group-hover:gap-3 transition-all">
                  Les dokumentasjonsgrunnlaget
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Member orgs */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Våre medlemsorganisasjoner"
            subtitle="28 organisasjoner som sammen arbeider for bedre førstehjelp i Norge"
            centered
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-5">
            {memberOrgs.map((org) => (
              <div
                key={org.name}
                className="flex flex-col items-center gap-2 p-4"
                title={org.name}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden">
                  <img
                    src={withBasePath(org.logo)}
                    alt={`${org.name} logo`}
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-nfr-muted text-center leading-tight">
                  {org.name}
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
