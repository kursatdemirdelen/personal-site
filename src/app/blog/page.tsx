import { PageLayout, BlogPostCard } from "@/components";
import { blogPosts } from "@/data";

export default function Blog() {
  return (
    <PageLayout>
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Blog
        </h1>
        <p className="text-lg text-[#888] mb-12 max-w-2xl">
          Thoughts, tutorials, and stories from the road.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
