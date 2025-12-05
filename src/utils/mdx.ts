import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const contentDirectory = path.join(process.cwd(), "content/blog");

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = mdxFiles.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      slug,
    } as BlogPost;
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: {
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      slug,
    } as BlogPost,
    content,
  };
}
