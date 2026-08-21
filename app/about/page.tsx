import type { Metadata } from "next";
import Image from "next/image";
import { blurDataURL } from "@/lib/blur";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind NOOR Dubai: contemporary Arabian dining inspired by the Gulf, its ingredients, and its people.",
  openGraph: {
    images: [
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const ingredients = [
  "Dates",
  "Saffron",
  "Cardamom",
  "Za'atar",
  "Charcoal",
  "Gulf Seafood",
  "Local Herbs",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[52vh] min-h-[380px] items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1920&q=80"
          alt="The dining room at NOOR Dubai"
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
            <SectionLabel tone="ivory">Our Story</SectionLabel>
            <h1 className="mt-6 font-display text-5xl text-ivory sm:text-6xl">
              The Story Behind NOOR
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* INSPIRED BY THE GULF */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionLabel>Inspired by the Gulf</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              A Region, Reimagined
            </h2>
          </FadeIn>
          <FadeIn delay={1} className="flex items-center">
            <p className="text-lg leading-relaxed text-foreground/65">
              NOOR began with a simple question: what would it mean to
              honour the Gulf&rsquo;s culinary heritage without repeating
              it? The answer took shape across markets in Dubai, family
              kitchens in the Emirates, and long conversations about the
              dishes that define a home. What emerged is a menu that treats
              tradition as a foundation, not a costume &mdash; charcoal,
              saffron and date carry the same weight they always have, only
              plated for a modern table.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE INGREDIENTS */}
      <section className="bg-charcoal py-28 text-ivory lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <SectionLabel tone="ivory">The Ingredients</SectionLabel>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl">
              What We Cook With
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-ivory/10 sm:grid-cols-4">
            {ingredients.map((ingredient, i) => (
              <FadeIn
                key={ingredient}
                delay={(i % 4 as 0 | 1 | 2 | 3)}
                className="group flex aspect-square flex-col items-center justify-center gap-3 bg-charcoal p-6 text-center transition-colors duration-500 hover:bg-charcoal-light"
              >
                <span className="font-display text-lg text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl">{ingredient}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THE PEOPLE */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <FadeIn className="relative aspect-[4/5] overflow-hidden bg-charcoal-light">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
              alt="Chef Omar Al-Hassan plating a dish at NOOR Dubai"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />
          </FadeIn>
          <FadeIn delay={1}>
            <SectionLabel>The People</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Chef Omar Al-Hassan
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/65">
              &ldquo;Chef Omar&rsquo;s cooking is rooted in memories of
              family tables across the region, reinterpreted through a
              contemporary lens.&rdquo;
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/55">
              Trained across the Gulf and Europe, Chef Omar leads the NOOR
              kitchen with a philosophy of restraint: let the ingredient
              speak, let the fire do its work, and never crowd a plate with
              more than it needs.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
