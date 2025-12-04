# Development Roadmap

## 🎯 Current Status (Completed)
- ✅ Modern stack (Next.js 16 + React 19 + TypeScript + Tailwind 4)
- ✅ SEO optimization (metadata, sitemap, robots.txt, RSS feed)
- ✅ Accessibility features (ARIA, keyboard nav)
- ✅ Design system with tokens
- ✅ Dynamic routes (blog/projects with detail pages)
- ✅ Custom 404 page
- ✅ Dark/Light theme toggle (next-themes)
- ✅ Blog tag filtering (client-side)
- ✅ Hover animations (hobbies, cards)
- ✅ "Back to top" button in footer
- ✅ Relative date formatting (2 days ago)
- ✅ Navigation loading indicator

---

## 🎨 Faz 1: Hızlı Kazanımlar (30dk - 2 saat her biri)

### 1. Proje Kartları Tıklanabilir 🟢 (Kolay - 30dk)
- [ ] ProjectCard'ı Link ile sarma (BlogPostCard gibi)
- [ ] Hover efektleri ekle
- [ ] Detay sayfasına yönlendirme
- **Bağımlılık**: Yok
- **Öncelik**: Yüksek

### 2. Loading Skeleton'ları 🟡 (Orta - 1.5 saat)
- [ ] Skeleton component oluştur
- [ ] Blog listesi için skeleton
- [ ] Proje kartları için skeleton
- [ ] Suspense boundaries ekle
- **Bağımlılık**: Yok
- **Öncelik**: Orta

### 3. Scroll Progress Bar 🟢 (Kolay - 1 saat)
- [ ] Blog detay sayfasında scroll tracker
- [ ] Üstte accent renkli progress bar
- [ ] Scroll position hesaplama
- **Bağımlılık**: Yok
- **Öncelik**: Orta

### 4. Sosyal Share Butonları 🟢 (Kolay - 1.5 saat)
- [ ] Twitter/LinkedIn share butonları
- [ ] Copy link butonu (clipboard API)
- [ ] Share component oluştur
- [ ] Blog detayda göster
- **Bağımlılık**: Yok
- **Öncelik**: Yüksek

### 5. Reading Time Hesaplama 🟢 (Kolay - 30dk)
- [ ] Word count fonksiyonu yaz
- [ ] Ortalama okuma hızı (200-250 wpm)
- [ ] Blog verilerinde otomatik hesapla
- [ ] util/readingTime.ts oluştur
- **Bağımlılık**: Yok
- **Öncelik**: Düşük

---

## 🚀 Faz 2: Orta Seviye Özellikler (2-4 saat her biri)

### 6. MDX Blog İçeriği 🟡 (Orta - 3 saat)
- [ ] `@next/mdx` veya `next-mdx-remote` kur
- [ ] `/content/blog/*.mdx` klasör yapısı
- [ ] Frontmatter parsing
- [ ] Syntax highlighting (shiki/prism)
- [ ] Code block styling
- [ ] MDX components (callout, image, etc.)
- **Bağımlılık**: `@next/mdx`, `gray-matter`, `shiki`
- **Öncelik**: Yüksek

### 7. Blog Kategorileri/Arşiv 🟡 (Orta - 2 saat)
- [ ] Aya göre blog gruplama
- [ ] Kategori sayfaları (/blog/category/[slug])
- [ ] Sidebar ile kategori listesi
- [ ] Archive sayfası (/blog/archive)
- **Bağımlılık**: Yok
- **Öncelik**: Orta

### 8. Search/Filter Genişletme 🟡 (Orta - 2.5 saat)
- [ ] Blog için text search
- [ ] Proje için search
- [ ] Debounce ile optimize et
- [ ] No results state
- **Bağımlılık**: Yok
- **Öncelik**: Orta

### 9. Related Posts 🟡 (Orta - 2 saat)
- [ ] Tag benzerliğine göre algoritma
- [ ] Blog detayda "Related Posts" bölümü
- [ ] En az 3 benzer yazı göster
- [ ] Fallback: en yeni yazılar
- **Bağımlılık**: Yok
- **Öncelik**: Düşük

### 10. Table of Contents 🟡 (Orta - 2.5 saat)
- [ ] Blog detayda heading'leri parse et
- [ ] Sticky sidebar TOC
- [ ] Active section tracking
- [ ] Smooth scroll to section
- **Bağımlılık**: MDX (Faz 2.6)
- **Öncelik**: Orta

---

## 🎯 Faz 3: İleri Seviye (4+ saat her biri)

