"use client";

import { useEffect, useRef, useState } from "react";
import { MenuCategory } from "@/lib/data";

export default function MenuCategoryNav({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = categories
      .map((cat) => document.getElementById(cat.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-140px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const activeLink = linkRefs.current[active];
    activeLink?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="sticky top-[64px] z-30 border-b border-foreground/10 bg-background/95 backdrop-blur-sm" style={{paddingTop:"10px"}}>
      <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6 py-4 lg:px-10" >
        {categories.map((cat) => (
          <a
            key={cat.id}
            ref={(el) => {
              linkRefs.current[cat.id] = el;
            }}
            href={`#${cat.id}`}
            aria-current={active === cat.id ? "true" : undefined}
            className={`whitespace-nowrap text-[11px] uppercase tracking-[0.2em] transition-colors ${
              active === cat.id ? "text-gold" : "text-foreground/55 hover:text-gold"
            }`}
          >
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}
