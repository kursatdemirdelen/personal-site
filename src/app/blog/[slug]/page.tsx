import { notFound } from "next/navigation";
import { PageLayout, BlogPostCard, Section } from "@/components";
import { blogPosts } from "@/data";

interface Params {
  params: { slug: string };
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <PageLayout>
      <Section
        className="py-16"
        title={post.title}
        description={post.description}
      >
        <BlogPostCard post={post} />
      </Section>
    </PageLayout>
  );
}
