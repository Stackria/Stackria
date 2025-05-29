import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold } from "@/app/layout";
import { FaCheckCircle } from "react-icons/fa";

export const WhyChooseUs = () => {
  return (
    <section className="py-20 w-full px-4 max-w-6xl mx-auto text-center"  style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className={`${museoReg.className} text-2xl text-slate-800 md:text-4xl font-bold mb-10`}>Why Businesses Choose Stackria</h2>
        <p className={`${outfitRegular.className} max-w-3xl mx-auto mb-12 text-[14px] text-slate-700 px-10`}>
        We start by listening: to your <span className='font-bold text-black'>journey</span>, your <span className='font-bold text-black'>values</span>, your <span className='font-bold text-black'>goals</span>. Then we build a solution that not only looks stunning but works seamlessly for the people who matter most: your <span className='font-bold text-black'>customers</span>.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 text-left p-10">
  {[
    {
      title: "Built Around You",
      desc: "We don’t start with code, we start with conversation. Your goals, your vision, and your audience form the blueprint of everything we build."
    },
    {
      title: "Designed to Connect",
      desc: "It’s not just about looking good, it’s about making people feel something. Every interaction is thoughtfully crafted to build trust and spark engagement."
    },
    {
      title: "Engineered for Growth",
      desc: "We build platforms with tomorrow in mind, flexible, scalable, and ready to evolve alongside your business ambitions and market shifts."
    },
    {
      title: "A Partner in Your Narrative",
      desc: "You’re not just a client, you’re a collaborator. From kickoff to launch (and beyond), we stay close, translating your ideas into digital experiences that matter."
    }
  ].map((item, idx) => (
    <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <div className="flex flex-row gap-2">
        <FaCheckCircle className='text-primary text-2xl'/>
        <h3 className={`${outfitRegular.className} font-semibold text-lg text-slate-900 mb-2 -mt-1`}>{item.title}</h3>
      </div>
      <p className={`${outfitRegular.className} text-slate-700 text-[15px] mb-2`}>{item.desc}</p>
    </div>
  ))}
        </div>

      </section>
  )
}
