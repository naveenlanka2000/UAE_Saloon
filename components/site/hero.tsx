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
      className="relative min-h-screen overflow-hidden border-b border-[var(--color-border)]"
      style={{ background: "var(--hero-section-background)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,141,88,0.08),transparent_26%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-0 pt-20 sm:pt-24 lg:pt-24">
        <div className="grid min-h-screen w-full gap-8 px-5 pb-8 sm:px-8 sm:pb-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-stretch lg:gap-0 lg:px-0 lg:pb-0">
          <div className="relative z-10 max-w-[28rem] self-end pb-2 lg:pl-8 lg:pb-20">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[11px] tracking-[0.34em] text-[var(--color-champagne)] uppercase"
            >
              Dubai luxury salon
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="mt-5 text-[clamp(2.9rem,12vw,6.8rem)] leading-[0.92]"
              style={{ color: "var(--hero-wordmark)" }}
            >
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.35, x: -10 }}
                animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1, x: 0 }}
                transition={{ duration: 1.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative block"
              >
                <motion.span
                  initial={{ x: "-18%", opacity: 0 }}
                  animate={{ x: "112%", opacity: [0, 0.9, 0] }}
                  transition={{ duration: 1.7, delay: 0.32, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-y-[14%] left-0 w-[18%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.55)_50%,transparent_100%)] blur-[5px]"
                />
                <span className="font-script block pl-1 text-[1.04em] tracking-[-0.045em] [font-variant-ligatures:common-ligatures_contextual]">
                  Beauty
                </span>
              </motion.span>
              <span className="mt-1 block font-heading text-[0.28em] tracking-[0.18em] text-[var(--color-ivory)] uppercase">
                quietly elevated
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.14 }}
              className="mt-4 pl-1 text-[0.7rem] tracking-[0.34em] text-[var(--color-ivory)]/86 uppercase"
            >
              Hair, bridal, skin, and nail rituals
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-5 max-w-[22rem] text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7"
            >
              Refined appointments for clients who want modern beauty with calm service, clean technique, and a premium finish.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/appointment" className="button-primary">
                Book Now
              </Link>
              <Link href="/#services" className="button-secondary">
                Explore
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[42vh] overflow-hidden sm:min-h-[52vh] lg:min-h-screen"
          >
            <img
              src={
                theme === "dark"
                  ? `${publicBasePath}/hero-dark.png`
                  : `${publicBasePath}/hero-main.png`
              }
              alt="Luxury salon hero portrait"
              className="absolute inset-0 h-full w-full object-cover object-center"
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
