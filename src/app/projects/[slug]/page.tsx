import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PageLayout, DetailPageHeader, DetailPageFooter } from "@/components";
import { projects } from "@/data";
import { siteConfig } from "@/data";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proje bulunamadı",
    };
  }

  const url = `${siteConfig.url}/projects/${slug}`;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <PageLayout>
      <article className="py-16 max-w-3xl mx-auto">
        <DetailPageHeader
          backHref="/projects"
          backLabel="Projelere Dön"
          title={project.title}
        >
          <p className="text-lg text-[--color-muted] leading-relaxed mb-6">
            {project.description}
          </p>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[--color-accent] hover:text-[--color-accent-hover] transition-colors text-sm font-medium"
            >
              GitHub&apos;da Görüntüle
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          )}
        </DetailPageHeader>

        {/* Content */}
        <div className="space-y-12 mt-12">
          {/* Detaylı Açıklama */}
          {project.longDescription && (
            <section>
              <h2 className="text-2xl font-bold mb-4 tracking-[--heading-tracking]">
                Proje Hakkında
              </h2>
              <p className="text-[--color-foreground] leading-[1.8] text-base">
                {project.longDescription}
              </p>
            </section>
          )}

          {/* Özellikler */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 tracking-[--heading-tracking]">
                Özellikler
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[--color-foreground]"
                  >
                    <span className="text-[--color-accent] font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Teknolojiler */}
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-[--heading-tracking]">
              Teknolojiler
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[--surface-2] text-[--color-foreground] rounded-[--radius-sm] border border-[--color-border] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        <DetailPageFooter backHref="/projects" backLabel="Tüm projeleri gör" />
      </article>
    </PageLayout>
  );
}
