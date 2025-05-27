"use client";
import React from "react";
import { HeroParallax } from "@/app/home/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Bill Me",
    link: "https://billapps.netlify.app",
    thumbnail: "/images/hero4.png",
  },
  {
    title: "ES Broker",
    link: "https://realestatebroker.netlify.app/",
    thumbnail: "/images/hero2.png",
  },
  {
    title: "2P stores",
    link: "https://2pstores.com",
    thumbnail: "/images/hero5.png",
  },
  {
    title: "Zamani Luxuries",
    link: "https://zamaniluxuries.com/",
    thumbnail: "/images/hero3.png",
  },
];