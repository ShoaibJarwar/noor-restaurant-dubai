import type { Metadata } from "next";
import Image from "next/image";
import { blurDataURL } from "@/lib/blur";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import MenuCategory from "@/components/MenuCategory";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import { menu } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the NOOR Dubai menu: contemporary expressions of Gulf and Middle Eastern flavors, from mezze to dessert.",
  openGraph: {
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function MenuPage() {
  return (
    <>
      <section className="relative flex h-[52vh] min-h-[380px] items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1920&q=80"
          alt="A plated dish at NOOR Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL()}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
          <FadeIn>
            <SectionLabel tone="ivory">The Menu</SectionLabel>
            <h1 className="mt-6 font-display text-5xl text-ivory sm:text-6xl">
              The Menu
            </h1>
            <p className="mt-4 max-w-md text-ivory/70">
              Contemporary expressions of the flavors we grew up with.
            </p>
          </FadeIn>
        </div>
      </section>

      <MenuCategoryNav categories={menu} />

      <section className="mx-auto max-w-3xl px-6 py-4 lg:px-10">
        {menu.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </section>

      <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <p className="text-xs text-foreground/40">
          Prices are in AED and inclusive of applicable taxes. Please inform
          your server of any allergies or dietary requirements.
        </p>
      </div>
    </>
  );
}
