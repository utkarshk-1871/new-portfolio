import Link from "next/link";

import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-[var(--color-border)]/60 bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-10 lg:px-20"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="font-display flex items-center gap-2 text-lg font-bold text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-sm font-bold text-white"
            aria-hidden="true"
          >
            UK
          </span>
          <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
