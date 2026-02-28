import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-nfr-cream min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-nfr-accent-text font-medium tracking-wide text-sm mb-4">
          404
        </p>
        <h1 className="text-4xl lg:text-6xl text-nfr-primary mb-6 font-bold">
          Siden ble ikke funnet
        </h1>
        <p className="text-lg text-nfr-muted max-w-md mx-auto mb-10 leading-relaxed">
          Beklager, vi finner ikke siden du leter etter. Den kan ha blitt flyttet
          eller fjernet.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-nfr-primary px-8 py-4 text-base font-semibold text-white hover:bg-nfr-primary-mid transition-colors"
        >
          Tilbake til forsiden
        </Link>
      </div>
    </section>
  );
}
