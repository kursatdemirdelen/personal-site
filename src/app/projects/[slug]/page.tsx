import { notFound } from "next/navigation";
import { PageLayout, ProjectCard, Section } from "@/components";
import { projects } from "@/data";

interface Params {
  params: { slug: string };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <PageLayout>
      <Section
        className="py-16"
        title={project.title}
        description={project.description}
      >
        <ProjectCard project={project} />
      </Section>
    </PageLayout>
  );
}
