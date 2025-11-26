import { PageLayout, ProjectCard } from "@/components";
import { projects, siteConfig } from "@/data";

export default function Home() {
  return (
    <PageLayout>
      {/* About Section */}
      <section className="py-16 border-b border-[#333]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-[#888] mb-4 max-w-2xl">
          {siteConfig.title}. {siteConfig.tagline}
        </p>
        <p className="text-[#888] max-w-2xl leading-relaxed">
          {siteConfig.description}
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
