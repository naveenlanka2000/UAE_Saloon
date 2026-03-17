"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type GalleryCarouselProps = {
  slides: string[];
};

export function GalleryCarousel({ slides }: GalleryCarouselProps) {
  return (
    <div className="relative border border-[var(--color-border)]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        loop
        speed={900}
        className="h-[520px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide}>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={slide}
                alt={`Maison de Sable lookbook ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(7,7,7,0.9)_100%)]" />
              <div className="absolute bottom-0 left-0 max-w-xl p-8 sm:p-10">
                <p className="text-[11px] tracking-[0.26em] text-[var(--color-champagne)] uppercase">
                  Look {index + 1}
                </p>
                <h3 className="mt-3 font-heading text-3xl text-[var(--color-on-image)] sm:text-4xl">
                  Intentional tone, polished finish, and editorial composition in every frame
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
