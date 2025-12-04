import type { Hobby } from "@/types";

interface HobbyCardProps {
  hobby: Hobby;
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  return (
    <div className="border border-[--color-border] rounded-[--radius-sm] p-6 hover:border-[--color-accent] transition-colors group bg-[--surface-1]">
      <div className="text-4xl mb-4">{hobby.icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[--color-accent] transition-colors tracking-(--heading-tracking)">
        {hobby.title}
      </h3>
      <p className="text-[--color-muted] text-sm">{hobby.description}</p>
    </div>
  );
}
