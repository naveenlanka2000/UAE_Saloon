"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getPublicBasePath } from "@/lib/public-base-path";

export function Hero() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [publicBasePath, setPublicBasePath] = useState("");

  useEffect(() => {
    const syncTheme = () => {
      const currentTheme = document.documentElement.dataset.theme;
      setTheme(currentTheme === "dark" ? "dark" : "light");
    };

    setPublicBasePath(getPublicBasePath());
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden border-b border-[var(--color-border)]"
      style={{ background: "var(--hero-section-background)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,141,88,0.08),transparent_26%)]" />
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1440px] items-center px-0 pt-16 sm:pt-18 lg:pt-18">
        <div className="grid min-h-[100svh] w-full grid-cols-[1fr_0.82fr] gap-3 px-4 pb-4 sm:gap-6 sm:px-8 sm:pb-8 lg:min-h-screen lg:grid-cols-[0.76fr_1.24fr] lg:items-stretch lg:gap-0 lg:px-0 lg:pb-0">
          <div className="relative z-10 max-w-none self-start pt-2 lg:max-w-[25rem] lg:self-center lg:-translate-y-18 lg:pl-8 lg:pt-0">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[9px] tracking-[0.26em] text-[var(--color-champagne)] uppercase sm:text-[11px] sm:tracking-[0.34em]"
            >
              Dubai luxury salon
            </motion.span>
            <div className="mt-2 max-w-[11rem] overflow-visible sm:mt-3 sm:max-w-[22rem]">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08 }}
              className="overflow-visible pb-[0.34em] text-[clamp(1.8rem,8.8vw,6.8rem)] leading-[1.02] sm:pb-[0.42em] sm:text-[clamp(2.35rem,10.5vw,6.8rem)] sm:leading-[1.08]"
                style={{ color: "var(--hero-wordmark)" }}
              >
                <motion.span
                  initial={{ clipPath: "inset(0 134% 0 -14%)", opacity: 0.35, x: -10 }}
                  animate={{ clipPath: "inset(0 -24% 0 -14%)", opacity: 1, x: 0 }}
                  transition={{ duration: 2.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative block overflow-visible"
                >
                  <motion.span
                    initial={{ x: "-18%", opacity: 0 }}
                    animate={{ x: "144%", opacity: [0, 0.9, 0] }}
                    transition={{ duration: 2, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-[14%] left-0 w-[18%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.55)_50%,transparent_100%)] blur-[5px]"
                  />
                  <span
                    className="font-script relative inline-block w-max whitespace-nowrap overflow-visible px-[0.03em] pr-[0.12em] pt-[0.02em] pb-[0.24em] text-[1.04em] leading-[1.14] tracking-[-0.05em] [font-variant-ligatures:common-ligatures_contextual] sm:px-[0.06em] sm:pr-[0.14em] sm:pt-[0.04em] sm:pb-[0.34em] sm:leading-[1.24] sm:tracking-[-0.045em]"
                  >
                    Beauty
                  </span>
                </motion.span>
                <span className="-mt-2 block font-heading text-[0.21em] tracking-[0.1em] text-[var(--color-ivory)] uppercase sm:-mt-4 sm:text-[0.23em] sm:tracking-[0.15em]">
                  quietly elevated
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.14 }}
                className="-mt-1.5 pl-0.5 text-[0.46rem] tracking-[0.14em] text-[var(--color-ivory)]/86 uppercase sm:-mt-4 sm:pl-1 sm:text-[0.66rem] sm:tracking-[0.3em]"
              >
                Hair, bridal, skin, and nail rituals
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-2 max-w-[10rem] pl-0.5 text-[0.7rem] leading-4.5 text-[var(--color-muted)] sm:max-w-[21rem] sm:pl-1 sm:text-[0.96rem] sm:leading-6.5"
              >
                Refined appointments for clients who want modern beauty with calm service, clean technique, and a premium finish.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="mt-3 flex flex-col gap-2 sm:flex-row"
            >
              <Link href="/appointment" className="button-apple-primary w-full min-w-0 px-3 text-[0.72rem] sm:flex-1 sm:px-4 sm:text-[0.76rem] lg:flex-none">
                Book Now
              </Link>
              <Link href="/#services" className="button-apple-secondary w-full min-w-0 px-3 text-[0.72rem] sm:flex-1 sm:px-4 sm:text-[0.76rem] lg:flex-none">
                Explore
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[52svh] overflow-hidden sm:min-h-[46vh] lg:min-h-screen"
          >
            <img
              src={
                theme === "dark"
                  ? `${publicBasePath}/hero-dark.png`
                  : `${publicBasePath}/hero-main.png`
              }
              alt="Luxury salon hero portrait"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              draggable={false}
              className="absolute inset-0 h-full w-full scale-[1.08] object-contain object-[62%_18%] [filter:drop-shadow(0_22px_34px_rgba(17,17,17,0.12))] sm:scale-100 sm:object-cover sm:object-center lg:object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(90deg,rgba(9,9,9,0.04)_0%,rgba(9,9,9,0)_26%,rgba(9,9,9,0.06)_100%)"
                    : "linear-gradient(90deg,rgba(253,252,249,0.04)_0%,rgba(253,252,249,0)_28%,rgba(16,18,20,0.04)_100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
