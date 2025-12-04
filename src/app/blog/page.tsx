"use client";

import { useState } from "react";
import { PageLayout, BlogPostCard, Section } from "@/components";
import { blogPosts } from "@/data";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <PageLayout>
      <Section
        className="py-16"
        title="Blog"
        description="Thoughts, tutorials, and stories from the road."
      >
        {/* Tag Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-[--radius-sm] text-sm transition-colors ${
              selectedTag === null
                ? "bg-[--color-accent] text-[--color-background] font-semibold"
                : "bg-[--surface-2] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent]"
            }`}
          >
            All Posts ({blogPosts.length})
          </button>
          {allTags.map((tag) => {
            const count = blogPosts.filter((post) =>
              post.tags.includes(tag)
            ).length;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-[--radius-sm] text-sm transition-colors ${
                  selectedTag === tag
                    ? "bg-[--color-accent] text-[--color-background] font-semibold"
                    : "bg-[--surface-2] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent]"
                }`}
              >
                {tag} ({count})
              </button>
            );
          })}
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-[--color-muted] text-center py-12">
              No posts found with tag &quot;{selectedTag}&quot;
            </p>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}
