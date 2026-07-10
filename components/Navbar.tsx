"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/projeler", label: "Projelerimiz" },
  { href: "/ilanlar", label: "Satılık Daireler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src={solid ? "/logo/lockup-black.png" : "/logo/lockup-white.png"}
            alt="Mesby İnşaat"
            width={823}
            height={200}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? solid
                    ? "text-neutral-950"
                    : "text-white"
                  : solid
                  ? "text-neutral-500 hover:text-neutral-950"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#iletisim"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              solid
                ? "bg-neutral-950 text-white hover:bg-neutral-800"
                : "bg-white text-neutral-950 hover:bg-neutral-200"
            }`}
          >
            İletişim
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menüyü aç"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            solid ? "text-neutral-950" : "text-white"
          }`}
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-neutral-200 bg-white px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-neutral-100 py-3 text-sm font-medium ${
                pathname === link.href ? "text-neutral-950" : "text-neutral-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-neutral-950 px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            İletişim
          </a>
        </nav>
      )}
    </header>
  );
}