### 11. Analytics Dashboard 🟡 (Orta - 4 saat)
- [ ] Upstash Redis view counter
- [ ] API route oluştur
- [ ] "Popular posts" widget
- [ ] Homepage'de stats göster
- **Bağımlılık**: `@upstash/redis`
- **Öncelik**: Düşük

### 12. Newsletter Signup 🟡 (Orta - 3 saat)
- [ ] Resend/ConvertKit entegrasyonu
- [ ] Newsletter form component
- [ ] API route
- [ ] Success/error states
- [ ] GDPR-friendly
- **Bağımlılık**: `resend` veya ConvertKit API
- **Öncelik**: Düşük

### 13. Comments (Giscus) 🟡 (Orta - 2 saat)
- [ ] GitHub Discussions setup
- [ ] `@giscus/react` kur
- [ ] Blog detayda göster
- [ ] Dark theme uyumu
- [ ] Lazy loading
- **Bağımlılık**: `@giscus/react`
- **Öncelik**: Düşük

### 14. OG Image Generation 🔴 (Karmaşık - 4 saat)
- [ ] Vercel OG kullan
- [ ] Blog için dinamik OG image
- [ ] Proje için OG image
- [ ] Custom template tasarla
- **Bağımlılık**: `@vercel/og`
- **Öncelik**: Orta

### 15. Performance Optimization 🟡 (Orta - 3 saat)
- [ ] Image optimization audit
- [ ] Font optimization (local fonts)
- [ ] Bundle analysis (`@next/bundle-analyzer`)
- [ ] Lighthouse audit 90+ score
- [ ] Core Web Vitals optimize
- **Bağımlılık**: `@next/bundle-analyzer`
- **Öncelik**: Yüksek

---

## 💎 Faz 4: Premium Özellikler

### 16. i18n (TR/EN) 🔴 (Karmaşık - 6+ saat)
- [ ] `next-intl` kur ve config
- [ ] Dil seçici UI (Header)
- [ ] Tüm metinleri çevir (TR/EN)
- [ ] Locale-based routing
- [ ] SEO hreflang tags
- [ ] Content translation (blog/projects)
- **Bağımlılık**: `next-intl`
- **Öncelik**: Düşük

### 17. CMS Entegrasyonu 🔴 (Karmaşık - 8+ saat)
- [ ] CMS seçimi (Contentful/Sanity/Notion)
- [ ] API entegrasyonu
- [ ] ISR/SSG stratejisi
- [ ] Preview mode
- [ ] Webhook ile revalidation
- [ ] Migration scripti
- **Bağımlılık**: CMS SDK
- **Öncelik**: Çok Düşük

### 18. Project Showcase 🟡 (Orta - 4 saat)
- [ ] Proje screenshot'ları ekle
- [ ] Image gallery component
- [ ] Demo video embed (YouTube/Vimeo)
- [ ] Live demo iframe embed
- [ ] Lightbox modal
- **Bağımlılık**: Yok (next/image built-in)
- **Öncelik**: Orta

### 19. Contact Form 🟡 (Orta - 3 saat)
- [ ] Contact sayfası oluştur
- [ ] Form UI (name, email, message)
- [ ] `zod` validation schema
- [ ] `react-hook-form` entegrasyonu
- [ ] Resend/EmailJS API entegrasyonu
- [ ] Success/error states
- [ ] Rate limiting (simple)
- **Bağımlılık**: `resend`, `zod`, `react-hook-form`
- **Öncelik**: Orta

---

## 🎬 Önerilen Uygulama Sırası

### Bu Hafta (Hızlı Deploy)
1. ✅ Proje kartları tıklanabilir
2. ✅ Sosyal share butonları
3. ✅ Scroll progress bar
4. ✅ Reading time hesaplama
5. → **DEPLOY!**

### Gelecek Hafta
6. MDX Blog içeriği
7. Related posts
8. Table of Contents
9. Performance optimization

### Bu Ay
10. OG Image generation
11. Search/Filter genişletme
12. Blog kategorileri
13. Newsletter signup

### Uzun Vade
14. Comments (Giscus)
15. Analytics dashboard
16. i18n (TR/EN)
17. CMS entegrasyonu

---

## 📝 Notlar

- ✅ **Faz 1 tamamlandı**: RSS, tag filtering, theme toggle, animations, relative dates
- 🎯 **Şimdi**: Hızlı kazanımlar (1-5) yapılmalı
- Her özellik bağımsız olarak geliştirilebilir
- Build sürekli çalışır durumda kalmalı
- Her feature için ayrı commit
- Production'a her feature sonrası deploy mümkün
