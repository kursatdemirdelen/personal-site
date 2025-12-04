import { PageLayout, HobbyCard, Section } from "@/components";
import { hobbies } from "@/data";

export default function Hobbies() {
  return (
    <PageLayout>
      <Section
        className="py-16"
        title="Hobbies"
        description="When I'm not coding, you can find me pursuing these passions."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} hobby={hobby} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
