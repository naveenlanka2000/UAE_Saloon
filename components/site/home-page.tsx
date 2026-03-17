import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Instagram, MapPin, Phone, Star } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  differentiators,
  gallerySlides,
  offers,
  serviceTracks,
  team,
  testimonials,
} from "@/lib/data";

import { Hero } from "./hero";
import { GalleryCarousel } from "./gallery-carousel";
import { Navbar } from "./navbar";
import { ServicesShowcase } from "./services-showcase";

export function HomePage() {
  return (
    <main className="bg-[var(--color-obsidian)] text-[var(--color-ivory)]">
      <Navbar />
      <Hero />

      <section id="about" className="section-shell border-t border-[var(--color-border)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-6">
              <span className="section-eyebrow">About the salon</span>
              <h2 className="font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
                Quiet luxury, precision craft, and a salon ritual shaped around your standards.
              </h2>
            </div>
            <div className="grid gap-6 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              <p>
                Maison de Sable was created for clients who value discretion, technical excellence,
                and a polished experience from arrival to final reveal. Every appointment is paced
                with intention, blending premium beauty care with refined hospitality.
              </p>
              <p>
                We focus on expert styling, healthy hair, elevated bridal beauty, and immaculate
                hygiene in an environment that feels calm, architectural, and unmistakably premium.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="services" className="section-shell bg-[var(--color-charcoal)]">
        <Reveal>
          <SectionHeading
            eyebrow="Featured services"
            title="Luxury treatments designed to look immaculate in person and in print"
            description="Each service is shaped with sharp technique, premium formulations, and a finish that feels modern, flattering, and enduring."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <ServicesShowcase primary={serviceTracks.primary} secondary={serviceTracks.secondary} />
        </Reveal>
      </section>

      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Every detail is calibrated for premium comfort, confidence, and visible quality"
            description="The salon experience is built around elevated outcomes and a level of care that premium UAE clients expect."
          />
        </Reveal>
        <div
          style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
          className="mt-14 px-2"
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
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(10,10,10,0.18)_45%,rgba(10,10,10,0.8)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                      <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
                        Signature standard
                      </p>
                      <h3 className="mt-2 max-w-[14ch] font-heading text-3xl text-[var(--color-on-image)] sm:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[32ch] text-sm leading-7 text-[var(--color-on-image-muted)]">
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

      <section id="team" className="section-shell bg-[var(--color-charcoal)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Our stylists"
              title="A handpicked team with fashion-led taste and disciplined technical depth"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Our artists combine trend intelligence with precision execution, creating looks that
              feel luxurious, contemporary, and impeccably tailored to the individual.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="frame-panel card-shell group bg-[var(--color-panel)]">
                <div className="relative h-[360px] overflow-hidden sm:h-[420px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="card-body min-h-[12.5rem]">
                  <div className="card-copy">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-3xl">{member.name}</h3>
                      <span className="pt-1 text-[11px] tracking-[0.22em] text-[var(--color-champagne)] uppercase">
                        {member.role}
                      </span>
                    </div>
                    <p className="max-w-[32ch] text-sm leading-7 text-[var(--color-muted)]">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Lookbook"
            title="A visual edit of texture, tone, glow, and modern salon elegance"
            description="Cinematic imagery and premium finishing define the mood of our transformations."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <GalleryCarousel slides={gallerySlides} />
          </Reveal>
          <div className="grid gap-4">
            {gallerySlides.slice(1).map((image, index) => (
              <Reveal key={image} delay={index * 0.08}>
                <div className="relative min-h-[164px] border border-[var(--color-border)]">
                  <Image
                    src={image}
                    alt={`Salon gallery image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="section-shell bg-[var(--color-charcoal)]">
        <Reveal>
          <SectionHeading
            eyebrow="Offers and packages"
            title="Curated packages that elevate value without compromising exclusivity"
            description="Structured for premium clients who want complete transformations, event-ready beauty, or effortless monthly upkeep."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={index * 0.08}>
              <article className="frame-panel card-shell bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-glass)_92%,transparent)_0%,color-mix(in_srgb,var(--color-panel)_96%,transparent)_100%)]">
                <div className="card-body min-h-[18rem]">
                  <div className="card-copy">
                    <span className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
                      Signature package
                    </span>
                    <h3 className="mt-1 font-heading text-4xl">{offer.title}</h3>
                    <p className="max-w-[32ch] text-sm leading-7 text-[var(--color-muted)]">
                      {offer.copy}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
                    <span className="text-sm text-[var(--color-ivory)]">{offer.meta}</span>
                    <Link href="#booking" className="inline-flex items-center gap-2 text-sm text-[var(--color-champagne)]">
                      Inquire <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by clients who value polish, discretion, and consistent excellence"
            />
          </Reveal>
          <div className="grid gap-6">
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
        <div className="frame-grid grid gap-4 border border-[var(--color-border)] bg-[var(--color-grid)] lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="frame-panel bg-[var(--color-panel)] p-8 sm:p-10 lg:p-14">
            <span className="section-eyebrow">Book your visit</span>
            <h2 className="mt-5 font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
              Reserve a salon experience designed to feel effortless and exceptional.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Request your appointment and our team will confirm availability, preferred service
              pairing, and ideal timing for your visit.
            </p>
            <div className="mt-10 grid gap-6 text-sm text-[var(--color-muted)]">
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[var(--color-champagne)]" />
                <span>+971 4 555 0188</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-[var(--color-champagne)]" />
                <span>Jumeirah Beach Road, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock3 size={18} className="text-[var(--color-champagne)]" />
                <span>Daily, 10:00 AM to 10:00 PM</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="frame-panel bg-[var(--color-panel-strong)] p-8 sm:p-10 lg:p-14">
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-field">
                  <span>Name</span>
                  <input type="text" placeholder="Your full name" />
                </label>
                <label className="form-field">
                  <span>Phone</span>
                  <input type="tel" placeholder="+971" />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-field">
                  <span>Service</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select service
                    </option>
                    <option>Hair Styling</option>
                    <option>Hair Coloring</option>
                    <option>Bridal Makeup</option>
                    <option>Keratin Treatment</option>
                    <option>Facial Treatment</option>
                  </select>
                </label>
                <label className="form-field">
                  <span>Preferred time</span>
                  <input type="time" />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-field">
                  <span>Preferred date</span>
                  <input type="date" />
                </label>
                <label className="form-field">
                  <span>Preferred stylist</span>
                  <input type="text" placeholder="Optional" />
                </label>
              </div>
              <label className="form-field">
                <span>Message</span>
                <textarea rows={5} placeholder="Tell us about your occasion or desired result" />
              </label>
              <button type="submit" className="button-primary mt-2 justify-center">
                Request Appointment
              </button>
            </form>
          </Reveal>
        </div>
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
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#team">Team</Link>
            <Link href="#booking">Book appointment</Link>
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
