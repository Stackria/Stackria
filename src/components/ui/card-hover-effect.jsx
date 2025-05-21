"use client"

import { cn } from "@/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { outfitRegular, museoReg, outfitLight, outfitSemibold } from "@/app/layout";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-900/[0.15] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  )
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-blue-900/[0.2] group-hover:border-blue-900/[0.3] relative z-0 shadow-sm",
        className,
      )}
    >
      <div className="relative z-0">
        <div className="p-">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn(outfitLight.className, "text-slate-900 font-bold tracking-wide text-[20px] mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn(outfitLight.className, "mt-8 text-slate-800 tracking-wide leading-relaxed text-[15px] xl:text-[16px]", className)}>
      {children}
    </p>
  );
};
