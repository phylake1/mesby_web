// Şirket iletişim bilgileri - gerçek verilerle güncellenmelidir.
export const SITE = {
  phoneDisplay: "0 542 122 48 47",
  whatsappNumber: "905421224847",
  email: "info@mesbyyapi.com",
  address: "Cevatpaşa, 100. Yıl Cd No:18, 34100 Bayrampaşa/İstanbul",
  mapsQuery: "Cevatpaşa, 100. Yıl Cd No:18, 34100 Bayrampaşa/İstanbul",
  workingHours: "Pazartesi - Cumartesi, 09:00 - 18:00",
  social: {
    instagram: "https://instagram.com/mesbyyapi",
    facebook: "https://facebook.com/mesbyyapi",
    sahibinden: "https://mesbygayrimenkul.sahibinden.com/",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function mapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
