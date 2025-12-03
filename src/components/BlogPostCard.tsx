import Tag from "./Tag";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="border border-[--color-border] rounded-[--radius-sm] p-6 hover:border-[--color-accent] transition-colors group bg-[--surface-1]">
      <div className="flex items-center gap-3 text-sm text-[--color-muted] mb-3">
        <time>{post.date}</time>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="text-2xl font-semibold mb-2 group-hover:text-[--color-accent] transition-colors tracking-[var(--heading-tracking)]">
        {post.title}
      </h2>
      <p className="text-[--color-muted] mb-4">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
