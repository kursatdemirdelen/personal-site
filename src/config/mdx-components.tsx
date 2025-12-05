import { ComponentProps } from "react";

// MDX component definitions for blog post rendering
export const mdxComponents: Record<string, React.ComponentType<any>> = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="text-4xl font-bold mb-6 mt-8 tracking-[--heading-tracking]"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="text-3xl font-bold mb-4 mt-12 tracking-[--heading-tracking] text-[--color-foreground]"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="text-2xl font-semibold mb-3 mt-8 tracking-[--heading-tracking] text-[--color-foreground]"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="text-[--color-foreground] leading-[1.8] mb-6 text-base"
      {...props}
    />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-[--color-accent] hover:text-[--color-accent-hover] underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="list-disc list-inside mb-6 space-y-2 text-[--color-foreground]"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="list-decimal list-inside mb-6 space-y-2 text-[--color-foreground]"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="text-[--color-foreground] ml-4 leading-[1.8]" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-[--color-accent] pl-4 py-2 my-4 italic text-[--color-muted]"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => {
    // Inline code
    if (!props.className) {
      return (
        <code
          className="bg-[--surface-2] text-[--color-accent] px-2 py-1 rounded text-sm font-mono"
          {...props}
        />
      );
    }
    // Code block (handled by pre)
    return (
      <code
        className={`font-mono text-sm leading-relaxed ${props.className}`}
        style={{ display: "block", whiteSpace: "pre", color: "#e6edf3" }}
        {...props}
      />
    );
  },
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="bg-[#0d1117] border border-[--color-border] rounded-[--radius-sm] p-6 overflow-x-auto mb-6 text-sm leading-relaxed"
      style={{ backgroundColor: "#0d1117", color: "#e6edf3" }}
      {...props}
    />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="overflow-x-auto mb-4">
      <table
        className="min-w-full border border-[--color-border] rounded-[--radius-sm]"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead className="bg-[--surface-1]" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="border border-[--color-border] px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="border border-[--color-border] px-4 py-2" {...props} />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="border-[--color-border] my-8" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-[--color-foreground]" {...props} />
  ),
  em: (props: ComponentProps<"em">) => (
    <em className="italic text-[--color-muted]" {...props} />
  ),
};
