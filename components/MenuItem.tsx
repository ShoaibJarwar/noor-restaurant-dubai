import { Dish } from "@/lib/data";

export default function MenuItem({ item }: { item: Dish }) {
  return (
    <div className="group flex items-start gap-4 py-6 border-b border-foreground/10">
      <div className="flex-1">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-xl text-foreground">{item.name}</h3>
          <span className="h-px flex-1 border-b border-dotted border-foreground/25 translate-y-[-4px]" />
          <span className="whitespace-nowrap font-sans text-sm text-gold">
            {item.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-foreground/55">
          {item.description}
        </p>
      </div>
    </div>
  );
}
