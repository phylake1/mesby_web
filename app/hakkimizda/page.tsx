import type { Metadata } from "next";
import BuildingArt from "@/components/BuildingArt";
import SectionHeader from "@/components/SectionHeader";
import StatsStrip from "@/components/StatsStrip";

export const metadata: Metadata = {
  title: "Hakkımızda | Mesby İnşaat",
  description:
    "Mesby İnşaat'ın hikayesi, misyonu, vizyonu ve değerleri hakkında bilgi edinin.",
};

const VALUES = [
  {
    title: "Güven",
    text: "Her projede şeffaf iletişim ve sözünün arkasında duran bir yaklaşım benimsiyoruz.",
  },
  {
    title: "Kalite",
    text: "Malzeme seçiminden işçiliğe kadar her aşamada titiz bir kalite kontrol süreci uyguluyoruz.",
  },
  {
    title: "Mühendislik",
    text: "Deprem yönetmeliğine uygun, sağlam ve uzun ömürlü yapılar inşa ediyoruz.",
  },
  {
    title: "Sürdürülebilirlik",
    text: "Enerji verimliliği yüksek malzeme ve tasarım çözümlerini tercih ediyoruz.",
  },
];

const TIMELINE = [
  { year: "2010", text: "Mesby İnşaat, İstanbul'da kuruldu." },
  { year: "2015", text: "İlk konut projemizi tamamladık ve teslim ettik." },
  { year: "2019", text: "Portföyümüzü genişleterek rezidans projelerine başladık." },
  { year: "2023", text: "Mesby Vadi Evleri projesini başarıyla teslim ettik." },
  { year: "2026", text: "Yeni projelerimizle büyümeye devam ediyoruz." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt art={2} className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Mesby İnşaat
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Hakkımızda
          </h1>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              kicker="Hikayemiz"
              title="Zamansız Mimari, Sağlam Mühendislik"
            />
            <p className="mt-5 text-neutral-600">
              Mesby İnşaat, İstanbul&apos;da konut ve gayrimenkul geliştirme
              alanında faaliyet gösteren bir inşaat firmasıdır. Kuruluşumuzdan
              bu yana; müşterilerimize güvenli, konforlu ve estetik yaşam
              alanları sunmayı ilke edindik.
            </p>
            <p className="mt-4 text-neutral-600">
              Her projemizde mühendislik standartlarından ödün vermeden,
              bölgenin ihtiyaçlarına uygun, yaşam kalitesini artıran
              tasarımlar geliştiriyoruz. Satış sürecinden teslimat sonrasına
              kadar müşterilerimizin yanında olmaya devam ediyoruz.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[380px]">
            <BuildingArt art={5} className="h-full w-full" />
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <SectionHeader
            kicker="Değerlerimiz"
            title="Bizi Biz Yapan Değerler"
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-neutral-950">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-500">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <SectionHeader kicker="Yol Haritamız" title="Zaman İçinde Mesby" align="center" />
        <div className="mx-auto mt-12 max-w-2xl border-l border-neutral-200 pl-8">
          {TIMELINE.map((item) => (
            <div key={item.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-neutral-950" />
              <p className="text-sm font-semibold text-neutral-950">
                {item.year}
              </p>
              <p className="mt-1 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
