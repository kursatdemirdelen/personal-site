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
    <article className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
      <div className="flex items-center gap-3 text-sm text-[#888] mb-3">
        <time>{post.date}</time>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="text-2xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
        {post.title}
      </h2>
      <p className="text-[#888] mb-4">
        {post.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
