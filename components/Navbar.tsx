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

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
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
              src={solid ? "/logo/navbar-logo-black.png" : "/logo/navbar-logo-white.png"}
              alt="Mesby İnşaat"
              width={409}
              height={66}
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
            <Link
              href="/iletisim"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                solid
                  ? "bg-neutral-950 text-white hover:bg-neutral-800"
                  : "bg-white text-neutral-950 hover:bg-neutral-200"
              }`}
            >
              İletişim
            </Link>
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
      </header>

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        className={`fixed inset-0 z-50 flex w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
          <Image
            src="/logo/navbar-logo-black.png"
            alt="Mesby İnşaat"
            width={409}
            height={66}
            className="h-7 w-auto"
          />
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-neutral-950"
          >
            <span className="relative block h-5 w-5">
              <span className="absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-neutral-100 py-4 text-base font-medium ${
                pathname === link.href ? "text-neutral-950" : "text-neutral-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setOpen(false)}
            className={`mt-6 rounded-full px-5 py-3 text-center text-sm font-semibold ${
              pathname === "/iletisim"
                ? "bg-neutral-800 text-white"
                : "bg-neutral-950 text-white"
            }`}
          >
            İletişim
          </Link>
        </nav>
      </aside>
    </>
  );
}
