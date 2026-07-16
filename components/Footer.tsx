import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SITE, whatsappLink } from "@/lib/site";

const QUICK_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/projeler", label: "Projelerimiz" },
  { href: "/ilanlar", label: "Satılık Daireler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src="/logo/navbar-wordmark-white.png"
            alt="Mesby İnşaat"
            width={337}
            height={66}
            className="h-8 w-auto"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400">
            Mesby İnşaat; İstanbul&apos;da güvenilir mühendislik ve zamansız
            mimari anlayışıyla konut projeleri geliştirir. Sahibinden.com
            üzerindeki güncel ilanlarımıza bu sitemizden de kolayca
            ulaşabilirsiniz.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: SITE.social.instagram, icon: FaInstagram, label: "Instagram" },
              { href: SITE.social.facebook, icon: FaFacebookF, label: "Facebook" },
              { href: SITE.social.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
              { href: SITE.social.youtube, icon: FaYoutube, label: "YouTube" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-white hover:bg-white hover:text-neutral-950"
              >
                <Icon size={15} />
              </a>
            ))}
            <a
              href={SITE.social.sahibinden}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sahibinden"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-[10px] font-bold text-neutral-300 transition-colors hover:border-white hover:bg-white hover:text-neutral-950"
            >
              SB
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Hızlı Bağlantılar
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SITE.social.sahibinden}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                Sahibinden Mağazamız
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            İletişim
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-neutral-400">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-0.5 shrink-0" size={14} />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-0.5 shrink-0" size={14} />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaWhatsapp className="mt-0.5 shrink-0 text-[#25D366]" size={14} />
              <a
                href={whatsappLink("Merhaba, bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col items-center justify-between gap-3 border-t border-neutral-800 py-6 text-xs text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Mesby İnşaat. Tüm hakları saklıdır.</p>
        <p>Gayrimenkul ve inşaat projeleri.</p>
      </div>
    </footer>
  );
}
