"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Gem,
  HandPlatter,
  Home,
  Images,
  Menu,
  MessageSquareQuote,
  Moon,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Gem },
  { label: "Services", href: "#services", icon: HandPlatter },
  { label: "Gallery", href: "#gallery", icon: Images },
  { label: "Team", href: "#team", icon: Users },
  { label: "Offers", href: "#offers", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: MessageSquareQuote },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const nextTheme = savedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-glass)] shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="#home"
          className={`group flex flex-col justify-center leading-tight transition-colors ${
            scrolled ? "text-[var(--color-ivory)]" : "text-[var(--color-on-image)]"
          }`}
        >
          <span className="font-heading text-3xl leading-[0.92] tracking-[0.16em] uppercase transition-transform duration-500 group-hover:translate-x-[2px]">
            Maison
          </span>
          <span className="mt-1 text-[10px] leading-none tracking-[0.48em] text-[var(--color-champagne)] uppercase">
            de Sable
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, href, icon: Icon }) => (
            <motion.div
              key={href}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative"
            >
              <Link
                href={href}
                className={`group relative inline-flex items-center gap-2 px-3 py-3 text-[0.82rem] font-medium tracking-[0.14em] uppercase transition ${
                  scrolled
                    ? "text-[var(--color-muted)] hover:text-[var(--color-ivory)]"
                    : "text-[var(--color-on-image-muted)] hover:text-[var(--color-on-image)]"
                }`}
              >
                <motion.span
                  variants={{
                    rest: { width: 0, opacity: 0, x: -6 },
                    hover: { width: 18, opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex overflow-hidden text-[var(--color-champagne)]"
                >
                  <Icon size={16} strokeWidth={1.85} />
                </motion.span>
                {label}
                <motion.span
                  variants={{ hover: { scaleX: 1, opacity: 1 } }}
                  initial={{ scaleX: 0.35, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-3 bottom-[7px] h-px origin-left bg-[var(--color-champagne)]"
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.div whileHover={{ y: -1.5 }} transition={{ duration: 0.25 }}>
            <Link
              href="#booking"
              className={`group inline-flex min-h-[3.25rem] items-center gap-3 rounded-full border px-6 text-[0.82rem] font-bold tracking-[0.02em] transition ${
                scrolled
                  ? "border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-ivory)] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                  : "border-white/18 bg-black/12 text-[var(--color-on-image)] backdrop-blur-md"
              }`}
            >
              Book Now
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </Link>
          </motion.div>
          <motion.button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            whileHover={{ y: -1.5, rotate: theme === "light" ? -10 : 10 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className={`inline-flex size-12 items-center justify-center border transition ${
              scrolled
                ? "border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-ivory)] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                : "border-white/18 bg-black/12 text-[var(--color-on-image)] backdrop-blur-md"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -18, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 18, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        <motion.button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.96 }}
          className={`inline-flex size-11 items-center justify-center border transition lg:hidden ${
            scrolled
              ? "border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-ivory)]"
              : "border-white/18 bg-black/12 text-[var(--color-on-image)] backdrop-blur-md"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ rotate: -14, opacity: 0, scale: 0.85 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 14, opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-glass-strong)] shadow-[0_18px_48px_rgba(0,0,0,0.08)] lg:hidden"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col px-5 py-6 sm:px-8">
              {navItems.map(({ label, href, icon: Icon }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.04, duration: 0.22 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[var(--color-border)] py-4 text-sm tracking-[0.18em] text-[var(--color-ivory)] uppercase"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon size={15} className="text-[var(--color-champagne)]" />
                      {label}
                    </span>
                    <ArrowUpRight size={14} className="text-[var(--color-champagne)]" />
                  </Link>
                </motion.div>
              ))}
              <button type="button" onClick={toggleTheme} className="button-secondary mt-5 justify-center">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
              <Link href="#booking" onClick={() => setOpen(false)} className="button-primary mt-5 text-center">
                Book Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
