interface CodeSnippetProps {
  variable: string;
  value: string;
  className?: string;
}

export function CodeSnippet({
  variable,
  value,
  className = "",
}: CodeSnippetProps) {
  return (
    <div
      className={`glass-panel absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-xl px-4 py-2 font-mono text-[11px] shadow-lg ${className}`}
    >
      <span className="text-violet-400">const</span>{" "}
      <span className="text-blue-400">{variable}</span>{" "}
      <span className="text-[var(--color-text-primary)]/60">= </span>
      <span className="text-emerald-400">&apos;{value}&apos;</span>
    </div>
  );
}
