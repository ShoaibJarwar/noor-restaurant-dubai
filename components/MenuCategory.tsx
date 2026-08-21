import { MenuCategory as MenuCategoryType } from "@/lib/data";
import MenuItem from "./MenuItem";
import FadeIn from "./FadeIn";

export default function MenuCategory({ category }: { category: MenuCategoryType }) {
  return (
    <section id={category.id} className="scroll-mt-32 py-14 first:pt-0">
      <FadeIn>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-4xl text-gold/40">
            {String(category.items.length).padStart(2, "0")}
          </span>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            {category.label}
          </h2>
        </div>
      </FadeIn>
      <div className="mt-8">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
