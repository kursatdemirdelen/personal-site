import Link from "next/link";
import { siteConfig } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] py-8 bg-[--surface-1]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[--color-muted] text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${siteConfig.socialLinks.email}`}
              className="text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
