import Link from "next/link";

export function CTABanner() {
  return (
    <section className="bg-nfr-accent py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl text-nfr-primary mb-6">
          Du kan ikke gi feil førstehjelp
        </h2>
        <p className="text-lg text-nfr-primary/70 mb-12 max-w-2xl mx-auto">
          Det eneste som er feil — er å ikke gjøre noe. Lær førstehjelp
          og bli en beredskapsvenn for dine nærmeste.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/stott-oss"
            className="rounded-full bg-nfr-primary px-8 py-4 text-base font-semibold text-white hover:bg-nfr-primary-mid transition-colors"
          >
            Finn din beredskapsvenn
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full border border-nfr-primary/30 px-8 py-4 text-base font-medium text-nfr-primary hover:bg-nfr-primary/5 transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </div>
    </section>
  );
}
