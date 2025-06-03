"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { museo, museoReg, outfitLight, outfitRegular, outfitSemibold } from "../layout";
import  {outfit} from "../layout";
import {styles} from '@/constants/style'

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div
      className="h-[50vh] Scrn375:h-[100vh] xl:h-[260vh] 2xl:h-[175vh]  bg-[#0ca9f2da] py-32 overflow-hidden antialiased relative flex flex-col self-auto"
      style={{
        backgroundImage: 'url(/images/bg-hero.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}
    >
      <Header />
      {/* <div>
        <div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
      </div> */}
    </div>
  );
};


export const Header = () => {
  return (
    (<div
          className="max-w-7xl relative mx-auto py-2 md:py-0 px-2 mt-10 w-full xl:w-[50%] left-0 top-0 text-center xl:px-10 xl:mt-40 z-100">
            <h1 className={`${outfitSemibold.className} text-[36px] leading-10 md:text-[50px] font-bold text-white dark:text-white md:leading-[70px] md:-mt-0 md:z-100 md:px-10`}>
            Customer-focused Web
            Solutions
            For Startups & Businesses
            </h1>
           <div class="md:w-[50%] mx-auto">
             <p className={`${outfitLight.className} text-[14px] md:text-[15px] xl:text-[16px] text-secondary dark:text-neutral-200 xl:px-40 px-5 pb-10`}>
            We craft custom web solutions that make your customers the hero, empowering startups and SMEs to thrive by providing the perfect web experience
            </p>
           </div>

            {/* Get a quote button */}
            <div className="">
              <Link href='/contact' className={`${outfitRegular.className} text-[14px] md:text-[15px] xl:text-[16px] rounded-md shadow-md shadow-slate-800 bg-white text-primary px-5 py-3 black mt-10 font-bold hover:bg-secondary hover:text-white `}>Get A Quote In 12 Hours</Link>
            </div>
        </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0">
      {/* <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 -mt-40"
          alt={product.title} />
      </Link> */}
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
