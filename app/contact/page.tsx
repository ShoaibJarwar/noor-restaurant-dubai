import type { Metadata } from "next";
import Image from "next/image";
import { blurDataURL } from "@/lib/blur";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import ReservationForm from "@/components/ReservationForm";
import { openingHours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve a table at NOOR Dubai, or reach our team by phone or email. Downtown Dubai, United Arab Emirates.",
  openGraph: {
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex h-[46vh] min-h-[340px] items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80"
          alt="An elegant table set at NOOR Dubai"
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
            <SectionLabel tone="ivory">Reservations</SectionLabel>
            <h1 className="mt-6 font-display text-5xl text-ivory sm:text-6xl">
              Join Us at the Table
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-24">
          <FadeIn>
            <h2 className="font-display text-3xl text-foreground">NOOR Dubai</h2>
            <div className="mt-8 space-y-7 text-foreground/70">
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
            </div>

            <div className="mt-10 border-t border-foreground/10 pt-8">
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
          </FadeIn>

          <FadeIn delay={1}>
            <ReservationForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
