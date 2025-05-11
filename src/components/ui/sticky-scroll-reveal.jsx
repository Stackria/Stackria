"use client"
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll, motion } from "framer-motion"
import { cn } from "@/utils"
import Image from "next/image"

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = ["var(--slate-900)", "var(--black)", "var(--neutral-900)"]
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-5"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn("hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden", contentClassName)}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}

const content = [
  {
    title: "Discovery & Planning",
    description:
      "We analyze your business needs, define project goals, and create a roadmap for success.",
    content: (
      <div className="text-[20px] h-full w-full bg-[linear-gradient(to_bottom_right,var(--blac-500),var(--emerald-500))] flex items-center justify-center text-white">
       Phase 1
      </div>
    ),
  },
  {
    title: "Design & Development ",
    description:
      "We craft intuitive UI/UX wireframes and prototypes, ensuring a visually appealing and user-friendly experience then our team codes a fast, scalable, and responsive solution using modern web technologies",
    content: (
      <div className="text-[20px] h-full w-full  flex items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
        Phase 2
      </div>
    ),
  },
  {
    title: "Testing & Optimization",
    description:
      "We rigorously test for performance, security, and responsiveness to ensure flawless functionality.",
    content: (
      <div className="text-[20px] h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Phase 3
      </div>
    ),
  },
  {
    title: "Launch & Deployment",
    description:
      "After final refinements, we deploy the solution with seamless integration and scalability in mind.",
    content: (
      <div className="text-[20px] h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Phase 4
      </div>
    ),
  },
  {
    title: " Ongoing Support & Growth",
    description:
      "We provide continuous support, updates, and optimization to help your business scale effortlessly.",
    content: (
      <div className="text-[20px] h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Phase 5
      </div>
    ),
  },
]

export default function StickyScrollRevealDemo() {
  return (
    <div className="py-10">
      <StickyScroll content={content} />
    </div>
  )
}

