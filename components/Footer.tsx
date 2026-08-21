import Link from "next/link";
import { nav, openingHours } from "@/lib/data";
import NewsletterForm from "./NewsletterForm";

const socials = [
  { label: "Instagram", short: "IG" },
  { label: "Facebook", short: "FB" },
  { label: "TikTok", short: "TT" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-3xl tracking-[0.15em]">NOOR</p>
            <p className="mt-3 text-sm text-ivory/60">
              Contemporary Arabian Dining
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-ivory/20 text-[10px] tracking-wide text-ivory/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Navigate</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/75 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Visit</p>
            <div className="mt-5 space-y-3 text-sm text-ivory/75">
              <p>Downtown Dubai<br />Dubai, United Arab Emirates</p>
              {openingHours.map((h) => (
                <p key={h.days}>
                  {h.days}
                  <br />
                  {h.hours}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
              Join the NOOR Table
            </p>
            <p className="mt-5 text-sm text-ivory/75">
              Seasonal menus, private events and stories from our kitchen.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 NOOR Dubai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ivory transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
