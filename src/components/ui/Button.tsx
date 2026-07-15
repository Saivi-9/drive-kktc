import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",

        variant === "primary" &&
          "bg-[#0F4C81] text-white hover:scale-105",

        variant === "secondary" &&
          "bg-[#4E7A52] text-white hover:scale-105",
          
        variant === "outline" &&
            "border border-white text-white hover:bg-white hover:text-slate-900",

        className
      )}
    >
      {children}
    </button>
  );
}