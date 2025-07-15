import Image from 'next/image';
import React from 'react';
import { outfitRegular, outfitSemibold } from "@/app/layout";

export const Performance = () => {
  return (
    <section className="bg-white py-20 px-5">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-0 2xl:px-20">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] xl:w-[40%] xl:ml-5">
          <div className="text-left ">
            <span className={`${outfitSemibold.className} block text-lg md:text-[12px] text-secondary mb-2`}>
              Performance
            </span>
            <h2 className={`${outfitSemibold.className} text-2xl md:text-[56px] text-gray-900 mb-4 leading-tight xl:text-[63px]`}>
              Performance That Powers Results
            </h2>
            <p className={`${outfitRegular.className} text-base md:text-lg text-gray-600 mb-10 leading-relaxed 2xl:w-[90%]`}>
              At Stackria, we don’t just build good websites, we engineer fast, responsive experiences built to perform.
              Test your current site with{' '}
              <a
                href="https://pagespeed.web.dev/"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google PageSpeed Insights
              </a>{' '}
              and see how it compares.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 xl:w-[80%] 2xl:w-[80%]">
            <div>
              <h3 className={`${outfitSemibold.className} text-lg md:text-xl text-gray-900 mb-1`}>
                Optimized Load Times
              </h3>
              <p className={`${outfitRegular.className} text-sm md:text-base leading-relaxed`}>
                Better load times mean reduced bounce rates, improved engagement, and increased conversions across your funnel.
              </p>
            </div>
            <div>
              <h3 className={`${outfitSemibold.className} text-lg md:text-xl text-gray-900 mb-1`}>
                Search-Ready Performance
              </h3>
              <p className={`${outfitRegular.className} text-sm md:text-base leading-relaxed`}>
                Our optimization strategies help improve your SEO and reduce Google Ads costs by boosting your Quality Score.
              </p>
            </div>
            <div>
              <h3 className={`${outfitSemibold.className} text-lg md:text-xl text-gray-900 mb-1`}>
                Sub-Second Experiences
              </h3>
              <p className={`${outfitRegular.className} text-sm md:text-base leading-relaxed`}>
                Sites we build often load in a manner of seconds, delivering seamless user experiences that convert better.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/contact"
              className={`${outfitSemibold.className} inline-block bg-primary text-white text-sm md:text-base py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition`}
            >
              Get Started Today
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[100vw] lg:w-[55%] xl:w-[60%]">
          <Image
            className="w-[full] h-auto"
            src="/images/seomock.png"
            width={800}
            height={600}
            priority
            alt="Software development agency"
          />
        </div>
      </div>
    </section>
  );
};
