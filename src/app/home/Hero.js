"use client";
import React from "react";
import { HeroParallax } from "@/app/home/hero-parallax";
import hero3 from '@/assets/hero3.png'
import hero1 from '@/assets/hero1.png'
import hero2 from '@/assets/hero2.png'
import hero4 from '@/assets/hero4.png'
import hero5 from '@/assets/hero5.png'

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  
  {
    title: "Bill Me",
    link: "https://billapps.netlify.app",
    thumbnail:
    hero4,
  },
  {
    title: "ES Broker",
    link: "https://realestatebroker.netlify.app/",
    thumbnail:
    hero2,
  },

  {
    title: "2P stores",
    link: "https://2pstores.com",
    thumbnail:
    hero5,
  },
  
  {
    title: "Zamani Luxuries",
    link: "https://zamaniluxuries.com/",
    thumbnail:
    hero3,
  },
  
  
];
