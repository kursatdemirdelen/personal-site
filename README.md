# Personal Site

Kürşat Demirdelen — Kişisel site scaffold (Next.js + Tailwind + TypeScript)

## Özellikler

- **Tek sayfa ana tanıtım**: About + Projects bölümleri
- **Ayrı sayfalar**: Hobiler (`/hobbies`), Blog (`/blog`)
- **Minimal, koyu tema**: Racing / cultofdrive havasına uygun tasarım
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

## Yapı

```
src/app/
├── page.tsx          # Ana sayfa (About + Projects)
├── layout.tsx        # Root layout
├── globals.css       # Global stiller
├── hobbies/
│   └── page.tsx      # Hobiler sayfası
└── blog/
    └── page.tsx      # Blog sayfası
```

## Özelleştirme

1. `src/app/page.tsx` - Kişisel bilgilerinizi ve projelerinizi güncelleyin
2. `src/app/hobbies/page.tsx` - Hobilerinizi ekleyin
3. `src/app/blog/page.tsx` - Blog yazılarınızı ekleyin
4. `src/app/globals.css` - Renk şemasını değiştirin
