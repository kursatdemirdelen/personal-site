# Kişisel Web Sitesi

Next.js 16 ile yaptığım modern, hızlı ve minimalist kişisel site. Blog, projeler ve hobilerim burada.

[![CI](https://github.com/kursatdemirdelen/personal-site/workflows/CI/badge.svg)](https://github.com/kursatdemirdelen/personal-site/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 🎯 Ne var?

- **📝 Blog** — MDX ile yazıyorum, syntax highlighting, sosyal paylaşım (Twitter, Copy link)
- **💼 Projeler** — Yaptıklarımı gösteriyorum, tag bazlı filtreleme
- **🎨 Hobiler** — Nelerle uğraştığımı paylaşıyorum
- **🔍 SEO** — Sitemap, RSS feed, meta tags, Open Graph
- **🌓 Tema** — Karanlık/Açık tema (smooth geçişler, merkezi transition sistemi)
- **⚡ Performans** — Server Components, Static generation, MDX syntax highlighting
- **🇹🇷 Türkçe UI** — Tüm interface ve içerik Türkçe

---

## 🛠️ Teknolojiler

```
Next.js 16        React 19           TypeScript 5
Tailwind CSS 4    MDX Blog           next-themes
```

---

## 🚀 Hızlı Başlangıç

### 1. Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda: http://localhost:3000

### 2. Kişiselleştir

| Dosya | Değiştir |
|-------|----------|
| `src/data/site.ts` | Site bilgilerin (ad, başlık, sosyal linkler) |
| `src/data/projects.ts` | Projelerini ekle (4 örnek var) |
| `src/data/hobbies.ts` | Hobilerin (6 örnek var) |
| `src/app/page.tsx` | Ana sayfa "Hakkımda" bölümü |

### 3. Blog Yazısı Ekle

`content/blog/` klasörüne `.mdx` dosyası oluştur:

```mdx
---
title: "Blog Başlığı"
description: "Kısa açıklama"
date: "December 6, 2025"
readTime: "5 dk okuma"
tags: ["JavaScript", "Next.js"]
---

## Başlık

Yazını buraya yaz. Markdown kullanabilirsin.

\```javascript
console.log("Kod da yazabilirsin!");
\```
```

### 4. Deploy

Vercel'e push et → otomatik deploy

```bash
git push
```

---

## 📁 Proje Yapısı

```
src/
├── app/                 # Next.js sayfaları (Router, layout, sitemap)
├── components/          # React bileşenleri (14 adet, modüler)
│   ├── Header.tsx       # Navigasyon + Tema toggle
│   ├── Footer.tsx       # Sayfa altı + Sosyal linkler
│   ├── *Card.tsx        # Proje, Blog, Hobi kartları
│   └── ...
├── config/
│   └── mdx-components.tsx  # MDX styling (merkezi)
├── data/                # Site içeriği (buradan düzenle!)
│   ├── site.ts          # Konfigürasyon
│   ├── projects.ts      # Projeler listesi
│   ├── hobbies.ts       # Hobiler listesi
│   └── blog.ts          # Blog metadata
├── types/               # TypeScript tipleri
└── utils/               # Yardımcı fonksiyonlar

content/
└── blog/                # Blog yazıları (MDX)
```

---

## 🎨 Özelleştirme

### Renkler Değiştir

`src/app/globals.css`'de CSS değişkenleri:

```css
:root {
  --accent: #ff3333;           /* Ana renk */
  --background: #0a0a0a;       /* Arkaplan */
  --foreground: #ededed;       /* Metin */
}
```

### Tema Geçişleri

Global olarak smooth:
- Renk değişiklikleri: **300ms**
- Interactive (hover, click): **200ms**
- Utility class: `.card-transition`

### Font Değiştir

`src/app/layout.tsx`'ten sistem fontlarını değiştirebilirsin.

---

## 🌍 Türkçe/İngilizce

🇹🇷 **Arayüz %100 Türkçe**
- Header, Footer, butonlar, etiketler, tarihler

🇬🇧 **İngilizce**
- Blog yazısı metadata'ları, proje açıklamaları
- Bkz: `content/blog/` ve `src/data/projects.ts`

---

## ⚡ Performans

| Metrik | Değer |
|--------|-------|
| **Build Time** | ~1,640ms (Turbopack) |
| **Route'lar** | 18 (15 static, 3 dynamic) |
| **CSS System** | Tema-aware tokens |
| **Responsive** | Mobile-first design |
| **A11y** | ARIA, keyboard nav, focus states |

---

## 📚 Daha Fazla Bilgi

- [SETUP.md](./SETUP.md) — Detaylı kurulum kılavuzu
- [USAGE.md](./USAGE.md) — Kullanım ve özelleştirme rehberi
- [TODO.md](./TODO.md) — Gelecek özellikler

---

## 🎯 Yapılacaklar

- [ ] Analytics (Vercel Analytics)
- [ ] Full-text search (blog + proje araması)
- [ ] Comments (Giscus)
- [ ] i18n (English support)
- [ ] Table of Contents (blog posts)

---

## 🤝 Katkıda Bulun

Bug? Issue aç. Özellik fikri? PR gönder. Samimi ol! 😊

---

## 📄 Lisans

MIT — Ne yaparsan yap, krediye gerek yok!

## 💬 İletişim

GitHub: [@kursatdemirdelen](https://github.com/kursatdemirdelen)

---

Beğendiysen ⭐ ver 😊
