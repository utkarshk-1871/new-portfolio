import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-20">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            © {year} {profile.name}. Built with Next.js.
          </p>
        </div>
        <SocialLinks />
        <a
          href="#home"
          className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
