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
    title: "ActivEasy",
    link: "https://zamaniluxuries.com",
    thumbnail:  hero1,
  },
  {
    title: "Zamani Luxuries",
    link: "https://cursor.so",
    thumbnail:
    hero3,
  },
  {
    title: "Bill Me",
    link: "https://userogue.com",
    thumbnail:
    hero2,
  },

  {
    title: "2P stores",
    link: "https://2pstores.com",
    thumbnail:
    hero5,
  },
  

  
  
];
