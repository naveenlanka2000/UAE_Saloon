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
      className="relative overflow-hidden border-b border-[var(--color-border)] lg:min-h-[100svh]"
      style={{ background: "var(--hero-section-background)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,141,88,0.08),transparent_26%)]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-0 pt-16 sm:pt-18 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-18">
        <div className="grid w-full grid-cols-1 gap-8 px-5 pb-10 pt-5 sm:gap-10 sm:px-8 sm:pb-12 sm:pt-8 lg:min-h-screen lg:grid-cols-[0.76fr_1.24fr] lg:items-stretch lg:gap-0 lg:px-0 lg:pb-0 lg:pt-0">
          <div className="order-1 relative z-10 mx-auto flex w-full max-w-[24rem] flex-col items-center text-center sm:max-w-[28rem] lg:mx-0 lg:max-w-[25rem] lg:items-start lg:self-center lg:-translate-y-18 lg:pl-8 lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.24em] text-[var(--color-champagne)] uppercase sm:text-[11px] sm:tracking-[0.34em]"
            >
              Dubai luxury salon
            </motion.span>
            <div className="mt-4 w-full max-w-full overflow-visible sm:max-w-[24rem] lg:max-w-[22rem]">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08 }}
                className="overflow-visible pb-[0.22em] text-[clamp(3rem,16vw,6.8rem)] leading-[0.92] sm:pb-[0.36em] sm:text-[clamp(3.4rem,11vw,6.8rem)] sm:leading-[1.02]"
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
                <span className="-mt-1.5 block font-heading text-[0.21em] tracking-[0.12em] text-[var(--color-ivory)] uppercase sm:-mt-4 sm:text-[0.23em] sm:tracking-[0.15em]">
                  quietly elevated
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.14 }}
                className="mx-auto mt-1 max-w-[19rem] text-[0.62rem] tracking-[0.2em] text-[var(--color-ivory)]/86 uppercase sm:-mt-3 sm:max-w-none sm:text-[0.72rem] sm:tracking-[0.3em] lg:mx-0"
              >
                Hair, bridal, skin, and nail rituals
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mx-auto mt-4 max-w-[21rem] text-[0.92rem] leading-6 text-[var(--color-muted)] sm:max-w-[22rem] sm:text-[0.96rem] sm:leading-6.5 lg:mx-0"
              >
                Refined appointments for clients who want modern beauty with calm service, clean technique, and a premium finish.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="mt-6 flex w-full max-w-[22rem] flex-nowrap gap-3 sm:max-w-none sm:justify-center lg:justify-start"
            >
              <Link href="/appointment" className="button-apple-primary flex-1 justify-center px-4 text-[0.72rem] sm:flex-none sm:px-[1.1rem] sm:text-[0.76rem]">
                Book Now
              </Link>
              <Link href="/#services" className="button-apple-secondary flex-1 justify-center px-4 text-[0.72rem] sm:flex-none sm:px-[1.1rem] sm:text-[0.76rem]">
                Explore
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 relative mx-auto aspect-[16/18] w-full max-w-[24rem] overflow-hidden rounded-[1.75rem] sm:aspect-[16/15] sm:max-w-[36rem] lg:order-2 lg:min-h-screen lg:max-w-none lg:rounded-none lg:aspect-auto"
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
              className="absolute inset-0 h-full w-full object-cover object-[center_top] [filter:drop-shadow(0_22px_34px_rgba(17,17,17,0.12))] sm:object-cover sm:object-center lg:object-center"
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
