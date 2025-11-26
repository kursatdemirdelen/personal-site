import { PageLayout, HobbyCard } from "@/components";
import { hobbies } from "@/data";

export default function Hobbies() {
  return (
    <PageLayout>
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Hobbies
        </h1>
        <p className="text-lg text-[#888] mb-12 max-w-2xl">
          When I&apos;m not coding, you can find me pursuing these passions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} hobby={hobby} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
