"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { heroSlides, stats } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0" style={{ background: "var(--hero-overlay-primary)" }} />
              <div className="absolute inset-0" style={{ background: "var(--hero-overlay-secondary)" }} />
              <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-24">
                <div className="grid min-h-[calc(100svh-7rem)] w-full gap-8 lg:grid-cols-[minmax(0,0.95fr)_232px] lg:gap-10">
                  <div className="flex min-h-[28rem] max-w-[880px] flex-col justify-center lg:min-h-[31rem]">
                    <motion.span
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="section-eyebrow"
                    >
                      {slide.eyebrow}
                    </motion.span>
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.95, delay: 0.1 }}
                      className="mt-5 max-w-[12ch] font-heading text-[clamp(2.7rem,4.5vw,4.05rem)] leading-[0.92] text-[var(--color-on-image)]"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                      className="mt-6 max-w-[34rem] text-base leading-8 text-[var(--color-on-image-muted)] sm:text-lg"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.3 }}
                      className="mt-8 flex flex-col gap-4 sm:flex-row"
                    >
                      <Link href="#booking" className="button-hero-primary">
                        Book Appointment
                      </Link>
                      <Link href="#services" className="button-hero-secondary">
                        Explore Services <ChevronRight size={16} />
                      </Link>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.95, delay: 0.25 }}
                    className="grid w-full max-w-[232px] self-center justify-self-end gap-px border bg-[var(--hero-stat-surface)] lg:-translate-y-4"
                    style={{ borderColor: "var(--hero-frame)" }}
                  >
                    {stats.map((stat) => (
                      <div key={stat.label} className="p-4 backdrop-blur-md" style={{ background: "var(--hero-stat-card)" }}>
                        <div className="font-heading text-[2.5rem] leading-none text-[var(--color-champagne)]">
                          {stat.value}
                        </div>
                        <p className="mt-3 max-w-[15ch] text-[0.82rem] leading-6 text-[var(--color-on-image-muted)]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
