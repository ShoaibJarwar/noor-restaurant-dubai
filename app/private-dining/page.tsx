import type { Metadata } from "next";
import Image from "next/image";
import { blurDataURL } from "@/lib/blur";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import PrivateDiningForm from "@/components/PrivateDiningForm";

export const metadata: Metadata = {
  title: "Private Dining",
  description:
    "Private dining at NOOR Dubai — designed for celebrations, corporate dinners, weddings and unforgettable evenings.",
  openGraph: {
    images: [
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const offerings = [
  {
    title: "Private Dining Room",
    copy: "A secluded room for up to 20 guests, styled in the same warm palette as the main dining room.",
  },
  {
    title: "Corporate Dinners",
    copy: "Considered menus and a discreet setting for the conversations that matter.",
  },
  {
    title: "Weddings",
    copy: "From intimate gatherings to full celebrations, tailored to your occasion.",
  },
  {
    title: "Family Celebrations",
    copy: "Generous, shareable menus built for milestones worth marking.",
  },
  {
    title: "Chef's Table",
    copy: "A front-row seat to the kitchen, with a menu narrated course by course.",
  },
  {
    title: "Custom Menus",
    copy: "Our culinary team will build a menu around your guests, your budget and your occasion.",
  },
];

export default function PrivateDiningPage() {
  return (
    <>
      <section className="relative flex h-[56vh] min-h-[420px] items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1920&q=80"
          alt="Private dining room at NOOR Dubai set for an occasion"
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
            <SectionLabel tone="ivory">Private Dining</SectionLabel>
            <h1 className="mt-6 max-w-2xl font-display text-5xl text-ivory sm:text-6xl">
              Your Table, Your Occasion
            </h1>
            <p className="mt-5 max-w-md text-ivory/70">
              Private dining designed for celebrations, gatherings and
              unforgettable evenings.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 3) as 0 | 1 | 2}>
              <span className="font-display text-3xl text-gold/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {item.copy}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <FadeIn>
            <SectionLabel tone="ivory">Enquire</SectionLabel>
            <h2 className="mt-6 font-display text-4xl text-ivory sm:text-5xl">
              Plan Your Evening
            </h2>
            <p className="mt-4 text-ivory/60">
              Share a few details and our events team will reach out to
              begin planning.
            </p>
            <div className="mt-12">
              <PrivateDiningForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
