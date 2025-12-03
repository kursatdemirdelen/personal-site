import { PageLayout, BlogPostCard, Section } from "@/components";
import { blogPosts } from "@/data";

export default function Blog() {
  return (
    <PageLayout>
      <Section
        className="py-16"
        title="Blog"
        description="Thoughts, tutorials, and stories from the road."
      >
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
