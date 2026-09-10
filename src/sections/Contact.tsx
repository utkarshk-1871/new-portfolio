import { Mail, MapPin, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

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
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind or just want to connect? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-4">
            <p className="text-base text-[var(--color-text-secondary)]">
              Whether you have a question, a project proposal, or just want to
              say hi, I&apos;ll get back to you as soon as I can.
            </p>
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="glass-panel flex items-start gap-4 rounded-2xl p-5 backdrop-blur-xl transition-colors hover:border-[var(--color-primary)]/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--glass-bg)] text-[var(--color-primary)]">
                    <Icon size={20} aria-hidden="true" />
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
                  >
                    {content}
                  </a>
                );
              }

              return <div key={card.label}>{content}</div>;
            })}
          </div>

          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
