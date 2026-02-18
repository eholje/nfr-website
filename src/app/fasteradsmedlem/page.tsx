import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faste rådsmedlem - Norsk Førstehjelpsråd",
  description:
    "Oversikt over alle faste rådsmedlemmer i Norsk Førstehjelpsråd. 28 organisasjoner som sammen arbeider for bedre førstehjelp i Norge.",
};

const members = [
  {
    name: "Bedriftshelsetjenestens bransjeforening",
    url: "https://bhtb.no/",
    category: "Arbeidsliv",
  },
  {
    name: "Direktoratet for samfunnssikkerhet og beredskap",
    url: "https://www.dsb.no/",
    category: "Myndighet",
  },
  {
    name: "Forsvarets Sanitet",
    url: "https://forsvaret.no/",
    category: "Forsvar",
  },
  {
    name: "Helsedirektoratet",
    url: "https://www.helsedirektoratet.no/",
    category: "Myndighet",
  },
  {
    name: "Landsforeningen for hjerte- og lungesyke",
    url: "https://www.lhl.no/",
    category: "Helse",
  },
  {
    name: "Nasjonalforeningen for Folkehelsen",
    url: "https://www.nasjonalforeningen.no/",
    category: "Helse",
  },
  {
    name: "Norges Dykkeforbund",
    url: "https://www.ndf.no/",
    category: "Friluftsliv",
  },
  {
    name: "Norges Livredningsselskap",
    url: "https://www.livredning.no/",
    category: "Livredning",
  },
  {
    name: "Norges Lotteforbund",
    url: "https://www.lottene.no/",
    category: "Beredskap",
  },
  {
    name: "Norges Speiderforbund",
    url: "https://www.speiding.no/",
    category: "Frivillighet",
  },
  {
    name: "Norges Svømmeforbund",
    url: "https://www.svomming.no/",
    category: "Idrett",
  },
  {
    name: "Norsk Anestesiologisk Forening",
    url: "https://www.nafweb.no/",
    category: "Medisin",
  },
  {
    name: "Norsk bransjeforening for kommersielle førstehjelpstilbydere",
    category: "Bransje",
  },
  {
    name: "Norsk Fjellmedisinsk Selskap",
    url: "https://www.fjellmedisin.no/",
    category: "Medisin",
  },
  {
    name: "Norsk Fjellsportforum",
    url: "https://fjellsportforum.no/",
    category: "Friluftsliv",
  },
  {
    name: "Norsk Folkehjelp",
    url: "https://www.folkehjelp.no/",
    category: "Beredskap",
  },
  {
    name: "Norsk forening for traumatologi, akutt- og katastrofemedisin",
    url: "https://www.nakos.no/",
    category: "Medisin",
  },
  {
    name: "Norsk Indremedisinsk Forening",
    url: "https://www.legeforeningen.no/foreningsledd/fagmed/norsk-indremedisinsk-forening/",
    category: "Medisin",
  },
  {
    name: "Norsk kirurgisk forening",
    url: "https://www.legeforeningen.no/foreningsledd/fagmed/norsk-kirurgisk-forening/",
    category: "Medisin",
  },
  {
    name: "Norsk Luftambulanse",
    url: "https://www.norskluftambulanse.no/",
    category: "Akuttmedisin",
  },
  {
    name: "Norsk Resuscitasjonsråd",
    url: "https://www.nrr.org/",
    category: "Medisin",
  },
  {
    name: "Norske Kvinners Sanitetsforening",
    url: "https://www.sanitetskvinnene.no/",
    category: "Frivillighet",
  },
  {
    name: "Norske Redningshunder",
    url: "https://www.nrh.no/",
    category: "Beredskap",
  },
  {
    name: "Norske Sikkerhetssentres Forening",
    category: "Sikkerhet",
  },
  {
    name: "Næringslivets sikkerhetsorganisasjon",
    url: "https://nso.no/",
    category: "Arbeidsliv",
  },
  {
    name: "Redningsselskapet",
    url: "https://www.redningsselskapet.no/",
    category: "Livredning",
  },
  {
    name: "Røde Kors",
    url: "https://www.rodekors.no/",
    category: "Beredskap",
  },
  {
    name: "Trygg Trafikk",
    url: "https://www.tryggtrafikk.no/",
    category: "Trafikksikkerhet",
  },
];

