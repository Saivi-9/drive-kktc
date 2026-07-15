import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </>
  );
}
