# Kullanım Kılavuzu

Bu dokümanda projenin nasıl kullanılacağı, içerik ekleme ve özelleştirme adımları detaylı olarak açıklanmaktadır.

## 📝 İçerik Ekleme

### Blog Yazısı Ekleme (MDX)

1. `content/blog/` klasöründe yeni bir `.mdx` dosyası oluşturun:

```bash
content/blog/yeni-yaziim.mdx
```

2. Frontmatter ve içerik ekleyin:

```mdx
---
title: "Yeni Blog Yazım"
description: "Bu yazıda Next.js hakkında konuşacağız"
date: "December 6, 2025"
readTime: "7 dk okuma"
tags: ["Next.js", "React", "Web Development"]
---

## Başlık

İçerik buraya gelir...

### Alt Başlık

\```tsx
// Kod örneği
export default function Example() {
  return <div>Merhaba!</div>;
}
\```

- Liste öğesi 1
- Liste öğesi 2

**Kalın metin** ve *italik metin*
```

3. Otomatik olarak `/blog/yeni-yaziim` URL'inde yayınlanır

**İpuçları:**
- `slug` frontmatter'da belirtmeyin, dosya adından otomatik oluşur
- Dosya adında Türkçe karakter kullanmayın (URL-friendly)
- `date` formatı: "Month Day, Year" (örn: "December 6, 2025")
- `readTime` isteğe bağlı, belirtmezseniz otomatik hesaplanır

### MDX'te Kullanılabilir Özellikler

#### Başlıklar
```md
# H1 Başlık
## H2 Başlık
### H3 Başlık
```

#### Vurgular
```md
**Kalın metin**
*İtalik metin*
`inline kod`
```

#### Linkler
```md
[Link metni](https://example.com)
```

#### Listeler
```md
- Sırasız liste
- İkinci öğe

1. Sıralı liste
2. İkinci öğe
```

#### Kod Blokları
````md
```typescript
const greeting: string = "Merhaba";
console.log(greeting);
```
````

**Desteklenen Diller:**
- `typescript` / `tsx`
- `javascript` / `jsx`
- `python`
- `bash` / `sh`
- `json`
- `css` / `scss`
- Ve daha fazlası (shiki destekli tüm diller)

#### Tablolar
```md
| Başlık 1 | Başlık 2 |
|----------|----------|
| Hücre 1  | Hücre 2  |
```

#### Blockquote
```md
> Bu bir alıntı metnidir.
> İkinci satır.
```

#### Yatay Çizgi
```md
---
```

### Proje Ekleme

`src/data/projects.ts` dosyasını düzenleyin:

```typescript
{
  title: "Yeni Projem",
  description: "Proje açıklaması burada",
  url: "https://github.com/username/repo", // isteğe bağlı
  tags: ["React", "TypeScript", "Tailwind"],
  slug: "yeni-projem", // URL: /projects/yeni-projem
}
```

**Önemli:**
- `slug` benzersiz olmalı ve URL-friendly
- `url` yoksa GitHub linki gösterilmez
- `tags` filtreleme için kullanılır

### Hobi Ekleme

`src/data/hobbies.ts` dosyasını düzenleyin:

```typescript
{
  title: "Fotoğrafçılık",
  description: "Manzara ve sokak fotoğrafçılığı",
  icon: "📷",
}
```

## 🎨 Tema Özelleştirme

### Renkleri Değiştirme

`src/app/globals.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  /* Arkaplan tonları */
  --background: #0a0a0a;
  --surface-1: #0f0f0f;
  --surface-2: #1a1a1a;
  
  /* Metin renkleri */
  --foreground: #ededed;
  --muted: #888888;
  
  /* Vurgu renkleri */
  --accent: #ff3333;        /* Ana vurgu rengi */
  --accent-hover: #ff5555;  /* Hover durumu */
  
  /* Kenarlıklar */
  --border: #333333;
}
```

### Light Theme Ekleme

`next-themes` zaten kurulu. Light theme eklemek için:

1. `src/app/globals.css` içinde light theme CSS'ini düzenleyin:

```css
.light {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #ff3333;
  --accent-hover: #ff5555;
  --muted: #666666;
  --border: #e0e0e0;
  --surface-1: #f5f5f5;
  --surface-2: #eeeeee;
}
```

