"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { withBasePath } from "@/lib/basePath";

const navLinks = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/kurs", label: "Kurs" },
  { href: "/aktuelt", label: "Aktuelt" },
  { href: "/for-instruktorer", label: "For instruktører" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img
              src={withBasePath("/images/nfr-logo.svg")}
              alt="Norsk Førstehjelpsråd"
              width={200}
              height={54}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-nfr-dark hover:text-nfr-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/bli-medlem"
              className="rounded-full bg-nfr-red px-6 py-2.5 text-sm font-bold text-white hover:bg-nfr-red-dark transition-colors"
            >
              Bli medlem
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
                className={`block h-0.5 w-6 bg-nfr-dark transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-nfr-dark transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-nfr-dark transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-nfr-dark hover:text-nfr-red py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/bli-medlem"
              className="rounded-full bg-nfr-red px-6 py-3 text-center text-sm font-bold text-white hover:bg-nfr-red-dark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Bli medlem
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
