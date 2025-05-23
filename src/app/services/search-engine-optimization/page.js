'use client'
import Image from 'next/image'
import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold, museoBold } from "@/app/layout";
import { styles } from '@/constants/style';
import imgOne from '@/assets/service-img5.png';
import Link from 'next/link';
import CardHover from "@/components/CardHover.jsx";
import TypewriterEffect from '@/components/ui/typewriter';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

export async function generateMetadata() {
  return {
    title: 'Search Engine Optimization (SEO) | Stackria',
    description:
      'Attract organic traffic with strategy-first SEO. Stackria optimizes your web-based solutions for visibility, performance, and conversion.',
    openGraph: {
      title: 'Search Engine Optimization (SEO) | Stackria',
      description:
        'Attract organic traffic with strategy-first SEO. Stackria optimizes your web-based solutions for visibility, performance, and conversion.',
      url: 'https://stackria.com/services/seo',
      siteName: 'Stackria',
      images: [
        {
          url: '/images/og-seo.jpg',
          width: 1200,
          height: 630,
          alt: 'SEO by Stackria',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Search Engine Optimization (SEO) | Stackria',
      description:
        'Attract organic traffic with strategy-first SEO. Stackria optimizes your web-based solutions for visibility, performance, and conversion.',
      images: ['/images/og-seo.jpg'],
    },
  };
}

const features = [
  "Test core features with early adopters",
  "Collect valuable feedback before scaling",
  "Get investor interest with something tangible",
  "Save time and money by building only what matters now",
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const page = () => {
    return (
        <section className="px-0">
            {/* Hero */}
            <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center px-0 justify-between mx-auto xl:px-0 xl:py-20 gap-10 md:gap-10 lg:gap-20 xl:gap-0 xl:justify-between xl:-mb-20">  
                <div className="xl:w-[40%] lg:w-[50%] md:w-[40%] md:text-left md:justify-start xl:p-16 xl:pb-0 pt-28 px-5 md:ml-5 xl:-mt-36 md:px-2 2xl:-ml-5 2xl:-mt-20">
                    <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] md:text-[28px] lg:text-[36px] xl:text-[53px] `}>
                        SEO that’s Built to Be Believable
                    </h1>
                    <span className={`${outfitLight.className} text-slate-700 text-[15px] xl:text-[16px] xl:w-[70%] text-justify`}>
                        At Stackria, we don’t chase algorithms. We craft human-first SEO strategies that tell stories, build trust, and grow visibility without the fluff.
                    </span>
                <div className="flex justify-start mt-5 md:pb-20">
                    <Link href="/contact" className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[15px] md:text-[15px] xl:text-[16px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}>
                    Let's Talk SEO
                    </Link>
                </div>
                </div>

                <div className="xl:w-[60%] lg:w-[50%] md:w-[50%] xl:-mt-20 w-full h-full">
                    <Image 
                        alt='stackria web development services'
                        className='relative xl:h-full xl:w-full w-full h-full md:-mt-[120px] mx-auto 2xl:-mt-40'
                        src={imgOne} 
                        width={800} 
                        height={600} 
                        priority 
                    />
                </div>
            </div>

            {/* Intro */}
            <div
                className="bg-white py-20 px-6 md:px-12 lg:px-24 mx-auto xl:py-20 text-left xl:text-center xl:w-full xl:mx-auto"
                style={{
                    backgroundImage: 'url(/images/bg-cta0.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                <h2
                    className={`${outfitSemibold.className} text-[34px] md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-left xl:text-center xl:w-[60%] mx-auto`}
                >
                    Web maintenance is peace of mind delivered quietly, every day.
                </h2>

                <div
                    className={`${outfitLight.className} space-y-6 mb-12 max-w-3xl text-slate-800 text-[15px] md:text-[15px] xl:text-[16px] text-left xl:text-center mx-auto`}
                >
                    <p>
                    Just like a car needs oil changes, your digital presence needs updates, backups, and occasional problem-solving. That’s where Stackria’s <strong>Web Care</strong> solution comes in.
                    </p>

                    <p>
                    From plugin updates to uptime monitoring, we handle the routine so your team can stay focused on what matters—running your business.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto text-left xl:text-center">
                    <h3
                    className={`${outfitSemibold.className} text-2xl md:text-3xl font-semibold text-slate-900 mb-6`}
                    >
                    What We Handle (So You Don’t Have To):
                    </h3>

                    <ul className="space-y-4 text-[15px] md:text-[15px] xl:text-[16px]">
                    {[
                        "Core and plugin updates",
                        "Site speed and performance checks",
                        "Broken link monitoring and error resolution",
                        "Backups and basic security sweeps",
                    ].map((item, idx) => (
                        <li
                        key={idx}
                        className={`${outfitLight.className} flex items-start text-gray-800 hover:text-primary transition-colors cursor-pointer justify-start xl:justify-center`}
                        >
                        <FaCheckCircle className="text-primary w-3 h-3 mt-1 mr-3 flex-shrink-0" />
                        <span className="font-medium text-left xl:text-center">{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>


            {/* Features */}
            <div className="bg-slate-100 mt-20 xs:mx-auto xl:py-20">
                {/* Card */}
                <div className="bg-slate-100 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                    <h2 className={`${outfitSemibold.className} text-[34px] md:text-4xl text-slate-900 mb-6 xl:text-center`}>
                        SEO with a Human Touch
                    </h2>

                    <p className={`${outfitLight.className} text-slate-800 mb-12 max-w-3xl text-[15px] xl:text-[16px] xl:mx-auto xl:text-center xl:w-[50%]`}>
                        We prioritize clarity, accessibility, and storytelling in every SEO decision because algorithms may evolve, but people always seek value.
                    </p>

                    {/* Card details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                        {
                            title: "On-Page Optimization",
                            desc: "We optimize your meta titles, content, images, and structure to align with search intent and user experience."
                        },
                        {
                            title: "Technical SEO",
                            desc: "From site speed to crawlability, we ensure your web-based solution is built on a solid SEO foundation."
                        },
                        {
                            title: "Keyword Research",
                            desc: "We identify high-impact, low-competition keywords that align with your audience’s needs and search behavior."
                        },
                        {
                            title: "Content Strategy",
                            desc: "We help shape your blog and landing pages around value-driven, search-friendly content that converts."
                        },
                        {
                            title: "Local SEO",
                            desc: "Whether you're global or local-first, we help you get found in your geographic area with accurate listings and optimizations."
                        },
                        {
                            title: "Ongoing SEO Audits",
                            desc: "SEO is not a one-time fix. We monitor, tweak, and adapt your strategy as search trends evolve."
                        }
                        ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <FaCheckCircle className="text-primary text-xl mt-1" />
                            <div>
                            <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                                {item.title}
                            </h3>
                            <p className={`${outfitLight.className} text-slate-700 text-[15px] xl:text-[16px]`}>
                                {item.desc}
                            </p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                
            </div>
            
            {/* Reasons */}
            <div className="bg-white py-20 px-5 xl:px-10 md:px-10">
                <div className="max-w-5xl mx-auto text-center xl:py-20">
                    <h2 className={`${outfitSemibold.className} text-slate-900 text-[38px] font-bold md:text-[32px] xl:text-[42px] text-left mb-6 xl:text-center`}>
                    Why Choose Stackria for SEO?
                    </h2>
                    <p className={`${outfitLight.className} text-slate-800 text-left text-[15px] xs:text-[15px] xl:px-20 md:text-[16px] xl:text-[16px] leading-relaxed mb-10 xl:mx-auto xl:text-center xl:w-[60%]`}>
                    Stackria helps brands communicate with clarity, publish with purpose, and rise organically in ways that feel natural not forced.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10 xl:px-0">
                    {[{
                        title: "Content with Intent",
                        desc: "We help you publish thoughtful content that meets audience needs, not just search bots."
                    }, {
                        title: "Search with Purpose",
                        desc: "We combine SEO best practices with real-world business understanding."
                    }, {
                        title: "Audit-Driven Strategies",
                        desc: "Before we optimize, we listen—to your goals, your gaps, and your growth points."
                    },
                    {
                        title: "Clarity over Clickbait",
                        desc: "We write for humans first — building trust through transparency, not tricks."
                        },
                        {
                        title: "Sustainable Growth",
                        desc: "Our strategies aim for long-term visibility, not short-term spikes or hacks."
                        },
                        {
                        title: "Local & Global Reach",
                        desc: "From neighborhood stores to digital-first brands, we help you be found where it matters."
                    }].map((point, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                        <FaCheckCircle className='text-primary text-[20px]' />
                        <div>
                            <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>{point.title}</h3>
                            <p className={`${outfitLight.className} text-slate-700 text-[15px] xl:text-[16px]`}>{point.desc}</p>
                        </div>
                        </div>
                    ))}
                    </div>

                    <div className="mt-10">
                    <Link href="/contact">
                        <button className={`${outfitSemibold.className} bg-primary text-white rounded px-6 py-3 text-[15px] shadow-lg hover:bg-secondary`}>
                        Get Started with SEO
                        </button>
                    </Link>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <Testimonials/>

            {/* CTA and Process */}
            <div className='bg-white py-10 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Process/>
            <TypewriterEffect/>
            </div>
        </section>
    );
};

export default page;
