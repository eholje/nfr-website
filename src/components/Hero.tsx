import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${withBasePath("/images/hero-fjord.jpg")}')` }}
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A2D]/95 via-[#1B3A2D]/80 to-[#1B3A2D]/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Left: editorial type */}
          <div className="lg:col-span-7">
            <p className="text-nfr-accent font-medium tracking-wide text-sm mb-6">
              #allekangiførstehjelp
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-8 font-[family-name:var(--font-dm-serif)]">
              Du kan ikke gi
              <br />
              feil{" "}
              <span className="text-nfr-accent italic">førstehjelp</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-12 max-w-xl leading-relaxed font-light">
              Norsk Førstehjelpsråd er Norges normerende autoritet for
              førstehjelp. Vi samler 28 organisasjoner med 2,2 millioner
              medlemmer for å gjøre hele befolkningen til en
              beredskapsressurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kurs-og-opplaering"
                className="rounded-full bg-nfr-accent px-8 py-4 text-center text-base font-semibold text-nfr-primary hover:bg-nfr-accent-dark transition-colors"
              >
                Lær førstehjelp
              </Link>
              <Link
                href="/om-nfr#fagraadet"
                className="rounded-full border border-white/20 px-8 py-4 text-center text-base font-medium text-white hover:bg-white/5 transition-colors"
              >
                Om Fagrådet
              </Link>
            </div>
          </div>

          {/* Right: key quote */}
          <div className="lg:col-span-5 hidden lg:block">
            <blockquote className="border-l-2 border-nfr-accent/40 pl-8">
              <p className="text-xl text-white/70 leading-relaxed italic">
                &ldquo;Den første hjelpen du gir de første 10 minutter er like
                viktig som den behandlingen helsetjenesten kan gi de neste 10
                dager.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-white/50">
                Conrad Bjørshol
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nfr-accent/30 to-transparent" />
    </section>
  );
}
