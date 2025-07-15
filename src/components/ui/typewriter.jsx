"use client"
import { cn } from "@/utils"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import {styles} from '@/constants/style'
import { outfitRegular, museoReg, outfitLight, outfitSemibold } from "@/app/layout";
import FancyButton from "@/components/ui/FancyButton"

import { useEffect } from "react"

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
    const wordsArray = words.map((word) => ({
      ...word,
      text: word.text.split(""),
    }))
  
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
  
    useEffect(() => {
      if (isInView) {
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
          },
        )
      }
    }, [isInView, animate])
  
    const renderWords = () => {
      return (
        <motion.div ref={scope} className="inline">
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          ))}
        </motion.div>
      )
    }
  
    return (
      <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
        {renderWords()}
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
        ></motion.span>
      </div>
    )
  }
  
  export const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
    const wordsArray = words.map((word) => ({
      ...word,
      text: word.text.split(""),
    }))
  
    const renderWords = () => {
      return (
        <div>
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={cn(`dark:text-white text-black`, word.className)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          ))}
        </div>
      )
    }
  
    return (
      <div className={cn("flex space-x-1 my-6", className)}>
        <motion.div
          className="overflow-hidden pb-2"
          initial={{
            width: "0%",
          }}
          whileInView={{
            width: "fit-content",
          }}
          transition={{
            duration: 2,
            ease: "linear",
            delay: 1,
          }}
        >
          <div
            className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
            style={{
              whiteSpace: "nowrap",
              fontSize: "16px",
            }}
          >
            {renderWords()}{" "}
          </div>{" "}
        </motion.div>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className={cn("block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500", cursorClassName)}
        ></motion.span>
      </div>
    )
  }

  export default function TypewriterEffectSmoothDemo() {
    const words = [
      {
        text: "Build",
      },
      {
        text: "awesome",
      },
      {
        text: "web-solutions",
      },
      {
        text: "with",
      },
      {
        text: "Stackria.",
        className: "text-primary dark:text-blue-500",
      },
    ]
  
    return (
      <div className="flex flex-col items-center justify-center h-[40rem] " style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className={`${museoReg.className}text-neutral-600 font-bold dark:text-neutral-200 text-[36px] xl:text-[25px] sm:text-base px-10`}>
        Ready to Build the Next Chapter of Your Business Story?
        </p>
        <TypewriterEffectSmooth words={words} className={`${outfitSemibold.className} text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <FancyButton/>
        </div>
      </div>
    )
  }


