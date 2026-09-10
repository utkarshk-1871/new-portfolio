import { Code, Link as LinkIcon, Mail, FileText, Phone } from "lucide-react";

import { profile } from "@/data/profile";
import { resumeUrl, socialLinks } from "@/data/social";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Code size={18} />,
  LinkedIn: <LinkIcon size={18} />,
  Email: <Mail size={18} />,
  Phone: <Phone size={18} />,
  Resume: <FileText size={18} />,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = socialLinks.filter(
    (link) => link.label !== "Email" && link.label !== "Phone",
  );

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={`Open ${link.label}`}
        >
          {iconMap[link.label]}
          <span>{link.label}</span>
        </a>
      ))}
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        aria-label="Send email"
      >
        <Mail size={18} />
        <span>Email</span>
      </a>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        aria-label="Open resume"
      >
        <FileText size={18} />
        <span>Resume</span>
      </a>
    </div>
  );
}
