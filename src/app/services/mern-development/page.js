
import Image from 'next/image'
import React from 'react'
import Script from 'next/script';
import { outfitRegular, museoReg, outfitLight, outfitSemibold, museoBold } from "@/app/layout";
import Link from 'next/link';
import CardHover from "@/components/CardHover.jsx"
import TypewriterEffect from '@/components/ui/typewriter'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

export async function generateMetadata() {
  const title = 'MERN Stack Web Solutions | Stackria';
  const description =
    'Get robust, full-stack web-based solutions built with MongoDB, Express, React, and Node.js.';
  const url = 'https://stackria.com/services/mern-development';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Stackria',
      images: [
        { url: '/images/og-mern-development.jpg', width: 1200, height: 630, alt: 'MERN Stack Solutions by Stackria' },
        { url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Stackria Web-Based Solutions' },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-mern-development.jpg', '/images/og-default.jpg'],
    },
  };
}


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const page = () => {
  return (
    <section className="px-0">

      <Script
        id="jsonld-mern"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "MERN Stack Development",
            provider: {
              "@type": "Organization",
              name: "Stackria",
              url: "https://stackria.com",
            },
            description: "Stackria builds dynamic full-stack web-based solutions using MongoDB, Express, React, and Node.",
            areaServed: {
              "@type": "Place",
              name: "Global",
            },
          }),
        }}
      />


      {/* Hero */}
      <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center px-0 justify-between mx-auto xl:px-0 xl:py-20 gap-10 md:gap-10 lg:gap-20 xl:gap-0 xl:justify-between xl:-mb-20">  
        <div className="xl:w-[40%] lg:w-[50%] md:w-[40%] md:text-left md:justify-start xl:p-16 xl:pb-0 pt-28 px-5 md:ml-5 xl:mt-5 md:px-2 2xl:-ml-5 2xl:-mt-20">
          <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] md:text-[28px] lg:text-[36px] xl:text-[58px]`}>
            Build Smarter, Not Just Faster With the MERN Stack
          </h1>

          <span className={`${outfitLight.className} xl:text-justify text-justify text-slate-700 text-[15px] xs:text-[15px] md:text-[15px] xl:text-[16px] xl:w-[70%] md:text-justify`}>
            Stackria helps businesses create stable, modern web-based platforms using the power of MongoDB, Express, React, and Node—without overengineering.
          </span>

          <div className="flex justify-start md:justify-start mt-5 md:pb-20">
            <Link
              href="/contact"
              className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[15px] md:text-[15px] xl:text-[16px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
            >
              Let’s Talk MERN
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="xl:w-[60%] lg:w-[50%] md:w-[50%] xl:-mt-20 w-full h-full">
          <Image 
              alt='stackria web development services'
              className='relative xl:h-full xl:w-full w-full h-full md:-mt-[120px] mx-auto 2xl:-mt-40'
              src="/images/service-img4.png"
              width={800}
              height={600}
              priority
          />
        </div>
      </div>

      {/* Intro */}
      <section
        className="bg-white py-20 px-6 md:px-12 lg:px-24 mx-auto xl:py-20"
        style={{
          backgroundImage: 'url(/images/bg-cta0.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2
          className={`${outfitSemibold.className} text-[34px] md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-left xl:text-center`}
        >
          Powerful MERN Solutions, Tailored to Your Vision.
        </h2>

        <div
          className={`${outfitLight.className} space-y-6 mb-12 max-w-3xl text-slate-800 text-[15px] xs:text-[15px] xl:text-[16px] text-left xl:text-center mx-auto`}
        >
          <p>
            At Stackria, we build fast, scalable, and maintainable web applications using the MERN stack—MongoDB, Express, React, and Node.js. We transform your ideas into seamless digital experiences.
          </p>
          <p>
            Whether it’s a custom web app, a complex dashboard, or an interactive user interface, our MERN solutions are designed for flexibility, performance, and growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-left xl:text-center">
          <h3
            className={`${outfitSemibold.className} text-[34px] md:text-3xl font-semibold text-slate-900 mb-6 text-left xl:text-center`}
          >
            Our MERN Development Focus
          </h3>

          <ul className="space-y-4 xs:text-[15px]">
            {[
              "Custom web apps built for speed and scalability",
              "Responsive React frontends for engaging user experiences",
              "Robust backend APIs with Node.js and Express",
              "Flexible data management using MongoDB",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`${outfitLight.className} flex items-start text-slate-800 justify-start xl:justify-center text-left xl:text-center`}
              >
                <FaCheckCircle className="text-primary w-3 h-3 mt-1 mr-3 flex-shrink-0" />
                <span className="text-[15px] xl:text-[16px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
 


      {/* Features */}
      <div className="bg-slate-100 mt-20 xl:py-20">
        <div className="py-20">
          <div>
            <h1 className={`${outfitSemibold.className} text-slate-900 text-center text-[34px] xl:text-[42px] pb-5 font-bold`}>
              MERN Stack Solutions That Don’t Overpromise
            </h1>
            <p className={`${outfitLight.className} text-center text-slate-900 text-[15px] xl:text-[16px] xl:w-[50%] xl:mx-auto px-10 xl:text-center`}>
              At Stackria, we help you build flexible platforms that evolve with your users—not fragile prototypes that break at scale.
            </p>
          </div>
          <CardHover/>
        </div>

        {/* Reasons */}
        <div className="bg-white py-20 px-5 xl:px-10 md:px-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className={`${outfitSemibold.className} text-slate-900 text-[34px] font-bold md:text-[32px] xl:text-[42px] text-left mb-6 xl:text-center`}>
              Our Approach to MERN Development
            </h2>
            <p className={`${outfitLight.className} text-slate-800 text-left text-[15px] xl:px-20 md:text-[16px] xl:text-[16px] leading-relaxed mb-10 xl:w-[60%] xl:text-center xl:mx-auto`}>
              We don’t overpromise. We don’t oversell. We just build what’s necessary—and make sure it works well, reads clean, and scales right.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10 xl:px-0 xs:text-[15px]">
              {[
                {
                  title: "Pragmatic Development",
                  desc: "We apply structure only where it’s needed. You get fast builds without unnecessary complexity."
                },
                {
                  title: "Component-Driven UIs",
                  desc: "Reusable React components let us scale your app’s design system with precision."
                },
                {
                  title: "API-First Thinking",
                  desc: "We design REST or GraphQL APIs that make your data accessible and secure."
                },
                {
                  title: "Support You Can Rely On",
                  desc: "Stackria sticks around to support, extend, and maintain what we build without locking you in."
                },
                {
                  title: "Scalable Architecture",
                  desc: "We build with the future in mind ready to handle growth, feature rollouts, and user demand without rewrites."
                },
                {
                  title: "Built for Real Users",
                  desc: "Every line of code is written with your end-users in mind prioritizing performance, accessibility, and clarity."
                },
              ].map((reason, i) => (
                <div className="flex items-start gap-4" key={i}>
                  <FaCheckCircle className='text-primary text-[20px]' />
                  <div>
                    <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                      {reason.title}
                    </h3>
                    <p className={`${outfitLight.className} text-slate-700 text-[15px] xl:text-[16px]`}>
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <button className={`${outfitSemibold.className} bg-primary text-white rounded px-6 py-3 text-[15px] shadow-lg hover:bg-secondary`}>
                  Build It Right, From the Start
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Testimonials/>

        <div className='bg-white py-10 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Process/>
          <TypewriterEffect/>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "MERN Stack Development",
            description: "Get powerful, scalable web applications built using MongoDB, Express, React, and Node.js. Stackria specializes in full-stack JavaScript development.",
            brand: {
              "@type": "Organization",
              name: "Stackria",
              url: "https://stackria.com",
              logo: "https://stackria.com/logo.png"
            },
            url: "https://stackria.com/services/mern-development",
            image: "https://stackria.com/images/og-mern-development.jpg",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "0.00",
              availability: "https://schema.org/InStock",
              url: "https://stackria.com/contact"
            }
          })
        }}
      />

    </section>
  )
}

export default page;
