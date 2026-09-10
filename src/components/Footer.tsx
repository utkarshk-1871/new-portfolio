import { profile } from "@/data/profile";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Footer() {
  const year = new Date().getFullYear();
  const initials = getInitials(profile.name);

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">
            {initials}
          </span>
          <p className="text-sm text-[var(--color-text-secondary)]">
            © {year} {profile.name}. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
