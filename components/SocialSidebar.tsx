import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: SITE.social.instagram, label: "Instagram", icon: FaInstagram },
  { href: SITE.social.facebook, label: "Facebook", icon: FaFacebookF },
  { href: SITE.social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: SITE.social.youtube, label: "YouTube", icon: FaYoutube },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
      {LINKS.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
        >
          <Icon size={16} />
        </a>
      ))}
      <a
        href={SITE.social.sahibinden}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sahibinden"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-[11px] font-bold text-neutral-500 transition-colors hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
      >
        SB
      </a>
      <span className="mt-2 h-16 w-px bg-neutral-300" />
    </div>
  );
}
