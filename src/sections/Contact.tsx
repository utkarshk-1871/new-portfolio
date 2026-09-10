import { AnimatedSection } from "@/components/AnimatedSection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";
import { resumeUrl } from "@/data/social";
import { Code, Link as LinkIcon, Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    icon: MapPin,
  },
  {
    label: "GitHub",
    value: "github.com/utkarshk-1871",
    href: "https://github.com/utkarshk-1871",
    icon: Code,
  },
  {
    label: "LinkedIn",
    value: "utkarsh-karnik",
    href: "https://www.linkedin.com/in/utkarsh-karnik-1b2661176/",
    icon: LinkIcon,
  },
];

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="scroll-mt-[72px] border-t border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-20">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect — I'm open to new opportunities."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const content = (
              <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-colors hover:border-[var(--color-primary)]">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-light)] text-[var(--color-primary)]"
                  aria-hidden="true"
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                    {card.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-text-primary)]">
                    {card.value}
                  </p>
                </div>
              </div>
            );

            if (card.href) {
              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {content}
                </a>
              );
            }

            return <div key={card.label}>{content}</div>;
          })}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href={`mailto:${profile.email}`}>
            Email Me
          </MagneticButton>
          <MagneticButton href={resumeUrl} external>
            View Resume
          </MagneticButton>
        </div>
        <SocialLinks className="mt-10" />
      </div>
    </AnimatedSection>
  );
}
