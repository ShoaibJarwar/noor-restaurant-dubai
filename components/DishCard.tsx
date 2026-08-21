import Image from "next/image";
import { Dish } from "@/lib/data";

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-light">
        {dish.image && (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl text-foreground">{dish.name}</h3>
        <span className="whitespace-nowrap text-sm tracking-wide text-gold">
          {dish.price}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/60">
        {dish.description}
      </p>
    </div>
  );
}