2. `ThemeToggle` component'ini header'a ekleyin (zaten mevcut).

### Tipografi Ayarları

Font boyutları ve spacing'i değiştirmek için:

```css
:root {
  /* Spacing (4px artışlı) */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-8: 32px;
  
  /* Border radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  
  /* Typography */
  --heading-tracking: -0.02em; /* Letter spacing */
}
```

## 🔧 Yapılandırma

### Site Bilgileri

`src/data/site.ts` dosyasını düzenleyin:

```typescript
export const siteConfig = {
  name: "Adınız Soyadınız",
  title: "Frontend Developer & UI/UX Designer",
  tagline: "Web teknolojileri, tasarım ve yolculuk hakkında yazıyorum.",
  description: "Detaylı açıklama metniniz...",
  url: "https://yourdomain.com",
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
    email: "email@example.com",
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    // ... daha fazla
  ],
};
```

### Metadata (SEO)

Her sayfa için metadata `generateMetadata` fonksiyonu ile tanımlanır:

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sayfa Başlığı",
    description: "Sayfa açıklaması",
    openGraph: {
      title: "OG Başlık",
      description: "OG Açıklama",
      images: ["/og-image.png"],
    },
  };
}
```

### RSS Feed

RSS feed otomatik oluşur: `/feed.xml`

Özelleştirmek için `src/app/feed.xml/route.ts` dosyasını düzenleyin.

### Sitemap

Sitemap otomatik oluşur: `/sitemap.xml`

Yeni sayfalar eklemek için `src/app/sitemap.ts`:

```typescript
const routes: MetadataRoute.Sitemap = [
  { url: `${base}/`, priority: 1 },
  { url: `${base}/yeni-sayfa`, priority: 0.8 },
];
```

## 🚀 Deployment

### Vercel'e Deploy

1. GitHub'a push yapın:
```bash
git add .
git commit -m "Update content"
git push
```

2. Vercel otomatik deploy eder

3. Deploy sonrası `src/data/site.ts` içinde `url` alanını güncelleyin:
```typescript
url: "https://your-site.vercel.app",
```

### Manuel Build

```bash
npm run build
npm start
```

## 🐛 Sorun Giderme

### Build Hatası: "Cannot find module"

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### MDX İçeriği Gösterilmiyor

1. MDX dosyasının `content/blog/` klasöründe olduğundan emin olun
2. Frontmatter formatının doğru olduğunu kontrol edin
3. Dev server'ı yeniden başlatın: `npm run dev`

### Türkçe Karakter Sorunları

- Dosya adlarında Türkçe karakter kullanmayın
- İçerikte sorunsuz kullanabilirsiniz
- Encoding UTF-8 olmalı

### Syntax Highlighting Çalışmıyor

Kod bloğunda dil belirttiğinizden emin olun:

````md
```typescript
// kod
```
````

## 📊 Performans İpuçları

### Görsel Optimizasyonu

Next.js `Image` component'i kullanın:

```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Açıklama"
  width={800}
  height={600}
/>
```

### Lazy Loading

Büyük component'leri lazy load edin:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"));
```

### Caching

Static generation varsayılan olarak aktif. Dynamic veri için:

```tsx
export const revalidate = 3600; // 1 saat
```

## 🎯 Best Practices

### Commit Mesajları

```bash
git commit -m "feat: yeni blog yazısı eklendi"
git commit -m "fix: sitemap projeler sayfası eklendi"
git commit -m "style: renk paleti güncellendi"
git commit -m "docs: README güncellendi"
```

### Kod Organizasyonu

- Component'ler: `src/components/`
- Utility fonksiyonlar: `src/utils/`
- Tip tanımları: `src/types/`
- İçerik: `content/` (MDX) veya `src/data/` (TypeScript)

### TypeScript

- Tüm component'lerde tip tanımları kullanın
- `any` kullanmaktan kaçının
- Interface'leri `src/types/index.ts` içinde tanımlayın

## 📞 Yardım

Sorun yaşarsanız:

1. `npm run build` ile build hatalarını kontrol edin
2. `npx eslint . --ext .ts,.tsx` ile lint hatalarını kontrol edin
3. Terminal'de hata mesajlarını okuyun
4. [Next.js Documentation](https://nextjs.org/docs)
5. [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Mutlu kodlamalar! 🚀**
