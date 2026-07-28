import { Listing } from "./types";

// Demo veriler. Sahibinden.com API entegrasyonu bağlandığında bu liste
// gerçek ilan verisiyle (fiyat, m2, oda sayısı, ilan linki, görseller vb.)
// değiştirilecek. `images` alanındaki anahtarlar ileride Cloudinary
// public_id'lerine dönüşecek.
export const listings: Listing[] = [
  {
    id: "mesby-1001",
    title: "Mesby Panorama Konutları'nda Satılık 3+1",
    price: 4250000,
    currency: "TL",
    m2: 145,
    rooms: "3+1",
    floor: "6. Kat",
    buildingAge: "0 (Yeni)",
    district: "Ataşehir",
    city: "İstanbul",
    isNew: true,
    publishedAt: "2026-07-02",
    description:
      "Mesby Panorama Konutları içerisinde, şehir manzaralı, güneye cepheli ve ferah bir 3+1 daire. Geniş balkonu ve kaliteli iç mekan işçiliğiyle oturuma hazır durumdadır.",
    features: [
      "Kapalı otopark",
      "Kombi (doğalgaz)",
      "Krediye uygun",
      "Eşyalı değil",
      "Güvenlik (7/24)",
      "Isı yalıtımlı",
    ],
    images: [
      "mesby-1001-1",
      "mesby-1001-2",
      "mesby-1001-3",
      "mesby-1001-4",
      "mesby-1001-5",
    ],
  },
  {
    id: "mesby-1002",
    title: "Kadıköy'de Satılık Deniz Manzaralı 2+1",
    price: 3100000,
    currency: "TL",
    m2: 95,
    rooms: "2+1",
    floor: "3. Kat",
    buildingAge: "5-10",
    district: "Kadıköy",
    city: "İstanbul",
    isNew: false,
    publishedAt: "2026-06-21",
    description:
      "Kadıköy'ün merkezi bir noktasında, deniz manzaralı, toplu taşımaya ve sosyal alanlara yürüme mesafesinde 2+1 daire. Bakımlı bina ve düzenli yönetimiyle dikkat çekiyor.",
    features: [
      "Deniz manzarası",
      "Asansörlü bina",
      "Kombi (doğalgaz)",
      "Krediye uygun",
      "Otopark (açık)",
    ],
    images: ["mesby-1002-1", "mesby-1002-2", "mesby-1002-3", "mesby-1002-4"],
  },
  {
    id: "mesby-1003",
    title: "Mesby Bahçe Konakları'nda Bahçe Katı 4+1",
    price: 6750000,
    currency: "TL",
    m2: 210,
    rooms: "4+1",
    floor: "Bahçe Katı",
    buildingAge: "5-10",
    district: "Sancaktepe",
    city: "İstanbul",
    isNew: false,
    publishedAt: "2026-06-14",
    description:
      "Mesby Bahçe Konakları'nda özel bahçe kullanımına sahip, geniş metrekareli 4+1 daire. Aile yaşamına uygun sessiz ve güvenli bir site içerisinde yer almaktadır.",
    features: [
      "Özel bahçe kullanımı",
      "Kapalı garaj",
      "Site içi güvenlik",
      "Krediye uygun",
      "Eşyalı değil",
      "Jeneratör",
    ],
    images: [
      "mesby-1003-1",
      "mesby-1003-2",
      "mesby-1003-3",
      "mesby-1003-4",
      "mesby-1003-5",
    ],
  },
  {
    id: "mesby-1004",
    title: "Üsküdar'da Yatırımlık Satılık 1+1",
    price: 2450000,
    currency: "TL",
    m2: 65,
    rooms: "1+1",
    floor: "2. Kat",
    buildingAge: "10-15",
    district: "Üsküdar",
    city: "İstanbul",
    isNew: false,
    publishedAt: "2026-05-30",
    description:
      "Üsküdar'da toplu taşımaya yakın, yatırım amaçlı değerlendirilebilecek kompakt 1+1 daire. Kiracısı olmayan, boş teslim edilecek durumdadır.",
    features: [
      "Boş teslim",
      "Kombi (doğalgaz)",
      "Yatırıma uygun",
      "Krediye uygun",
    ],
    images: ["mesby-1004-1", "mesby-1004-2", "mesby-1004-3"],
  },
  {
    id: "mesby-1005",
    title: "Çekmeköy Vadi Evleri'nde Satılık 3+1 Dubleks",
    price: 3850000,
    currency: "TL",
    m2: 130,
    rooms: "3+1",
    floor: "Dubleks",
    buildingAge: "0 (Yeni)",
    district: "Çekmeköy",
    city: "İstanbul",
    isNew: true,
    publishedAt: "2026-07-06",
    description:
      "Mesby Vadi Evleri'nde doğayla iç içe, dubleks kullanıma sahip sıfır 3+1 daire. Site içi sosyal olanaklardan faydalanma imkanı sunar.",
    features: [
      "Dubleks kullanım",
      "Site içi yürüyüş parkuru",
      "Kapalı yüzme havuzu",
      "Krediye uygun",
      "Isı yalıtımlı",
    ],
    images: [
      "mesby-1005-1",
      "mesby-1005-2",
      "mesby-1005-3",
      "mesby-1005-4",
      "mesby-1005-5",
    ],
  },
  {
    id: "mesby-1006",
    title: "Maltepe Sahil Hattına Yakın Satılık 5+1",
    price: 8900000,
    currency: "TL",
    m2: 260,
    rooms: "5+1",
    floor: "8. Kat",
    buildingAge: "0 (Yeni)",
    district: "Maltepe",
    city: "İstanbul",
    isNew: true,
    publishedAt: "2026-07-08",
    description:
      "Maltepe sahiline kısa yürüme mesafesinde, geniş metrekareli ve yüksek katta konumlanan sıfır 5+1 daire. Rezidans konforu ve deniz manzarası bir arada.",
    features: [
      "Deniz manzarası",
      "Rezidans concierge",
      "Kapalı otopark ve şarj istasyonu",
      "Krediye uygun",
      "Akıllı ev altyapısı",
    ],
    images: [
      "mesby-1006-1",
      "mesby-1006-2",
      "mesby-1006-3",
      "mesby-1006-4",
      "mesby-1006-5",
      "mesby-1006-6",
    ],
  },
];

export function getListingById(id: string) {
  return listings.find((listing) => listing.id === id);
}

export const SAHIBINDEN_STORE_URL = "https://www.sahibinden.com/";
