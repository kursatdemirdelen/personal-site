"use client";

import { useState, useEffect } from "react";
import {
  PageLayout,
  BlogPostCard,
  BlogPostCardSkeleton,
  Section,
} from "@/components";
import type { BlogPost } from "@/types";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts from API route
    setIsLoading(true);
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog posts:", err);
        setIsLoading(false);
      });
  }, []);

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
        description="Düşünceler, yazılım notları ve yolculuktan hikayeler."
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
            Tüm Yazılar ({blogPosts.length})
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
          {isLoading ? (
            // Loading skeletons
            <>
              <BlogPostCardSkeleton />
              <BlogPostCardSkeleton />
              <BlogPostCardSkeleton />
            </>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-[--color-muted] text-center py-12">
              &quot;{selectedTag}&quot; etiketine sahip yazı bulunamadı
            </p>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}
