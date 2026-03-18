"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";

import { Navbar } from "@/components/site/navbar";
import { Reveal } from "@/components/ui/reveal";

const services = [
  "Hair Styling",
  "Hair Color",
  "Bridal Makeup",
  "Keratin Treatment",
  "Facial Ritual",
  "Nail Care",
];

const visitTypes = ["Today", "This Week", "Weekend", "Flexible"];
const visitTimes = ["Morning", "Afternoon", "Evening", "Flexible"];

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-[var(--color-ivory)]">
      <Navbar />

      <section className="section-shell border-t border-[var(--color-border)] pt-32 sm:pt-36 lg:pt-40">
        <Reveal className="relative overflow-hidden border border-[var(--color-border)] bg-[#151515] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,186,140,0.12),transparent_32%)]" />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_0.7fr_0.9fr] lg:items-center">
            <div className="relative z-10 max-w-[26rem]">
              <span className="section-eyebrow">Appointment page</span>
              <h1 className="mt-6 max-w-[8ch] font-heading text-[clamp(2.6rem,4.4vw,4.8rem)] leading-[0.94] tracking-[-0.04em] text-[var(--color-on-image)]">
                Book in a polished, private way.
              </h1>
              <p className="mt-5 max-w-[26rem] text-base leading-8 text-[var(--color-on-image-muted)] sm:text-lg">
                A refined booking flow for premium salon visits, bridal appointments, and tailored
                beauty sessions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#appointment-form" className="button-hero-primary">
                  Start Booking
                </Link>
                <Link href="https://wa.me/97145550188" className="button-hero-secondary">
                  WhatsApp
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[320px] border border-white/10 bg-white/6 p-3 backdrop-blur-sm"
            >
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury salon portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="relative min-h-[380px] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
                alt="Beauty editorial visual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.56)_100%)]" />
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.06}
          className="mt-4 overflow-hidden border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-panel-strong)_96%,transparent)_0%,color-mix(in_srgb,var(--color-panel)_94%,transparent)_100%)] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_130px]">
              <div className="relative min-h-[300px] overflow-hidden border border-[var(--color-border)]">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                  alt="Hair wash and care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-3">
                <div className="border border-[var(--color-border)] bg-[var(--color-charcoal)] px-4 py-5">
                  <p className="font-heading text-4xl leading-none">10:00</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">Open daily</p>
                </div>
                <div className="border border-[var(--color-border)] bg-[var(--color-charcoal)] px-4 py-5">
                  <p className="font-heading text-4xl leading-none">AED</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">Luxury pricing</p>
                </div>
              </div>
            </div>

            <div className="max-w-[34rem]">
              <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
                Booking guide
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.3rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em]">
                Choose your service, day, and time in a few quick steps.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                We kept the form focused: only the details needed to match you with the right
                artist and the right appointment window.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="border border-[var(--color-border)] bg-[var(--color-charcoal)] px-4 py-4 text-sm text-[var(--color-muted)]">
                  WhatsApp priority replies
                </div>
                <div className="border border-[var(--color-border)] bg-[var(--color-charcoal)] px-4 py-4 text-sm text-[var(--color-muted)]">
                  Easy rescheduling support
                </div>
                <div className="border border-[var(--color-border)] bg-[var(--color-charcoal)] px-4 py-4 text-sm text-[var(--color-muted)]">
                  Private consultation options
                </div>
                <div className="border border-[var(--color-border)] bg-[var(--color-charcoal)] px-4 py-4 text-sm text-[var(--color-muted)]">
                  Dubai, Jumeirah Beach Road
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          id="appointment-form"
          className="mt-4 overflow-hidden border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-panel)_94%,transparent)_0%,color-mix(in_srgb,var(--color-charcoal)_100%,transparent)_100%)] p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
                Appointment request
              </p>
              <h3 className="mt-4 font-heading text-4xl leading-none sm:text-5xl">
                Choose your options.
              </h3>
            </div>
            <div className="inline-flex items-center gap-3 border border-[var(--color-border)] bg-[var(--color-charcoal)]/72 px-4 py-2 text-[11px] tracking-[0.22em] text-[var(--color-champagne)] uppercase">
              <CalendarDays size={14} />
              Same-day slots available
            </div>
          </div>

          <form className="mt-8 grid gap-6">
            <div className="grid gap-3">
              <span className="text-[11px] tracking-[0.22em] text-[var(--color-champagne)] uppercase">
                Service
              </span>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((item) => (
                  <label
                    key={item}
                    className="group flex cursor-pointer items-center justify-between border border-[var(--color-border)] bg-[var(--color-charcoal)]/46 px-4 py-3 transition hover:border-[var(--color-champagne)]/35 hover:bg-[var(--color-charcoal)]/72"
                  >
                    <span className="text-sm text-[var(--color-ivory)]/84">{item}</span>
                    <input type="radio" name="service" className="sr-only" />
                    <span className="inline-flex size-4 border border-[var(--color-border)] bg-[var(--color-panel)] transition group-hover:border-[var(--color-champagne)]/45" />
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <div className="grid gap-3">
                <span className="text-[11px] tracking-[0.22em] text-[var(--color-champagne)] uppercase">
                  Preferred day
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {visitTypes.map((item) => (
                    <label
                      key={item}
                      className="group flex cursor-pointer items-center justify-between border border-[var(--color-border)] bg-[var(--color-charcoal)]/46 px-4 py-3 transition hover:border-[var(--color-champagne)]/35 hover:bg-[var(--color-charcoal)]/72"
                    >
                      <span className="text-sm text-[var(--color-ivory)]/84">{item}</span>
                      <input type="radio" name="day" className="sr-only" />
                      <span className="inline-flex size-4 border border-[var(--color-border)] bg-[var(--color-panel)] transition group-hover:border-[var(--color-champagne)]/45" />
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <span className="text-[11px] tracking-[0.22em] text-[var(--color-champagne)] uppercase">
                  Preferred time
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {visitTimes.map((item) => (
                    <label
                      key={item}
                      className="group flex cursor-pointer items-center justify-between border border-[var(--color-border)] bg-[var(--color-charcoal)]/46 px-4 py-3 transition hover:border-[var(--color-champagne)]/35 hover:bg-[var(--color-charcoal)]/72"
                    >
                      <span className="text-sm text-[var(--color-ivory)]/84">{item}</span>
                      <input type="radio" name="time-band" className="sr-only" />
                      <span className="inline-flex size-4 border border-[var(--color-border)] bg-[var(--color-panel)] transition group-hover:border-[var(--color-champagne)]/45" />
                    </label>
                  ))}
                </div>
              </div>
            </div>

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
                <span>Preferred date</span>
                <input type="date" />
              </label>
              <label className="form-field">
                <span>Preferred stylist</span>
                <input type="text" placeholder="Optional" />
              </label>
            </div>

            <label className="form-field">
              <span>Notes</span>
              <textarea rows={4} placeholder="Desired look, occasion, or any special request" />
            </label>

            <div className="grid gap-4 border-t border-[var(--color-border)] pt-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="grid gap-3 text-sm text-[var(--color-muted)]">
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-[var(--color-champagne)]" />
                  <span>+971 4 555 0188</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={15} className="text-[var(--color-champagne)]" />
                  <span>WhatsApp priority booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-[var(--color-champagne)]" />
                  <span>Jumeirah Beach Road, Dubai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 size={15} className="text-[var(--color-champagne)]" />
                  <span>Daily, 10:00 AM to 10:00 PM</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Link href="https://wa.me/97145550188" className="button-secondary">
                  WhatsApp
                </Link>
                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="button-primary"
                >
                  Request Appointment <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
