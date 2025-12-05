import { notFound } from "next/navigation";
import {
  PageLayout,
  Tag,
  DetailPageHeader,
  DetailPageFooter,
  ReadingProgress,
  ShareButtons,
} from "@/components";
import { blogPosts } from "@/data";
import { formatDate, getRelativeTime } from "@/utils/dateFormat";
import { getReadingTime } from "@/utils/readingTime";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const readTime = post.readTime ?? getReadingTime(post.description);

  return (
    <PageLayout>
      <ReadingProgress />
      <article className="py-16 max-w-3xl mx-auto">
        <DetailPageHeader
          backHref="/blog"
          backLabel="Back to Blog"
          title={post.title}
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-[--color-muted] mb-6">
            <time title={post.date}>{getRelativeTime(post.date)}</time>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div className="mt-6">
            <ShareButtons slug={post.slug} title={post.title} />
          </div>
        </DetailPageHeader>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-[--color-muted] leading-relaxed mb-6">
            {post.description}
          </p>

          <div className="border-t border-[--color-border] pt-8 mt-8">
            <p className="text-[--color-muted] italic">
              This is a placeholder blog post. In the future, you can add full
              MDX content here with rich formatting, code blocks, images, and
              more.
            </p>
          </div>
        </div>

        <DetailPageFooter backHref="/blog" backLabel="View all posts" />
      </article>
    </PageLayout>
  );
}
