"use client";
import Navbar from "@/components/navBar/Navbar";
import Footer from "@/components/footer/Footer";

export default function LayoutShell({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
