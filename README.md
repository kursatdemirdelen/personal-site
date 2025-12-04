# Personal Site

Kürşat Demirdelen — Modern, performanslı ve erişilebilir kişisel web sitesi

## ✨ Özellikler

- **Modern Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4
- **SEO Optimizasyonu**: Meta tags, Open Graph, Twitter Cards, Sitemap, Robots.txt
- **Erişilebilirlik**: ARIA etiketleri, klavye navigasyonu, semantik HTML
- **Performans**: React Strict Mode, CSS optimizasyonu, otomatik görsel optimizasyonu
- **Tasarım Sistemi**: Token-tabanlı tema, tutarlı spacing ve tipografi
- **Dinamik Rotalar**: Blog yazıları ve projeler için otomatik sayfa oluşturma
- **Karanlık Tema**: Racing / cult of drive tarzında minimal ve şık tasarım
- **Modüler Yapı**: Yeniden kullanılabilir bileşenler ve tip güvenliği

## 🚀 Teknolojiler

- [Next.js 16](https://nextjs.org/) - App Router ile React framework
- [React 19](https://react.dev/) - UI kütüphanesi
- [TypeScript 5](https://www.typescriptlang.org/) - Tip güvenliği
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Tarayıcıda aç: http://localhost:3000
```

## 🏗️ Build ve Deploy

```bash
# Production build oluştur
npm run build

# Production sunucusunu başlat
npm start

# Lint kontrolü
npm run lint
```

### Vercel'e Deploy

1. GitHub'a push yap:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. [Vercel](https://vercel.com)'e giriş yap ve "Import Project" seç

3. GitHub repository'ni bağla

4. Build ayarları otomatik algılanacak:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. Deploy'a tıkla ve otomatik yayınlanmayı bekle

6. `src/data/site.ts` dosyasında `url` alanını Vercel domain'inle güncelle

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── page.tsx              # Ana sayfa (About + Projects)
│   ├── layout.tsx            # Root layout (metadata, fonts)
│   ├── globals.css           # Global stiller ve tema tokenları
│   ├── sitemap.ts            # Otomatik sitemap
│   ├── robots.txt            # SEO robots dosyası
│   ├── blog/
│   │   ├── page.tsx          # Blog liste sayfası
│   │   └── [slug]/
│   │       └── page.tsx      # Dinamik blog yazı sayfası
│   ├── hobbies/
│   │   └── page.tsx          # Hobiler sayfası
│   └── projects/
│       └── [slug]/
│           └── page.tsx      # Dinamik proje detay sayfası
├── components/               # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx            # Navigasyon (a11y, active state)
│   ├── Footer.tsx            # Sayfa altbilgisi (sosyal linkler)
│   ├── PageLayout.tsx        # Ortak sayfa layout'u
│   ├── Section.tsx           # Standart bölüm bileşeni
│   ├── ProjectCard.tsx       # Proje kartı
│   ├── HobbyCard.tsx         # Hobi kartı
│   ├── BlogPostCard.tsx      # Blog yazısı kartı
│   ├── Tag.tsx               # Etiket bileşeni
│   └── index.ts              # Bileşen export'ları
├── data/                     # İçerik verileri
│   ├── site.ts               # Site konfigürasyonu
│   ├── projects.ts           # Proje listesi (slug dahil)
│   ├── hobbies.ts            # Hobi listesi
│   ├── blog.ts               # Blog yazıları (slug dahil)
│   └── index.ts              # Data export'ları
└── types/
    └── index.ts              # TypeScript tip tanımları
```

## 🎨 İçerik Özelleştirme

İçerikleri özelleştirmek için `src/data/` klasöründeki dosyaları düzenleyin:

### 1. Site Bilgileri (`src/data/site.ts`)
```typescript
export const siteConfig = {
  name: "Adınız",
  title: "Unvanınız",
  url: "https://your-domain.vercel.app", // Vercel domain'inizi yazın
  socialLinks: { ... },
  skills: [ ... ]
};
```

### 2. Projeler (`src/data/projects.ts`)
- Her projeye benzersiz `slug` ekleyin
- `url` isteğe bağlı (GitHub, demo linki)

### 3. Blog Yazıları (`src/data/blog.ts`)
- Her yazıya benzersiz `slug` ekleyin
- Tarih formatı: "December 15, 2024"

### 4. Hobiler (`src/data/hobbies.ts`)
- Emoji icon'lar kullanın
- Kısa açıklamalar ekleyin

## 🎯 Tema Tokenları

Tasarım sistemi `src/app/globals.css` içinde CSS değişkenleri ile tanımlı:

- **Renkler**: `--color-background`, `--color-foreground`, `--color-accent`, `--color-muted`, `--color-border`
- **Yüzeyler**: `--surface-1`, `--surface-2`
- **Spacing**: `--space-1` (4px) → `--space-8` (32px)
- **Radius**: `--radius-sm` (8px), `--radius-md` (12px)
- **Tipografi**: `--heading-tracking` (-0.02em)

## 🔧 Geliştirme Notları

### Type Safety
- Tüm tipler `src/types/index.ts` dosyasında merkezi olarak tanımlanmıştır
- `Project`, `BlogPost`, `Hobby` interface'leri
- `slug` alanları zorunludur (dinamik rotalar için)

### Bileşen Yapısı
- `Section`: Standart sayfa bölümü (başlık + açıklama + içerik)
- Kartlar: Hover efektleri, token tabanlı stiller
- `PageLayout`: Header + Footer ile sarmalama

### Erişilebilirlik
- `aria-current="page"` aktif navigasyon için
- `focus-visible` klavye navigasyonu için
- Semantik HTML5 elementleri
- SVG icon'larda `aria-hidden="true"`

## 🚀 Sonraki Adımlar

### Hızlı Kazanımlar
- [x] SEO meta tags (Open Graph, Twitter Cards)
- [x] Sitemap ve robots.txt
- [x] Responsive tasarım (Tailwind responsive classes)
- [x] Sosyal medya linkleri (Header ve Footer)
- [x] Dinamik routing (blog/projects)
- [ ] Analytics entegrasyonu (Vercel Analytics)
- [ ] Custom 404 sayfası

### Orta Vadeli
- [ ] MDX desteği (blog için rich content)
- [ ] Contact form (Resend, EmailJS)
- [ ] RSS feed
- [ ] Proje galeri görselleri
- [ ] Blog yazıları için etiket filtreleme
- [ ] Dark/Light tema toggle (sistem tercihi + manuel)

### Uzun Vadeli
- [ ] CMS entegrasyonu (Contentful, Sanity, Notion API)
- [ ] i18n (TR/EN dil desteği)
- [ ] Blog yorum sistemi (Giscus)
- [ ] View counter (Vercel Edge Config)
- [ ] Newsletter signup
- [ ] Animasyonlar (Framer Motion)

## 📝 Lisans

MIT License - İstediğiniz gibi kullanın!

---

**Made with ❤️ using Next.js 16, React 19, and Tailwind CSS 4**
