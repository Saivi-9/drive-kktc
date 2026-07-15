import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function SectionTitle({ title, subtitle, children }: Props) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-[#E6C68A]">{subtitle}</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          {title}
        </h2>
      </div>
      {children ? <div className="text-sm text-slate-600">{children}</div> : null}
    </div>
  );
}
