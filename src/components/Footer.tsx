import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

export function Footer() {
  return (
    <footer className="bg-nfr-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src={withBasePath("/images/nfr-logo.svg")}
              alt="Norsk Førstehjelpsråd"
              width={180}
              height={48}
              className="brightness-0 invert mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Den nasjonale paraplyorganisasjonen for førstehjelp i Norge.
              Vi samler 28 organisasjoner som arbeider for bedre
              førstehjelpsopplæring.
            </p>
          </div>

          {/* Om NFR */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-nfr-accent mb-6">
              Om NFR
            </h3>
            <nav className="space-y-3">
              {[
                { href: "/om-nfr", label: "Vårt samfunnsoppdrag" },
                { href: "/fasteradsmedlem", label: "Medlemsorganisasjoner" },
                { href: "/om-nfr#fagraadet", label: "Fagrådet" },
                { href: "/kontakt", label: "Kontakt oss" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Fag & opplæring */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-nfr-accent mb-6">
              Fag & opplæring
            </h3>
            <nav className="space-y-3">
              {[
                { href: "/forstehjelp-og-fag", label: "Førstehjelp & fag" },
                { href: "/kurs-og-opplaering", label: "Kurs & opplæring" },
                { href: "/kvalitet-og-godkjenninger", label: "Kvalitet & godkjenninger" },
                { href: "/for-instruktorer", label: "For instruktører" },
                { href: "/prosjekter-og-konsepter", label: "Prosjekter & konsepter" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt & støtt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-nfr-accent mb-6">
              Kontakt & støtt
            </h3>
            <div className="space-y-3 text-sm text-white/50 mb-6">
              <p>Norsk Førstehjelpsråd</p>
              <p>post@norskforstehjelpsrad.no</p>
              <p>24 02 22 20</p>
            </div>
            <nav className="space-y-3">
              {[
                { href: "/stott-oss", label: "Støtt oss" },
                { href: "/nyheter-og-innsikt", label: "Nyheter & innsikt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/norskforstehjelpsrad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-white/30">
            &copy; {new Date().getFullYear()} Norsk Førstehjelpsråd. Alle
            rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
