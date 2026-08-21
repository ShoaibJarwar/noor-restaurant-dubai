"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/lib/blur";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { src: string; alt: string; tall: boolean };

const SWIPE_THRESHOLD = 40;

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setActiveIndex(i)}
            className={`group relative mb-4 block w-full overflow-hidden break-inside-avoid bg-charcoal-light focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />
            <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15" />
          </button>
        ))}
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-charcoal/97 backdrop-blur-sm transition-opacity duration-300 ${
          activeIndex !== null ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        onClick={close}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {activeIndex !== null && (
          <>
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-6 top-6 p-2 text-ivory hover:text-gold transition-colors"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-ivory hover:text-gold transition-colors md:left-8"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-ivory hover:text-gold transition-colors md:right-8"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
            <div
              className="relative h-[70vh] w-[88vw] max-w-4xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-ivory/60">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </>
  );
}
