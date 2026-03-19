"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Instagram,
  Sparkles,
  Star,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  differentiators,
  offers,
  serviceTracks,
  team,
  testimonials,
} from "@/lib/data";

import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { ServicesShowcase } from "./services-showcase";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const syncTheme = () => {
      const currentTheme = document.documentElement.dataset.theme;
      setTheme(currentTheme === "dark" ? "dark" : "light");
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[var(--color-obsidian)] text-[var(--color-ivory)]">
      <Navbar />
      <Hero />

      <section
        id="about"
        className="section-shell relative overflow-visible pt-12 pb-0 sm:pt-14 sm:pb-0 lg:pt-16 lg:pb-0"
        style={{ background: "var(--about-section-background)" }}
      >
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="relative z-10 mx-auto -mt-20 w-full max-w-[400px] sm:-mt-24 lg:-mt-30">
              <div
                className="relative min-h-[420px] overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.68) 92%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.68) 92%, rgba(0,0,0,0) 100%)",
                }}
              >
                <Image
                  src={
                    theme === "dark"
                      ? `${publicBasePath}/about-dark.png`
                      : `${publicBasePath}/about-main.png`
                  }
                  alt="Salon treatment moment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="max-w-[26rem] self-end pb-10 lg:justify-self-end lg:pb-16">
              <p className="max-w-[20ch] font-heading text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02] tracking-[-0.03em] text-[var(--color-ivory)]/88">
                Quiet luxury. Clean technique.
              </p>
              <p className="mt-4 max-w-[26ch] text-sm leading-7 text-[var(--color-ivory)]/68 sm:text-base">
                Tailored beauty rituals designed for polished results and a calm premium experience.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="services" className="section-shell bg-[var(--color-charcoal)] pb-4 sm:pb-6 lg:pb-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured services"
            title="Luxury treatments with a polished finish"
            description="Each service is shaped with sharp technique, premium formulations, and a finish that feels modern, flattering, and enduring."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <ServicesShowcase primary={serviceTracks.primary} secondary={serviceTracks.secondary} />
        </Reveal>
      </section>

      <section className="section-shell pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 lg:pb-16">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Premium care, calibrated in every detail"
            description="The salon experience is built around elevated outcomes and a level of care that premium UAE clients expect."
          />
        </Reveal>
        <div
          style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
          className="mt-8 px-2"
        >
          <div className="grid gap-2 md:grid-cols-2">
            {differentiators.map((item, index) => {
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="group relative min-h-[320px] overflow-hidden border border-[var(--color-border)] sm:min-h-[360px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                      <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
                        Signature standard
                      </p>
                      <h3 className="mt-2 max-w-[14ch] font-heading text-3xl text-[#101214] sm:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[32ch] text-sm leading-7 text-[rgba(16,18,20,0.72)]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="section-shell bg-[var(--color-charcoal)] pt-10 sm:pt-12 lg:pt-16">
        <Reveal>
          <div className="mx-auto max-w-[48rem] text-center">
            <span className="section-eyebrow justify-center">Our stylists</span>
            <h2 className="mt-5 font-heading text-[clamp(2.7rem,4.8vw,4.8rem)] leading-[0.96] tracking-[-0.04em]">
              Meet our expert team
            </h2>
            <p className="mx-auto mt-4 max-w-[34rem] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              A focused team of artists known for polished cuts, modern color, bridal beauty, and
              quietly premium service.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="group bg-transparent text-center">
                <div className="relative overflow-hidden border border-[rgba(16,18,20,0.06)] bg-[#fbfaf7]">
                  <div className="relative h-[320px] sm:h-[360px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-bottom p-2 transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="px-3 pb-2 pt-4">
                  <p className="text-[11px] tracking-[0.26em] text-[var(--color-champagne)] uppercase">
                    {member.role}
                  </p>
                  <h3 className="mt-2 font-heading text-[1.55rem] leading-none text-[var(--color-ivory)]">
                    {member.name}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[24ch] text-sm leading-6 text-[var(--color-muted)]">
                    {member.specialty}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="offers" className="section-shell bg-[var(--color-charcoal)]">
        <Reveal>
          <SectionHeading
            eyebrow="Offers and packages"
            title="Curated packages with elevated value"
            description="Designed for weddings, seasonal refreshes, and clients who prefer premium maintenance with better value."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 xl:grid-cols-[1.18fr_0.82fr_0.82fr]">
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden border border-[var(--color-border)] ${
                  index === 0 ? "min-h-[33rem]" : "min-h-[29rem]"
                }`}
              >
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.08)_0%,rgba(9,9,9,0.2)_30%,rgba(9,9,9,0.86)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,186,140,0.18),transparent_32%)]" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center border border-white/15 bg-black/20 px-3 py-2 text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase backdrop-blur-md">
                      {offer.tag}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-[var(--color-on-image-muted)] uppercase">
                      <Sparkles size={13} className="text-[var(--color-champagne)]" />
                      Signature package
                    </span>
                  </div>

                  <div>
                    <p className="text-sm text-[var(--color-on-image-muted)]">{offer.meta}</p>
                    <h3 className={`mt-3 max-w-[11ch] font-heading leading-[0.94] text-[var(--color-on-image)] ${index === 0 ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"}`}>
                      {offer.title}
                    </h3>
                    <p className="mt-4 max-w-[30ch] text-sm leading-7 text-[var(--color-on-image-muted)] sm:text-base">
                      {offer.copy}
                    </p>
                  </div>

                  <div className="border-t border-white/12 pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-[var(--color-on-image)]/88">{offer.detail}</span>
                      <Link
                        href="/appointment"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-champagne)] transition group-hover:translate-x-[2px]"
                      >
                        Book package <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by clients who expect excellence"
            />
          </Reveal>
          <div className="grid gap-4">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <article className="frame-panel card-shell bg-[var(--color-panel)]">
                  <div className="card-body min-h-[15rem]">
                    <div className="card-copy">
                      <div className="flex gap-1 text-[var(--color-champagne)]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <p className="max-w-[38ch] text-base leading-8 text-[var(--color-ivory)]/86">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                    <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
                      {item.name}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section-shell bg-[var(--color-charcoal)]">
        <Reveal>
          <div className="relative overflow-hidden border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-panel)_90%,transparent)_0%,color-mix(in_srgb,var(--color-charcoal)_100%,transparent)_100%)] p-7 sm:p-9 lg:p-12">
            <div className="absolute right-0 top-0 h-48 w-48 bg-[radial-gradient(circle,rgba(178,141,88,0.16)_0%,transparent_70%)]" />
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <span className="section-eyebrow">Appointment page</span>
                <h2 className="mt-5 max-w-[9ch] font-heading text-[clamp(2.6rem,4.4vw,4.8rem)] leading-[0.96] tracking-[-0.04em]">
                  Book your visit on a dedicated page.
                </h2>
              </div>
              <div className="lg:justify-self-end">
                <p className="max-w-[34rem] text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  Continue to a focused appointment page with a cleaner request flow, faster
                  booking options, and direct WhatsApp contact.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/appointment" className="button-primary">
                    Open Appointment Page <ArrowRight size={16} />
                  </Link>
                  <Link href="https://wa.me/97145550188" className="button-secondary">
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer id="contact" className="border-t border-[var(--color-border)] bg-[var(--color-footer)]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-12">
          <div>
            <p className="font-heading text-4xl">Maison de Sable</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">
              A premium UAE salon brand dedicated to elevated beauty rituals, expert craftsmanship,
              and refined hospitality.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-[var(--color-muted)]">
            <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
              Quick links
            </p>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#team">Team</Link>
            <Link href="/appointment">Book appointment</Link>
          </div>
          <div className="grid gap-3 text-sm text-[var(--color-muted)]">
            <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
              Contact
            </p>
            <p>hello@maisondesable.ae</p>
            <p>+971 4 555 0188</p>
            <p>Jumeirah Beach Road, Dubai</p>
            <Link href="https://instagram.com" className="inline-flex items-center gap-2">
              <Instagram size={15} /> Instagram
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
