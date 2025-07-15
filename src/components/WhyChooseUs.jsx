import React from 'react';
import { outfitRegular, outfitSemibold } from "@/app/layout";
import { FaCheckCircle } from "react-icons/fa";

export const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 w-full max-w-7xl mx-auto text-center">
      <div>
        <h2 className={`${outfitSemibold.className} text-2xl md:text-[46px] text-slate-800 font-bold mb-6`}>
          Why Businesses Choose Stackria
        </h2>
        <p className={`${outfitRegular.className} text-slate-700 max-w-3xl mx-auto text-[15px] md:text-[17px] mb-14 px-6`}>
          We start by listening: to your <span className="font-bold text-black">journey</span>, your <span className="font-bold text-black">values</span>, your <span className="font-bold text-black">goals</span>. Then we build a solution that not only looks stunning but works seamlessly for the people who matter most: your <span className="font-bold text-black">customers</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
        {[
          {
            title: "Built Around You",
            desc: "We don’t start with code, we start with conversation. Your goals, your vision, and your audience form the blueprint of everything we build.",
          },
          {
            title: "Designed to Connect",
            desc: "It’s not just about looking good, it’s about making people feel something. Every interaction is thoughtfully crafted to build trust and spark engagement.",
          },
          {
            title: "Engineered for Growth",
            desc: "We build platforms with tomorrow in mind flexible, scalable, and ready to evolve alongside your business ambitions and market shifts.",
          },
          {
            title: "A Partner in Your Narrative",
            desc: "You’re not just a client, you’re a collaborator. From kickoff to launch (and beyond), we stay close, translating your ideas into digital experiences that matter.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-start p-6 min-h-[170px]"
          >
            <FaCheckCircle className="text-primary text-2xl mb-3"/>
            <h3 className={`${outfitSemibold.className} text-lg md:text-xl text-slate-800 mb-2`}>
              {item.title}
            </h3>
            <p className={`${outfitRegular.className} text-sm md:text-base text-slate-600 leading-relaxed`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
