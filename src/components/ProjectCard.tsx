import Tag from "./Tag";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = (
    <>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[--color-accent] transition-colors tracking-[var(--heading-tracking)]">
        {project.title}
      </h3>
      <p className="text-[--color-muted] text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </>
  );

  if (project.url) {
    return (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[--color-border] rounded-[--radius-sm] p-6 hover:border-[--color-accent] transition-colors group block bg-[--surface-1]"
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="border border-[--color-border] rounded-[--radius-sm] p-6 hover:border-[--color-accent] transition-colors group bg-[--surface-1]">
      {CardContent}
    </div>
  );
}
