import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kürşat Demirdelen",
  description: "Kişisel site - About, Projects, Hobbies, Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