const categoryColors: Record<string, string> = {
  Myndighet: "bg-nfr-primary/10 text-nfr-primary",
  Helse: "bg-nfr-accent/10 text-nfr-accent-dark",
  Medisin: "bg-nfr-primary/10 text-nfr-primary",
  Beredskap: "bg-nfr-accent/10 text-nfr-accent-dark",
  Livredning: "bg-nfr-sage/20 text-nfr-primary",
  Frivillighet: "bg-nfr-sage/20 text-nfr-primary",
  Friluftsliv: "bg-nfr-sage/20 text-nfr-primary",
  Arbeidsliv: "bg-nfr-stone text-nfr-dark",
  Forsvar: "bg-nfr-stone text-nfr-dark",
  Idrett: "bg-nfr-sage/20 text-nfr-primary",
  Akuttmedisin: "bg-nfr-accent/10 text-nfr-accent-dark",
  Bransje: "bg-nfr-stone text-nfr-dark",
  Sikkerhet: "bg-nfr-stone text-nfr-dark",
  Trafikksikkerhet: "bg-nfr-accent/10 text-nfr-accent-dark",
};

export default function Fasteradsmedlem() {
  return (
    <>
      <PageHero
        title="Faste rådsmedlem"
        subtitle="Organisasjonene som utgjør Norsk Førstehjelpsråd — sammen for bedre førstehjelp i Norge"
        breadcrumb={[
          { label: "Om NFR", href: "/om-nfr" },
          { label: "Faste rådsmedlem", href: "/fasteradsmedlem" },
        ]}
      />

      {/* Stats bar */}
      <section className="bg-nfr-cream py-8 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-nfr-body">
              <span className="text-2xl font-bold text-nfr-dark">{members.length}</span>{" "}
              organisasjoner fra helse, beredskap, forsvar, frivillighet og næringsliv
            </p>
          </div>
        </div>
      </section>

      {/* Member grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => {
              const colors = categoryColors[member.category] || "bg-nfr-stone text-nfr-dark";
              const Content = (
                <>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-nfr-primary/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-nfr-primary/40">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    {member.url && (
                      <svg
                        className="w-4 h-4 text-nfr-muted flex-shrink-0 mt-1 group-hover:text-nfr-primary-mid transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-bold text-nfr-dark leading-snug mb-3 group-hover:text-nfr-primary-mid transition-colors">
                    {member.name}
                  </h3>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colors}`}
                  >
                    {member.category}
                  </span>
                </>
              );

              if (member.url) {
                return (
                  <a
                    key={member.name}
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl p-6 border border-nfr-stone shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    {Content}
                  </a>
                );
              }

              return (
                <div
                  key={member.name}
                  className="group bg-white rounded-2xl p-6 border border-nfr-stone shadow-sm"
                >
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-3 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-nfr-muted">Telefon</p>
                  <p className="font-semibold">24 02 22 20</p>
                </div>
                <div>
                  <p className="text-sm text-nfr-muted">E-post</p>
                  <p className="font-semibold">post@norskforstehjelpsrad.no</p>
                </div>
                <div>
                  <p className="text-sm text-nfr-muted">Org.nr</p>
                  <p className="font-semibold">985 076 383</p>
                </div>
                <div>
                  <p className="text-sm text-nfr-muted">Postadresse</p>
                  <p className="font-semibold">c/o NAKOS, Postboks 4956 Nydalen, 0424 Oslo</p>
                </div>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-nfr-muted">Besøksadresse</p>
                <p className="font-semibold">
                  Oslo universitetssykehus HF, Kirkeveien 166, Bygg 31 B, 0450 Oslo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
