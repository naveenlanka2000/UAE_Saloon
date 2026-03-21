"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

type ServicesShowcaseProps = {
  primary: ServiceItem[];
  secondary: ServiceItem[];
};

function ServiceTrack({
  items,
  reverse = false,
  compact = false,
  onSlideChange,
  onSwiper,
  showDots = false,
  activeIndex = 0,
  isPlaying = true,
}: {
  items: ServiceItem[];
  reverse?: boolean;
  compact?: boolean;
  onSlideChange: (swiper: SwiperType) => void;
  onSwiper?: (swiper: SwiperType) => void;
  showDots?: boolean;
  activeIndex?: number;
  isPlaying?: boolean;
}) {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop
        speed={3200}
        allowTouchMove={true}
        slidesPerView="auto"
        spaceBetween={8}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          reverseDirection: reverse,
          waitForTransition: false,
        }}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        className="services-track !overflow-visible"
      >
        {items.map((item) => (
          <SwiperSlide
            key={`${compact ? "compact" : "large"}-${item.title}`}
            className={compact ? "!w-[280px] sm:!w-[340px] lg:!w-[380px]" : "!w-[360px] sm:!w-[480px] lg:!w-[560px]"}
          >
            <article className="relative overflow-hidden border border-white/10">
              <div className={compact ? "relative h-[240px] sm:h-[260px] lg:h-[280px]" : "relative h-[360px] sm:h-[420px] lg:h-[460px]"}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="eager"
                  sizes={compact ? "(max-width: 639px) 280px, (max-width: 1023px) 340px, 380px" : "(max-width: 639px) 360px, (max-width: 1023px) 480px, 560px"}
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: "var(--services-card-overlay)" }} />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                  <p className="text-[11px] tracking-[0.24em] text-[var(--color-champagne)] uppercase">
                    Signature service
                  </p>
                  <h3 className={`mt-2 max-w-[12ch] font-heading text-[var(--color-on-image)] ${compact ? "text-3xl" : "text-4xl sm:text-5xl"}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[26ch] text-sm leading-7 text-[var(--color-on-image-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      {showDots ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((item, index) => (
            <span
              key={`${item.title}-dot`}
              className={`relative block h-[6px] overflow-hidden rounded-full bg-[var(--color-indicator-track)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                index === activeIndex ? "w-8" : "w-[6px]"
              }`}
            >
              <span
                className={`absolute inset-y-0 left-0 rounded-full bg-[var(--color-indicator-fill)] ${
                  index === activeIndex ? "animate-[servicesDotFill_3.5s_linear_forwards]" : "w-0"
                }`}
                style={{
                  animationPlayState: isPlaying ? "running" : "paused",
                }}
              />
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ServicesShowcase({ primary, secondary }: ServicesShowcaseProps) {
  const [secondaryIndex, setSecondaryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const primarySwiperRef = useRef<SwiperType | null>(null);
  const secondarySwiperRef = useRef<SwiperType | null>(null);

  const togglePlayback = () => {
    const nextIsPlaying = !isPlaying;

    [primarySwiperRef.current, secondarySwiperRef.current].forEach((swiper) => {
      if (!swiper?.autoplay) return;
      if (nextIsPlaying) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    });

    setIsPlaying(nextIsPlaying);
  };

  return (
    <div
      style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
      className="mt-14 overflow-hidden"
    >
      <div className="px-2">
        <ServiceTrack
          items={primary}
          onSwiper={(swiper) => {
            primarySwiperRef.current = swiper;
          }}
          onSlideChange={() => {}}
        />
      </div>
      <div className="mt-2 px-2">
        <ServiceTrack
          items={secondary}
          reverse
          compact
          showDots
          activeIndex={secondaryIndex}
          isPlaying={isPlaying}
          onSwiper={(swiper) => {
            secondarySwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) =>
            setSecondaryIndex((secondary.length - 1 - swiper.realIndex + secondary.length) % secondary.length)
          }
        />
        <div className="relative z-10 mt-[-1.9rem] h-12">
          <div className="absolute right-1 top-[12px]">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause service slider" : "Play service slider"}
              className="inline-flex size-7 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-ivory)] shadow-[0_6px_14px_rgba(0,0,0,0.05)] transition hover:-translate-y-[1px] hover:border-[var(--color-champagne)]/40"
            >
              {isPlaying ? <Pause size={10} strokeWidth={2} /> : <Play size={10} strokeWidth={2} className="translate-x-[1px]" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
