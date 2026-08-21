"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { nav } from "@/lib/data";
import Button from "./Button";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-50 bg-charcoal md:hidden ${
        open
          ? "pointer-events-auto visible"
          : "pointer-events-none invisible"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative flex h-[100dvh] min-h-0 flex-col transition-transform duration-500 ease-out ${
          open ? "translate-y-0" : "-translate-y-4"
        }`}
      >
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between px-5 py-5 sm:px-6">
          <span className="font-display text-xl tracking-[0.2em] text-ivory">
            NOOR
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/10 text-ivory transition-colors duration-300 hover:border-gold/40 hover:text-gold"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </header>

        {/* Navigation */}
        <nav className="min-h-0 flex-1 overflow-y-auto px-6 sm:px-8">
          <div className="flex min-h-full flex-col justify-center py-6 sm:py-10">
            {nav.map((item, i) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between border-b border-ivory/10 py-4 font-display text-[clamp(2rem,9vw,3rem)] leading-tight transition-all duration-300 ${
                    active
                      ? "text-gold"
                      : "text-ivory hover:text-gold"
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 50}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <span>{item.label}</span>

                  <span
                    className={`mr-1 text-sm transition-transform duration-300 ${
                      active
                        ? "translate-x-0 text-gold"
                        : "translate-x-2 text-ivory/30 group-hover:translate-x-0 group-hover:text-gold"
                    }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom CTA */}
        <div className="shrink-0 border-t border-ivory/10 bg-charcoal/95 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 backdrop-blur-sm sm:px-8">
          <Button
            href="/contact"
            variant="solid"
            onClick={onClose}
            className="w-full justify-center py-4"
          >
            Reserve a Table
          </Button>
        </div>
      </div>
    </div>
  );
}
