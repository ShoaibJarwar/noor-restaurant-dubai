import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look inside NOOR Dubai — the dining room, the kitchen, the dishes, and the details.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative flex h-[52vh] min-h-[380px] items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=1920&q=80"
          alt="Close-up of a signature dish at NOOR Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
          <FadeIn>
            <SectionLabel tone="ivory">Gallery</SectionLabel>
            <h1 className="mt-6 font-display text-5xl text-ivory sm:text-6xl">
              Inside NOOR
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
