import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "mesby-panorama-konutlari",
    title: "Mesby Panorama Konutları",
    location: "Ataşehir, İstanbul",
    status: "Devam Ediyor",
    year: "2027",
    unitCount: "84 Daire",
    summary:
      "Şehir manzarasına hakim, modern mimariye sahip konfor odaklı konut projesi.",
    description:
      "Mesby Panorama Konutları, Ataşehir'in merkezi konumunda, geniş yeşil alanları ve şehir manzarasıyla öne çıkan bir yaşam projesidir. Depreme dayanıklı yapı teknolojisi ve enerji verimli malzemeler kullanılarak inşa edilmektedir.",
    features: [
      "Kapalı ve açık otopark",
      "Sosyal tesis ve fitness alanı",
      "7/24 güvenlik ve kamera sistemi",
      "Akıllı ev altyapısı",
      "Deprem yönetmeliğine uygun yapı",
    ],
    images: [
      "mesby-panorama-konutlari-1",
      "mesby-panorama-konutlari-2",
      "mesby-panorama-konutlari-3",
      "mesby-panorama-konutlari-4",
      "mesby-panorama-konutlari-5",
    ],
  },
  {
    slug: "mesby-vadi-evleri",
    title: "Mesby Vadi Evleri",
    location: "Çekmeköy, İstanbul",
    status: "Tamamlandı",
    year: "2023",
    unitCount: "52 Daire",
    summary: "Doğayla iç içe, aile yaşamına uygun geniş bahçeli konutlar.",
    description:
      "Mesby Vadi Evleri, Çekmeköy'ün sakin ve doğayla iç içe bölgesinde aileler için tasarlanmış geniş daire seçenekleri sunar. Proje tamamlanmış olup teslimleri gerçekleştirilmiştir.",
    features: [
      "Özel bahçe katı seçenekleri",
      "Çocuk oyun alanı",
      "Kapalı yüzme havuzu",
      "Site içi yürüyüş parkuru",
      "Isı yalıtımlı dış cephe",
    ],
    images: [
      "mesby-vadi-evleri-1",
      "mesby-vadi-evleri-2",
      "mesby-vadi-evleri-3",
      "mesby-vadi-evleri-4",
    ],
  },
  {
    slug: "mesby-loft-rezidans",
    title: "Mesby Loft Rezidans",
    location: "Maltepe, İstanbul",
    status: "Yakında",
    year: "2028",
    unitCount: "120 Daire",
    summary: "Sahil hattına yakın, yatırım değeri yüksek rezidans konsepti.",
    description:
      "Mesby Loft Rezidans, Maltepe sahiline kısa yürüme mesafesinde, yatırımcılar ve şehir yaşamını seven aileler için planlanan bir rezidans projesidir. Satışlar yakında başlayacaktır.",
    features: [
      "Sahile yürüme mesafesi",
      "Rezidans concierge hizmeti",
      "Kapalı otopark ve şarj istasyonu",
      "Çok amaçlı toplantı salonu",
      "Teras katta ortak kullanım alanı",
    ],
    images: [
      "mesby-loft-rezidans-1",
      "mesby-loft-rezidans-2",
      "mesby-loft-rezidans-3",
      "mesby-loft-rezidans-4",
      "mesby-loft-rezidans-5",
      "mesby-loft-rezidans-6",
    ],
  },
  {
    slug: "mesby-bahce-konaklari",
    title: "Mesby Bahçe Konakları",
    location: "Sancaktepe, İstanbul",
    status: "Tamamlandı",
    year: "2021",
    unitCount: "38 Daire",
    summary: "Müstakil konak hissi veren, geniş metrekareli aile konutları.",
    description:
      "Mesby Bahçe Konakları, geniş daire metrekareleri ve özel bahçe kullanımlarıyla müstakil ev konforunu site güvenliğiyle birleştiren tamamlanmış bir projedir.",
    features: [
      "Geniş daire metrekareleri (4+1, 5+1)",
      "Özel bahçe kullanım alanları",
      "Site içi kamelya ve piknik alanı",
      "Kapalı garaj",
      "Jeneratör desteği",
    ],
    images: [
      "mesby-bahce-konaklari-1",
      "mesby-bahce-konaklari-2",
      "mesby-bahce-konaklari-3",
      "mesby-bahce-konaklari-4",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
