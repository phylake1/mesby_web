// Site genelinde SEO metadata'sı (metadataBase, canonical, JSON-LD, sitemap,
// robots) için kullanılan production domain'i.
export const SITE_URL = "https://www.mesbyyapi.com";
export const SITE_NAME = "Mesby Yapı";

// Şirket iletişim bilgileri - gerçek verilerle güncellenmelidir.
export const SITE = {
  phoneDisplay: "0 542 122 48 47",
  whatsappNumber: "905421224847",
  email: "info@mesbyyapi.com",
  city: "İstanbul",
  district: "Bayrampaşa",
  address: "Cevatpaşa, 100. Yıl Cd No:18, 34100 Bayrampaşa/İstanbul",
  mapsQuery: "Cevatpaşa, 100. Yıl Cd No:18, 34100 Bayrampaşa/İstanbul",
  workingHours: "Pazartesi - Cumartesi, 09:00 - 18:00",
  // Cevatpaşa Mahallesi, Bayrampaşa/İstanbul için mahalle merkezli yaklaşık
  // koordinatlar (OpenStreetMap Nominatim). JSON-LD'de "geo" alanı için
  // kullanılır; bina girişinin tam konumu değildir, gerekirse Google
  // Maps'ten alınacak kesin koordinatlarla güncellenmelidir.
  geo: {
    latitude: 41.070013,
    longitude: 28.8848582,
  },
  social: {
    instagram: "https://instagram.com/mesbyyapi",
    facebook: "https://facebook.com/mesbyyapi",
    sahibinden: "https://mesbygayrimenkul.sahibinden.com/",
  },
};

export function canonicalUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function mapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
