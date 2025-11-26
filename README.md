# Personal Site

Kürşat Demirdelen — Kişisel site scaffold (Next.js + Tailwind + TypeScript)

## Özellikler

- **Tek sayfa ana tanıtım**: About + Projects bölümleri
- **Ayrı sayfalar**: Hobiler (`/hobbies`), Blog (`/blog`)
- **Minimal, koyu tema**: Racing / cultofdrive havasına uygun tasarım
- **Modüler yapı**: Yeniden kullanılabilir bileşenler
- **Placeholder içerik**: Kolayca değiştirilebilir

## Teknolojiler

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Proje Yapısı

```
src/
├── app/
│   ├── page.tsx          # Ana sayfa (About + Projects)
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global stiller
│   ├── hobbies/
│   │   └── page.tsx      # Hobiler sayfası
│   └── blog/
│       └── page.tsx      # Blog sayfası
├── components/           # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx        # Navigasyon başlığı
│   ├── Footer.tsx        # Sayfa altbilgisi
│   ├── PageLayout.tsx    # Ortak sayfa layout'u
│   ├── ProjectCard.tsx   # Proje kartı bileşeni
│   ├── HobbyCard.tsx     # Hobi kartı bileşeni
│   ├── BlogPostCard.tsx  # Blog yazısı kartı bileşeni
│   ├── Tag.tsx           # Etiket bileşeni
│   └── index.ts          # Bileşen export'ları
└── data/                 # Placeholder içerik verileri
    ├── site.ts           # Site konfigürasyonu
    ├── projects.ts       # Proje verileri
    ├── hobbies.ts        # Hobi verileri
    ├── blog.ts           # Blog yazıları
    └── index.ts          # Data export'ları
```

## İçerik Özelleştirme

Placeholder içerikleri değiştirmek için sadece `src/data/` klasöründeki dosyaları düzenleyin:

1. **`src/data/site.ts`** - Site ismi, başlık ve açıklama
2. **`src/data/projects.ts`** - Projeleriniz
3. **`src/data/hobbies.ts`** - Hobileriniz
4. **`src/data/blog.ts`** - Blog yazılarınız

## Geliştirme Önerileri

### Kısa Vadeli
- [ ] SEO meta etiketleri ekle (Open Graph, Twitter Cards)
- [ ] Responsive tasarımı mobilde test et
- [ ] Contact sayfası ekle
- [ ] Sosyal medya linkleri ekle

### Orta Vadeli
- [ ] Blog yazıları için MDX desteği ekle
- [ ] Blog yazıları için dinamik routing (`/blog/[slug]`)
- [ ] Proje detay sayfaları ekle
- [ ] Animasyonlar için Framer Motion entegre et
- [ ] Dark/Light tema toggle'ı ekle

### Uzun Vadeli
- [ ] CMS entegrasyonu (Contentful, Sanity, veya Notion)
- [ ] Analytics entegrasyonu (Vercel Analytics, Plausible)
- [ ] Contact form için backend (Resend, EmailJS)
- [ ] RSS feed oluştur
- [ ] i18n (çoklu dil) desteği
- [ ] Lighthouse performans optimizasyonu
