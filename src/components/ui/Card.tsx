import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-white shadow-md p-6",
        className
      )}
    >
      {children}
    </div>
  );
}