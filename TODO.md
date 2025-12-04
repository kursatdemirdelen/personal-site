# Development Roadmap

## 🎯 Current Status
- ✅ Modern stack (Next.js 16 + React 19 + TypeScript + Tailwind 4)
- ✅ SEO optimization (metadata, sitemap, robots.txt)
- ✅ Accessibility features (ARIA, keyboard nav)
- ✅ Design system with tokens
- ✅ Dynamic routes (blog/projects)
- ✅ Custom 404 page

---

## 📋 Orta Vadeli Geliştirmeler

### 1. RSS Feed 🟢 (Kolay - 30dk)
- [ ] `/feed.xml` route oluştur
- [ ] Blog yazılarını RSS/Atom formatına çevir
- [ ] Metadata ve description ekle
- [ ] Sitemap'e RSS feed link ekle
- **Bağımlılık**: Yok, built-in
- **Öncelik**: Yüksek

### 2. Blog Tag Filtreleme 🟢 (Kolay - 1 saat)
- [ ] `/blog` sayfasında tag filter UI ekle
- [ ] URL query params ile filtreleme (`?tag=React`)
- [ ] Aktif tag gösterimi
- [ ] "Tümünü göster" butonu
- **Bağımlılık**: Yok
- **Öncelik**: Yüksek

### 3. Dark/Light Tema Toggle 🟡 (Orta - 2 saat)
- [ ] `next-themes` kur
- [ ] Theme provider ekle
- [ ] Header'a tema toggle butonu
- [ ] localStorage persistence
- [ ] Smooth transitions
- **Bağımlılık**: `next-themes`
- **Öncelik**: Orta

### 4. MDX Blog Desteği 🟡 (Orta - 3 saat)
- [ ] `@next/mdx` veya `next-mdx-remote` kur
- [ ] `/content/blog/*.mdx` klasör yapısı
- [ ] Frontmatter parsing
- [ ] Syntax highlighting (shiki/prism)
- [ ] Code block styling
- [ ] MDX components (callout, image, etc.)
- **Bağımlılık**: `@next/mdx`, `gray-matter`, `shiki`
- **Öncelik**: Orta

### 5. Contact Form 🟡 (Orta - 3 saat)
- [ ] Contact sayfası oluştur
- [ ] Form UI (name, email, message)
- [ ] `zod` validation schema
- [ ] `react-hook-form` entegrasyonu
- [ ] Resend/EmailJS API entegrasyonu
- [ ] Success/error states
- [ ] Rate limiting (simple)
- **Bağımlılık**: `resend`, `zod`, `react-hook-form`
- **Öncelik**: Orta

### 6. Proje Görselleri 🟡 (Orta - 2 saat)
- [ ] `public/projects/` klasöründe görseller
- [ ] `next/image` ile optimize edilmiş görseller
- [ ] ProjectCard'a görsel ekle
- [ ] Lightbox/modal için basit component
- [ ] Lazy loading
- **Bağımlılık**: Yok (next/image built-in)
- **Öncelik**: Düşük

---

## 🚀 Uzun Vadeli Geliştirmeler

### 7. Blog Yorum Sistemi (Giscus) 🟡 (Orta - 2 saat)
- [ ] GitHub Discussions repo kurulumu
- [ ] `@giscus/react` kur
- [ ] Blog detay sayfasına Giscus component
- [ ] Dark theme uyumu
- [ ] Lazy loading
- **Bağımlılık**: `@giscus/react`
- **Öncelik**: Düşük

### 8. Framer Motion Animasyonlar 🟡 (Orta - 3 saat)
- [ ] `framer-motion` kur
- [ ] Sayfa geçiş animasyonları
- [ ] Scroll-triggered animations
- [ ] Card reveal effects
- [ ] Hover micro-interactions
- [ ] Performance test
- **Bağımlılık**: `framer-motion`
- **Öncelik**: Düşük

### 9. View Counter 🟡 (Orta - 3 saat)
- [ ] Upstash Redis account
- [ ] API route oluştur
- [ ] View counter component
- [ ] Blog/project detay sayfalarına ekle
- [ ] Privacy-friendly (no tracking)
- **Bağımlılık**: `@upstash/redis`
- **Öncelik**: Düşük

### 10. Newsletter Signup 🟡 (Orta - 2 saat)
- [ ] Resend/ConvertKit account
- [ ] Newsletter form component
- [ ] API route
- [ ] Double opt-in flow
- [ ] Success message
- [ ] GDPR notice
- **Bağımlılık**: `resend` veya ConvertKit API
- **Öncelik**: Düşük

### 11. i18n (TR/EN) 🔴 (Karmaşık - 6+ saat)
- [ ] `next-intl` kur ve config
- [ ] Dil seçici UI (Header)
- [ ] Tüm metinleri çevir (TR/EN)
- [ ] Locale-based routing
- [ ] SEO hreflang tags
- [ ] Content translation (blog/projects)
- **Bağımlılık**: `next-intl`
- **Öncelik**: Düşük

### 12. CMS Entegrasyonu 🔴 (Karmaşık - 8+ saat)
- [ ] CMS seçimi (Contentful/Sanity/Notion)
- [ ] API entegrasyonu
- [ ] ISR/SSG stratejisi
- [ ] Preview mode
- [ ] Webhook ile revalidation
- [ ] Migration scripti (mevcut data → CMS)
- **Bağımlılık**: CMS SDK
- **Öncelik**: Çok Düşük

---

## 🎬 Önerilen Sıralama

### Faz 1: Hızlı Kazanımlar (1-2 gün)
1. RSS Feed
2. Blog Tag Filtreleme
3. Dark/Light Tema Toggle

### Faz 2: İçerik Zenginleştirme (2-3 gün)
4. MDX Blog Desteği
5. Proje Görselleri
6. Contact Form

### Faz 3: Etkileşim & Topluluk (3-4 gün)
7. Blog Yorum Sistemi
8. Newsletter Signup
9. View Counter

### Faz 4: Polish & Genişletme (4+ gün)
10. Framer Motion Animasyonlar
11. i18n (TR/EN)
12. CMS Entegrasyonu

---

## 📝 Notlar

- Her özellik bağımsız olarak geliştirilebilir
- Build sürekli çalışır durumda kalmalı
- Her feature için ayrı commit
- Production'a her feature sonrası deploy mümkün
