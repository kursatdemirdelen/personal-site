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
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
        {project.title}
      </h3>
      <p className="text-[#888] text-sm mb-4">
        {project.description}
      </p>
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
        className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group block"
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
      {CardContent}
    </div>
  );
}
