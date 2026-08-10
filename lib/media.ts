// Hero slider ve site genelindeki sayfa üstü banner'lar gibi nadiren değişen,
// admin panelden yönetilmeyen statik görsel/video içerikleri. Cloudinary'de
// "mesby-site-assets" klasörüne elle yüklenip URL'leri buraya yapıştırılır.
//
// Cloudinary URL'lerine f_auto,q_auto (görsel) veya q_auto (video) ekleyerek
// otomatik format/kalite optimizasyonu (WebP/AVIF, cihaza göre boyutlandırma)
// sağlanır.

// Tüm sayfa üstü banner'larda (Hakkımızda, Projeler, İlanlar, İletişim)
// tekrar kullanılan tek görsel.
export const SITE_BANNER =
  "https://res.cloudinary.com/dcffal0kw/image/upload/f_auto,q_auto/v1786309026/about-banner_g0kklo.jpg";

// Anasayfa "Hakkımızda" tanıtım bölümü ve Hakkımızda sayfası "Hikayemiz"
// bölümünde tekrar kullanılan tek görsel.
export const ABOUT_IMAGE =
  "https://res.cloudinary.com/dcffal0kw/image/upload/f_auto,q_auto/v1786309024/about_ufexkl.jpg";

// Hero slider videoları (şimdilik 2 slide).
export const HERO_MEDIA = {
  slide1:
    "https://res.cloudinary.com/dcffal0kw/video/upload/q_auto/v1786204454/hero-1_tpb5p9.mp4",
  slide2:
    "https://res.cloudinary.com/dcffal0kw/video/upload/q_auto/v1786204405/hero-1_fd7tqf.mp4",
};