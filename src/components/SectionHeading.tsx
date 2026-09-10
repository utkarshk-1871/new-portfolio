interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl">
        <span className="bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="mt-3 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
        {subtitle}
      </p>
      <div
        className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]"
        aria-hidden="true"
      />
    </div>
  );
}
