import Tag from "./Tag";

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
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
    </div>
  );
}
