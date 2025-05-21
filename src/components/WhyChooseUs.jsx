import React from 'react'
import { outfitRegular, museoReg, outfitLight, outfitSemibold } from "@/app/layout";
import { FaCheckCircle } from "react-icons/fa";

export const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-center"  style={{ backgroundImage: 'url(/images/bg-cta0.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className={`${museoReg.className} text-2xl text-slate-800 md:text-4xl font-bold mb-10`}>Why Businesses Choose Stackria</h2>
        <p className={`${outfitRegular.className} max-w-3xl mx-auto mb-12 text-[14px] text-slate-700 px-10`}>
        We start by listening: to your <span className='font-bold text-black'>journey</span>, your <span className='font-bold text-black'>values</span>, your <span className='font-bold text-black'>goals</span>. Then we build a solution that not only looks stunning but works seamlessly for the people who matter most: your <span className='font-bold text-black'>customers</span>.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 text-left p-10">
          {[
            { title: "Built Around You", desc: "Every platform starts with listening to your journey, your users, your goals." },
            { title: "Designed to Connect", desc: "Each interaction tells your story and invites your customers in." },
            { title: "Engineered for Growth", desc: "Scalable foundations that evolve as your business expands." },
            { title: "A Partner in Your Narrative", desc: "We work alongside you to turn ideas into reality." }
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
