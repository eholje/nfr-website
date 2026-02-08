import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-nfr-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/nfr-logo.svg"
              alt="Norsk Førstehjelpsråd"
              width={180}
              height={48}
              className="brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Paraplyorganisasjonen for førstehjelp i Norge. Vi samler 28
              organisasjoner som arbeider for bedre førstehjelpsopplæring.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Kontakt</h3>
            <div className="space-y-2 text-sm text-white/70">
              <p>Norsk Førstehjelpsråd</p>
              <p>post@norskforstehjelpsrad.no</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Lenker</h3>
            <nav className="space-y-2">
              {[
                { href: "/om-oss", label: "Om oss" },
                { href: "/kurs", label: "Kurs" },
                { href: "/aktuelt", label: "Aktuelt" },
                { href: "/for-instruktorer", label: "For instruktører" },
                { href: "/bli-medlem", label: "Bli medlem" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Følg oss</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/norskforstehjelpsrad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
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
          <p className="text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} Norsk Førstehjelpsråd. Alle
            rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
