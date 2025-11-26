interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">
      {label}
    </span>
  );
}
