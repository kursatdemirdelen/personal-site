import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Kürşat Demirdelen",
  description: "Kişisel site - About, Projects, Hobbies, Blog",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Blog RSS Feed" }],
    },
  },
  openGraph: {
    title: "Kürşat Demirdelen",
    description: "Frontend Developer — Projects, Hobbies, Blog",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary",
    title: "Kürşat Demirdelen",
    description: "Frontend Developer — Projects, Hobbies, Blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
