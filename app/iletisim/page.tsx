import type { Metadata } from "next";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import BuildingArt from "@/components/BuildingArt";
import SectionHeader from "@/components/SectionHeader";
import {
  SITE,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | Mesby İnşaat",
  description:
    "Mesby İnşaat ile telefon, e-posta veya WhatsApp üzerinden iletişime geçin, ofisimizin konumunu haritada görüntüleyin.",
};

const CONTACT_CARDS = [
  {
    icon: FaPhone,
    title: "Telefon",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.whatsappNumber}`,
    iconClassName: "bg-neutral-950",
  },
  {
    icon: FaEnvelope,
    title: "E-posta",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    iconClassName: "bg-neutral-950",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Hemen yazın",
    href: whatsappLink("Merhaba, Mesby İnşaat ile iletişime geçmek istiyorum."),
    iconClassName: "bg-[#25D366]",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Ofis Adresi",
    value: SITE.address,
    href: mapsDirectionsUrl(SITE.mapsQuery),
    iconClassName: "bg-neutral-950",
  },
];

export default function IletisimPage() {
  return (
    <>
      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt art={3} className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Mesby İnşaat
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            İletişim
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Projelerimiz, satılık dairelerimiz veya işbirliği fırsatları için
            bize aşağıdaki kanallardan ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <SectionHeader
          kicker="Bize Ulaşın"
          title="Size En Uygun Kanaldan Yazın"
          description="Satış ofisimiz sorularınızı yanıtlamak için hazır. Aşağıdaki bilgilerden dilediğinizi kullanabilirsiniz."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-neutral-950"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform group-hover:scale-105 ${card.iconClassName}`}
              >
                <card.icon size={16} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {card.title}
              </p>
              <p className="mt-1 break-words text-base font-semibold text-neutral-950">
                {card.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-neutral-950">
              Ofis Bilgilerimiz
            </h2>
            <ul className="mt-6 space-y-6 text-sm text-neutral-600">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-neutral-400" size={18} />
                <div>
                  <p className="font-semibold text-neutral-950">Adres</p>
                  <p className="mt-1">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaClock className="mt-1 shrink-0 text-neutral-400" size={18} />
                <div>
                  <p className="font-semibold text-neutral-950">
                    Çalışma Saatleri
                  </p>
                  <p className="mt-1">{SITE.workingHours}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaPhone className="mt-1 shrink-0 text-neutral-400" size={18} />
                <div>
                  <p className="font-semibold text-neutral-950">Telefon</p>
                  <a href={`tel:${SITE.whatsappNumber}`} className="mt-1 block hover:text-neutral-950">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="mt-1 shrink-0 text-neutral-400" size={18} />
                <div>
                  <p className="font-semibold text-neutral-950">E-posta</p>
                  <a href={`mailto:${SITE.email}`} className="mt-1 block hover:text-neutral-950">
                    {SITE.email}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink("Merhaba, Mesby İnşaat ile iletişime geçmek istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1FBE5A] sm:w-auto"
            >
              <FaWhatsapp size={18} />
              WhatsApp ile Yazın
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 lg:col-span-3">
            <iframe
              title="Mesby İnşaat Ofis Konumu"
              src={mapsEmbedUrl(SITE.mapsQuery)}
              className="h-80 w-full lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
