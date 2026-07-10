// Şirket iletişim bilgileri - gerçek verilerle güncellenmelidir.
export const SITE = {
  phoneDisplay: "+90 (532) 000 00 00",
  whatsappNumber: "905320000000",
  email: "info@mesbyinsaat.com",
  address: "Ataşehir, İstanbul",
  social: {
    instagram: "https://instagram.com/mesbyinsaat",
    facebook: "https://facebook.com/mesbyinsaat",
    linkedin: "https://linkedin.com/company/mesbyinsaat",
    youtube: "https://youtube.com/@mesbyinsaat",
    sahibinden: "https://www.sahibinden.com/",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
