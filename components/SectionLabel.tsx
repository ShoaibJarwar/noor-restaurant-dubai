type Props = {
  children: string;
  tone?: "gold" | "ivory";
  align?: "left" | "center";
};

export default function SectionLabel({
  children,
  tone = "gold",
  align = "left",
}: Props) {
  const color = tone === "gold" ? "text-gold" : "text-ivory/70";
  const justify = align === "center" ? "mx-auto justify-center" : "";

  return (
    <div className={`flex items-center gap-3 ${justify}`}>
      <span className={`h-px w-8 ${tone === "gold" ? "bg-gold" : "bg-ivory/50"}`} />
      <span className={`text-[11px] tracking-[0.28em] uppercase font-medium ${color}`}>
        {children}
      </span>
    </div>
  );
}
