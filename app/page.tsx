"use client";

import { useTheme } from "next-themes";
import HeroSection from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <HeroSection />
      <FAQ />
      <CTA />
    </>
  );
}
