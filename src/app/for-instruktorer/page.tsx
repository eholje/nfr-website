import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For instruktører - Norsk Førstehjelpsråd",
  description: "Informasjon for godkjente førstehjelpsinstruktører og deg som ønsker å bli instruktør.",
};

export default function ForInstruktorer() {
  return (
    <>
      <PageHero
        title="For instruktører"
        subtitle="Informasjon for godkjente førstehjelpsinstruktører"
        breadcrumb={[{ label: "For instruktører", href: "/for-instruktorer" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              title="Bli førstehjelpsinstruktør"
              subtitle="Norsk Førstehjelpsråd godkjenner instruktører gjennom våre medlemsorganisasjoner."
            />
            <div className="space-y-6 text-nfr-body leading-relaxed">
              <p>
                Som godkjent førstehjelpsinstruktør er du en del av et nettverk
                på over 4 027 instruktører som sikrer kvaliteten på
                førstehjelpsopplæringen i Norge.
              </p>
              <p>
                Godkjenning som instruktør skjer gjennom våre
                medlemsorganisasjoner. Ta kontakt med en av organisasjonene for å
                starte prosessen.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Godkjenning",
                description: "Instruktørgodkjenning skjer gjennom våre medlemsorganisasjoner etter gjennomført instruktørkurs.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
              {
                title: "Oppdatering",
                description: "Hold deg oppdatert med nye retningslinjer, kursmateriell og faglige oppdateringer.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: "Nettverk",
                description: "Bli en del av Norges største nettverk av førstehjelpsinstruktører med over 4 027 medlemmer.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-nfr-offwhite rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-nfr-red/10 text-nfr-red flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-nfr-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-nfr-red px-8 py-4 font-bold text-white hover:bg-nfr-red-dark transition-colors"
            >
              Kontakt oss for mer informasjon
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
