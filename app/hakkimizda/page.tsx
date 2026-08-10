import type { Metadata } from "next";
import BuildingArt from "@/components/BuildingArt";
import SectionHeader from "@/components/SectionHeader";
import StatsStrip from "@/components/StatsStrip";
import { SITE_BANNER, ABOUT_IMAGE } from "@/lib/media";
import { SITE, SITE_NAME, canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "İstanbul İnşaat Firmamızın Hikayesi ve Değerleri",
  description:
    "Mesby Yapı, İstanbul'da 2010'dan bu yana güvenilir mühendislik ve zamansız mimariyle konut projeleri geliştiren bir inşaat firmasıdır. Hikayemizi keşfedin.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: SITE_NAME,
  url: canonicalUrl("/hakkimizda"),
  image: SITE_BANNER,
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.district,
    addressRegion: SITE.city,
    postalCode: "34100",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: "İstanbul",
  openingHours: "Mo-Sa 09:00-18:00",
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
  { year: "2010", text: "Mesby Yapı, İstanbul'da kuruldu." },
  { year: "2015", text: "İlk konut projemizi tamamladık ve teslim ettik." },
  {
    year: "2019",
    text: "Portföyümüzü genişleterek rezidans projelerine başladık.",
  },
  { year: "2023", text: "Mesby Vadi Evleri projesini başarıyla teslim ettik." },
  { year: "2026", text: "Yeni projelerimizle büyümeye devam ediyoruz." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt
          art={SITE_BANNER}
          className="absolute inset-0 h-full w-full opacity-70"
          alt="Mesby Yapı İstanbul inşaat firması ofisi"
        />{" "}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Mesby Yapı
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
              Mesby Yapı, 2010 yılından bu yana İstanbul&apos;da konut ve
              gayrimenkul geliştirme alanında faaliyet gösteren bir inşaat
              firmasıdır. Kuruluşumuzdan bu yana; Kadıköy, Ataşehir, Üsküdar,
              Maltepe, Çekmeköy ve Sancaktepe gibi şehrin farklı ilçelerinde,
              müşterilerimize güvenli, konforlu ve estetik yaşam alanları
              sunmayı ilke edindik.
            </p>
            <p className="mt-4 text-neutral-600">
              Her projemizde mühendislik standartlarından ödün vermeden,
              bölgenin ihtiyaçlarına uygun, deprem yönetmeliğine tam uyumlu ve
              yaşam kalitesini artıran tasarımlar geliştiriyoruz. Arsa
              değerlendirmesinden proje tasarımına, statik hesaplardan iç
              mekan işçiliğine kadar tüm süreçleri kendi bünyemizde yöneterek
              hem kaliteden hem de teslim tarihlerinden ödün vermiyoruz.
            </p>
            <p className="mt-4 text-neutral-600">
              Satış sürecinden teslimat sonrasına kadar müşterilerimizin
              yanında olmaya devam ediyoruz. Satış ofisimiz, daire seçiminden
              kredi ve tapu işlemlerine kadar her adımda alıcılarımıza
              rehberlik eder; teslimat sonrasında da garanti kapsamındaki
              talepleri hızla çözüme kavuşturarak uzun soluklu bir güven
              ilişkisi kurarız.
            </p>
            <p className="mt-4 text-neutral-600">
              Bugün İstanbul genelinde tamamladığımız konut projeleri ve devam
              eden şantiyelerimizle büyümeye devam ediyoruz. Mesby Yapı
              ailesi olarak hedefimiz, sadece bina inşa etmek değil;
              sakinlerine değer katan, sürdürülebilir ve zamanın ötesinde
              kalan yaşam alanları üretmektir. Bu vizyonla İstanbul&apos;un
              inşaat sektöründe güvenilir bir marka olmayı sürdürüyoruz.
            </p>
            <p className="mt-4 text-neutral-600">
              Enerji verimliliği yüksek yalıtım malzemeleri, ortak alanlarda
              kullanılan dayanıklı yüzeyler ve akıllı bina altyapılarıyla,
              teslim ettiğimiz her konutun uzun yıllar boyunca düşük işletme
              maliyetiyle yaşanabilir kalmasını hedefliyoruz.
              Bayrampaşa&apos;daki merkez ofisimizden yürüttüğümüz saha
              denetimleriyle, her aşamada kalite standartlarımızın
              korunduğundan emin oluyoruz.
            </p>
            <p className="mt-4 text-neutral-600">
              Ekibimiz; mimarlardan inşaat mühendislerine, proje
              yöneticilerinden satış danışmanlarına kadar geniş bir uzmanlık
              yelpazesini bir araya getirir. Bu çok disiplinli yapı sayesinde,
              bir arsanın değerlendirilmesinden dairenin anahtar tesliminde
              teslim edilmesine kadar geçen sürecin her adımını titizlikle
              planlar ve uygularız; böylece hem zaman hem de bütçe
              öngörülebilirliği sağlarız.
            </p>
            <p className="mt-4 text-neutral-600">
              Mesby Yapı olarak, sadece konut üretmekle kalmayıp yaşadığımız
              şehre de değer katmayı önemsiyoruz. Projelerimizi planlarken
              çevredeki ulaşım ağlarını, sosyal donatı alanlarını ve yeşil
              alan oranlarını gözeterek, sakinlerinin günlük yaşamını
              kolaylaştıran, sürdürülebilir mahalleler oluşturmaya özen
              gösteriyoruz. Önümüzdeki dönemde de İstanbul&apos;un farklı
              bölgelerinde yeni konut projeleri geliştirerek, sektördeki
              güvenilirliğimizi ve deneyimimizi daha da ileriye taşımayı
              hedefliyoruz.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[380px]">
            <BuildingArt
              art={ABOUT_IMAGE}
              className="h-full w-full"
              alt="Mesby Yapı mühendislik ekibi ve inşaat sahası"
            />{" "}
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
        <SectionHeader
          kicker="Yol Haritamız"
          title="Zaman İçinde Mesby"
          align="center"
        />
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
