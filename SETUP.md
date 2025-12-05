# Hızlı Kurulum

5 dakikada başla, sitin hazır olsun.

---

## 📦 Step 1: Projeyi Al

```bash
git clone https://github.com/kursatdemirdelen/personal-site.git my-site
cd my-site
npm install
```

---

## ✏️ Step 2: Kişiselleştir

### Site Bilgileri (`src/data/site.ts`)

```typescript
export const siteConfig = {
  name: "Adın Soyadın",           // 👈 Değiştir
  title: "Frontend Developer",     // 👈 Değiştir
  tagline: "Kısa açıklama",        // 👈 Değiştir
  description: "Detaylı açıklama", // 👈 Değiştir
  url: "https://example.vercel.app", // 👈 Deploy sonrası güncelle
  socialLinks: {
    github: "https://github.com/username",   // 👈 Değiştir
    linkedin: "https://linkedin.com/in/you", // 👈 Değiştir
    email: "your@email.com",                 // 👈 Değiştir
  },
  skills: ["React", "Next.js", "TypeScript"], // 👈 Ekle
};
```

### Projelerini Ekle (`src/data/projects.ts`)

```typescript
export const projects: Project[] = [
  {
    title: "Proje Adı",
    slug: "proje-adi",              // URL: /projects/proje-adi
    description: "Kısa açıklama",
    tags: ["React", "TypeScript"],
    url: "https://github.com/...",  // İsteğe bağlı (GitHub linki)
  },
  // Daha fazla proje ekle...
];
```

### Hobilerin (`src/data/hobbies.ts`)

```typescript
export const hobbies: Hobby[] = [
  {
    icon: "🎸",                    // Emoji kullan
    title: "Müzik",
    description: "Müzik severim",
  },
  // Daha fazla hobi ekle...
];
```

---

## 📝 Step 3: Blog Yazısı Ekle

`content/blog/` klasöründe yeni `.mdx` dosyası:

```bash
content/blog/ilk-yazim.mdx
```

İçerik:

```mdx
---
title: "Blog Başlığı"
description: "Kısa özet"
date: "December 6, 2025"
readTime: "5 dk okuma"
tags: ["JavaScript", "Next.js"]
---

## Başlık

Yazını buraya yaz.

\```javascript
console.log("Kod yazabilirsin");
\```

- Madde 1
- Madde 2
```

💡 **İpucu**: Dosya adından otomatik slug oluşur (`ilk-yazim` → `/blog/ilk-yazim`)

---

## 🎨 Step 4: Tema Özelleştir

### Renkler (`src/app/globals.css`)

```css
:root {
  --accent: #ff3333;        /* Ana renk */
  --background: #0a0a0a;    /* Arkaplan */
  --foreground: #ededed;    /* Metin */
  --border: #333333;        /* Kenarlar */
}

.light {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --border: #e0e0e0;
}
```

### Font Değiştir (`src/app/layout.tsx`)

Sistem fontları kullanılıyor. Değiştirmek istersen CSS'de font-family güncelleyin.

---

## 🚀 Step 5: Deploy Et

### Vercel'e Deploy

1. [vercel.com](https://vercel.com) git
2. "Import Project" tıkla
3. GitHub repo seç
4. "Deploy" tıkla

✅ Otomatik ayarlar yapılır, push ettikçe otomatik deploy olur.

### Sonrası

`src/data/site.ts`'de `url` güncelleyin:

```typescript
url: "https://your-site.vercel.app", // Vercel domain'i
```

Commit + push:

```bash
git add .
git commit -m "chore: personalize site"
git push
```

---

## ✨ Bitti!

Sitin hazır. Artık:

- 📝 Blog yazısı ekle → `content/blog/`
- 💼 Proje ekle → `src/data/projects.ts`
- 🎨 Tema özelleştir → `src/app/globals.css`
- 🚀 Deploy et → Vercel

Daha fazla detay: [USAGE.md](./USAGE.md)
