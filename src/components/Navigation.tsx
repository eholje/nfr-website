"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { withBasePath } from "@/lib/basePath";

const primaryLinks = [
  { href: "/om-nfr", label: "Om NFR" },
  { href: "/forstehjelp-og-fag", label: "Førstehjelp" },
  { href: "/kurs-og-opplaering", label: "Kurs" },
];

const moreLinks = [
  { href: "/kvalitet-og-godkjenninger", label: "Kvalitet & godkjenninger" },
  { href: "/prosjekter-og-konsepter", label: "Prosjekter & konsepter" },
  { href: "/nyheter-og-innsikt", label: "Nyheter & innsikt" },
  { href: "/for-beslutningstakere", label: "For beslutningstakere" },
  { href: "/fasteradsmedlem", label: "Medlemsorganisasjoner" },
  { href: "/kontakt", label: "Kontakt oss" },
];

const allLinks = [...primaryLinks, ...moreLinks];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [moreOpen]);

  const linkClass = scrolled
    ? "text-nfr-dark/70 hover:text-nfr-dark"
    : "text-white/70 hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img
              src={withBasePath("/images/nfr-logo.svg")}
              alt="Norsk Førstehjelpsråd"
              width={180}
              height={48}
              className={scrolled ? "" : "brightness-0 invert"}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-normal tracking-wide transition-colors whitespace-nowrap ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`text-[13px] font-normal tracking-wide transition-colors whitespace-nowrap flex items-center gap-1 ${linkClass}`}
              >
                Mer
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-xl shadow-lg border border-black/5 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-nfr-dark/70 hover:text-nfr-dark hover:bg-nfr-cream transition-colors"
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/stott-oss"
              className="rounded-full bg-nfr-accent px-5 py-2 text-[13px] font-semibold text-nfr-primary hover:bg-nfr-accent-dark transition-colors whitespace-nowrap"
            >
              Støtt oss
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 transition-transform ${
                  scrolled ? "bg-nfr-dark" : "bg-white"
                } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-opacity ${
                  scrolled ? "bg-nfr-dark" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-transform ${
                  scrolled ? "bg-nfr-dark" : "bg-white"
                } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-nfr-stone">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-nfr-dark hover:text-nfr-primary-mid py-2.5 border-b border-black/5 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/stott-oss"
              className="rounded-full bg-nfr-accent px-6 py-3 text-center text-sm font-semibold text-nfr-primary hover:bg-nfr-accent-dark transition-colors mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Støtt oss
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
