import Link from "next/link";
import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "solid" | "outline-light" | "outline-dark";
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type Props = ButtonAsLink | ButtonAsButton;

const variants: Record<string, string> = {
  solid:
    "bg-gold text-charcoal hover:bg-gold-light border border-gold hover:border-gold-light",
  "outline-light":
    "border border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal",
  "outline-dark":
    "border border-foreground/40 text-foreground hover:bg-foreground hover:text-background",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
}: Props) {
  const classes = `group inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-sans font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
