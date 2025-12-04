import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PageLayout,
  Tag,
  DetailPageHeader,
  DetailPageFooter,
} from "@/components";
import { projects } from "@/data";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <PageLayout>
      <article className="py-16 max-w-3xl mx-auto">
        <DetailPageHeader
          backHref="/"
          backLabel="Back to Home"
          title={project.title}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[--color-accent] hover:text-[--color-accent-hover] transition-colors text-sm font-medium"
            >
              View on GitHub
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
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-[--color-muted] leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="border-t border-[--color-border] pt-8 mt-8">
            <p className="text-[--color-muted] italic">
              This is a placeholder project page. You can expand this with
              screenshots, feature lists, technical details, and more.
            </p>
          </div>
        </div>

        <DetailPageFooter backHref="/" backLabel="View all projects" />
      </article>
    </PageLayout>
  );
}
