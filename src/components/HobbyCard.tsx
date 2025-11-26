export interface Hobby {
  icon: string;
  title: string;
  description: string;
}

interface HobbyCardProps {
  hobby: Hobby;
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  return (
    <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
      <div className="text-4xl mb-4">{hobby.icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
        {hobby.title}
      </h3>
      <p className="text-[#888] text-sm">
        {hobby.description}
      </p>
    </div>
  );
}
