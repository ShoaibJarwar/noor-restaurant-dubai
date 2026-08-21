import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import DishCard from "@/components/DishCard";
import { signatureDishes, menu, openingHours } from "@/lib/data";

export default function HomePage() {
  const previewCategories = menu.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex h-screen min-h-[640px] w-full items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1920&q=80"
          alt="NOOR Dubai dining room bathed in warm evening light"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 lg:px-10 lg:pb-32">
          <FadeIn>
            <SectionLabel tone="ivory">Dubai · United Arab Emirates</SectionLabel>
          </FadeIn>
          <FadeIn delay={1}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              A New Expression of Arabian Dining
            </h1>
          </FadeIn>
          <FadeIn delay={2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">
              Ancient flavors. Modern craft. An unforgettable table.
            </p>
          </FadeIn>
          <FadeIn delay={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="solid">
                Reserve a Table
              </Button>
              <Button href="/menu" variant="outline-light">
                Explore the Menu
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-in text-ivory/60">
          <ChevronDown size={22} strokeWidth={1.2} />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Rooted in tradition.
              <br /> Reimagined for today.
            </h2>
          </FadeIn>
          <FadeIn delay={1} className="flex items-center">
            <p className="text-lg leading-relaxed text-foreground/65">
              At NOOR, the flavors of Arabia meet contemporary culinary craft.
              Our kitchen celebrates the ingredients, rituals and generosity
              of the region while creating a dining experience that feels
              distinctly of today. Every dish is a conversation between
              memory and modernity &mdash; served in a room designed for
              connection.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="bg-background-alt py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <SectionLabel>Signature Dishes</SectionLabel>
                <h2 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
                  From Our Kitchen
                </h2>
              </div>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-foreground/70 hover:text-gold transition-colors"
              >
                View Full Menu
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {signatureDishes.map((dish, i) => (
              <FadeIn key={dish.name} delay={(i % 3) as 0 | 1 | 2}>
                <DishCard dish={dish} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-charcoal py-28 text-ivory lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn className="text-center">
            <SectionLabel tone="ivory" align="center" >More Than a Meal</SectionLabel>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl">
              The Full NOOR Experience
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ivory/10 md:grid-cols-3">
            {[
              {
                title: "The Kitchen",
                copy: "Contemporary interpretations of regional flavors, shaped by fire, smoke and patience.",
              },
              {
                title: "The Table",
                copy: "An intimate atmosphere designed for long conversations and slow evenings.",
              },
              {
                title: "The Cellar",
                copy: "A carefully curated selection of beverages and non-alcoholic pairings.",
              },
            ].map((item, i) => (
              <FadeIn
                key={item.title}
                delay={(i % 3) as 0 | 1 | 2}
                className="group bg-charcoal p-10 transition-colors duration-500 hover:bg-charcoal-light"
              >
                <span className="font-display text-3xl text-gold/50">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                  {item.copy}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative flex h-[70vh] min-h-[420px] items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
          alt="Candlelit table set for an evening at NOOR"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <FadeIn className="relative z-10 px-6 text-center">
          <h2 className="font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
            Gather. Taste. Remember.
          </h2>
        </FadeIn>
      </section>

      {/* MENU PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <FadeIn>
          <SectionLabel>The Menu</SectionLabel>
          <h2 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
            A Taste of the Table
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3">
          {previewCategories.map((cat, i) => (
            <FadeIn key={cat.id} delay={(i % 3) as 0 | 1 | 2}>
              <h3 className="font-display text-2xl text-gold">{cat.label}</h3>
              <ul className="mt-5 space-y-4 border-t border-foreground/10 pt-5">
                {cat.items.slice(0, 3).map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3">
                    <span className="text-sm text-foreground/80">{item.name}</span>
                    <span className="whitespace-nowrap text-xs text-foreground/40">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors"
          >
            View Full Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </section>

      {/* STORY PREVIEW */}
      <section className="bg-background-tint py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
          <FadeIn className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80"
              alt="Chef preparing dishes over an open flame at NOOR"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={1} className="order-1 lg:order-2">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              A Table Inspired by Home
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/65">
              NOOR draws its inspiration from the UAE&rsquo;s landscapes,
              hospitality, spices, markets, coastline and family gatherings.
              Every detail, from the char on the grill to the linen on the
              table, is considered with the same generosity found in a Gulf
              home.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors"
              >
                Discover Our Story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionLabel>Visit Us</SectionLabel>
            <h2 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
              NOOR Dubai
            </h2>

            <div className="mt-10 space-y-8 text-foreground/70">
              <div className="flex gap-4">
                <MapPin size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed">
                  Downtown Dubai
                  <br />
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="flex gap-4">
                <Phone size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed">+971 4 XXX XXXX</p>
              </div>
              <div className="flex gap-4">
                <Mail size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed">hello@noordubai.ae</p>
              </div>

              <div className="border-t border-foreground/10 pt-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40">
                  Opening Hours
                </p>
                <div className="mt-4 space-y-3">
                  {openingHours.map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span>{h.days}</span>
                      <span className="text-foreground/50">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="https://maps.google.com" variant="outline-dark">
                Get Directions
              </Button>
              <Button href="/contact" variant="solid">
                Reserve a Table
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={1} className="relative min-h-[380px] overflow-hidden bg-charcoal">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(176,141,87,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,0.25) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-14 w-14 items-center justify-center">
                <span className="absolute h-14 w-14 animate-ping rounded-full bg-gold/20" />
                <span className="relative flex h-4 w-4 rounded-full bg-gold" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-ivory/70">
              <p className="text-xs uppercase tracking-[0.2em]">Downtown Dubai</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
