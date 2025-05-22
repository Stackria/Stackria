"use client"
import Image from 'next/image';
import React from 'react';
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

      {/* Hero */}
      <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center px-0 justify-between mx-auto xl:px-0 xl:py-20 gap-10 md:gap-10 lg:gap-20 xl:gap-0 xl:justify-between xl:-mb-20">  
        <div className="xl:w-[40%] lg:w-[50%] md:w-[40%] md:text-left md:justify-start xl:p-16 xl:pb-0 pt-28 px-5 md:ml-5 xl:mt-5">
          <h1 className={`${outfitSemibold.className} text-left text-slate-900 text-[34px] md:text-[28px] lg:text-[36px] xl:text-[53px]`}>
            Behind Every Great Site is Quiet, Ongoing Care
          </h1>

          <span className={`${outfitLight.className} text-justify text-slate-700 text-[15px] md:text-sm xl:text-[16px] xl:w-[70%]`}>
            Web care isn’t about flashy redesigns. It’s about consistency, stability, and protecting the hard work already done.
          </span>

          <div className="flex justify-start mt-5 md:pb-20">
            <Link
              href="/contact"
              className={`${outfitSemibold.className} rounded-[3px] bg-primary px-5 py-2 text-white text-[15px] md:text-[15px] xl:text-[16px] shadow-lg shadow-blue-500/50 font-bold hover:bg-secondary`}
            >
              Let's Talk About Web Care
            </Link>
          </div>
        </div>

        <div className="xl:w-[60%] lg:w-[50%] md:w-[50%] xl:-mt-20 w-full h-full">
          <Image 
            alt='stackria web care service'
            className='relative xl:h-full xl:w-full w-full h-full md:-mt-[120px] mx-auto xl:-mt-20'
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
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className={`${outfitSemibold.className} text-[34px] md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight text-left xl:text-center xl:w-[60%] mx-auto`}
  >
    Web maintenance is peace of mind delivered quietly, every day.
  </motion.h2>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className={`${outfitLight.className} space-y-6 mb-12 max-w-3xl text-slate-800 text-[15px] md:text-[15px] xl:text-[16px] text-left xl:text-center mx-auto`}
  >
    <motion.p variants={itemVariants}>
      Just like a car needs oil changes, your digital presence needs updates, backups, and occasional problem-solving. That’s where Stackria’s <strong>Web Care</strong> solution comes in.
    </motion.p>

    <motion.p variants={itemVariants}>
      From plugin updates to uptime monitoring, we handle the routine so your team can stay focused on what matters—running your business.
    </motion.p>
  </motion.div>

  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="max-w-3xl mx-auto text-left xl:text-center"
  >
    <motion.h3
      variants={itemVariants}
      className={`${outfitSemibold.className} text-2xl md:text-3xl font-semibold text-slate-900 mb-6`}
    >
      What We Handle (So You Don’t Have To):
    </motion.h3>

    <motion.ul
      variants={containerVariants}
      className="space-y-4 text-[15px] md:text-[15px] xl:text-[16px]"
    >
      {[
        "Core and plugin updates",
        "Site speed and performance checks",
        "Broken link monitoring and error resolution",
        "Backups and basic security sweeps",
      ].map((item, idx) => (
        <motion.li
          key={idx}
          variants={itemVariants}
          className={`${outfitLight.className} flex items-start text-gray-800 hover:text-primary transition-colors cursor-pointer justify-start xl:justify-center`}
        >
          <FaCheckCircle className="text-primary w-3 h-3 mt-1 mr-3 flex-shrink-0" />
          <span className="font-medium text-left xl:text-center">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
      </div>


      {/* Features*/}
      <div className="bg-slate-100 mt-20 xs:mx-auto xl:py-20">
        <div className="bg-slate-100 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <h2 className={`${outfitSemibold.className} text-[34px] md:text-4xl text-slate-900 mb-6 xl:text-center`}>
            Web Care That Grows With You
          </h2>

          <p className={`${outfitLight.className} text-slate-800 mb-12 max-w-3xl text-[15px] md:text-[15px] xl:text-[16px] xl:mx-auto xl:text-center xl:w-[50%]`}>
            Your digital presence deserves more than occasional check-ins. 
            <br></br>At Stackria, our Web Care solutions are designed to protect, improve, and evolve your web-based experience.
          </p>

          {/* Web Care Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                title: "Security Monitoring",
                desc: "We keep your platform safe with real-time vulnerability tracking, malware scans, and proactive security patches."
              },
              {
                title: "Performance Optimization",
                desc: "We fine-tune speed, responsiveness, and efficiency to make sure your web-based solution always delivers a smooth experience."
              },
              {
                title: "Content Updates",
                desc: "Need a change in text, images, or layout? We handle regular content tweaks so you never fall behind."
              },
              {
                title: "Plugin & Software Updates",
                desc: "We routinely update frameworks, plugins, and dependencies—so your tech stack stays reliable and secure."
              },
              {
                title: "Backups & Restore Points",
                desc: "Automated daily backups with one-click restores keep your data protected in case of any mishap."
              },
              {
                title: "Monthly Health Reports",
                desc: "You’ll receive clear, human-friendly reports covering site uptime, traffic insights, updates, and more."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <FaCheckCircle className="text-primary text-xl mt-1" />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>
                    {item.title}
                  </h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[14px] xl:text-[15px]`}>
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
            Why Clients Trust Stackria with Their Sites
          </h2>
          <p className={`${outfitLight.className} text-slate-800 text-left text-[16px] xs:text-[15px] xl:px-20 md:text-[16px] xl:text-[15px] leading-relaxed mb-10 xl:w-[60%] xl:text-center xl:mx-auto`}>
            Our goal isn’t to overpromise. It’s to <span className='font-bold'>deliver quietly, consistently, and with care</span>. Our clients know their digital presence is in good hands—without needing to ask.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-10 xl:px-0">
            {[
              { title: "Routine Maintenance", text: "We handle monthly updates and critical patches without disrupting your team." },
              { title: "Human Support", text: "No tickets. Just direct contact when something breaks or needs attention." },
              { title: "Scalable Plans For You", text: "As your platform grows, we adjust care plans to fit your needs." },
              { title: "Emergency Fixes", text: "When things go sideways, we’re just one call away from triage and resolution." },
              { title: "Performance Monitoring", text: "We continuously track uptime, speed, and performance to catch issues before they escalate." },
              { title: "Security Hardening", 
                text: "From firewalls to vulnerability scans, we actively secure your platform against evolving threats." }

            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <FaCheckCircle className='text-primary text-[20px]' />
                <div>
                  <h3 className={`${outfitSemibold.className} text-slate-900 text-[16px] md:text-[18px]`}>{item.title}</h3>
                  <p className={`${outfitLight.className} text-slate-700 text-[14px] md:text-[16px]`}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/contact">
              <button className={`${outfitSemibold.className} bg-primary text-white rounded px-6 py-3 text-[15px] shadow-lg hover:bg-secondary`}>
                Let’s Discuss Your Site
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <Testimonials/>
      <div className='bg-white py-10 xl:py-20' style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* Process and Testimonial */}
        <Process/>
        <TypewriterEffect/>
      </div>
    </section>
  );
};

export default page;
