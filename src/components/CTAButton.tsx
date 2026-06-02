import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary: "bg-brand text-white shadow-glow hover:bg-brand-light",
  outline: "border border-brand/20 bg-white text-brand hover:border-brand hover:bg-brand-tint",
  light: "border border-white/25 bg-white/10 text-white hover:bg-white hover:text-brand",
};

export function CTAButton({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: keyof typeof styles; className?: string }) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`;
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return <a href={href} className={classes}>{children}</a>;
  }
  return <Link href={href} className={classes}>{children}</Link>;
}
