import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kürşat Demirdelen",
  description: "Kişisel site - About, Projects, Hobbies, Blog",
  icons: {
    icon: "/favicon.ico",
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
    <html lang="tr" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
