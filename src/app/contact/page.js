// import { useState } from 'react';
import Script from 'next/script';
import { outfitRegular, museoReg, outfitLight, outfitSemibold } from "@/app/layout";
import Image from 'next/image'

export default function page() {
  // const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', budget: '',
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [message, setMessage] = useState('');

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     });

  //     if (res.ok) {
  //       setMessage('Thanks! We’ll be in touch shortly.');
  //       setFormData({ name: '', email: '', phone: '', company: '', budget: '' });
  //     } else {
  //       setMessage('Something went wrong. Please try again.');
  //     }
  //   } catch (error) {
  //     setMessage('Error: Unable to submit form.');
  //   }

  //   setIsSubmitting(false);
  // };

  return (
  <div class="">
        <Script
        id="contact-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Stackria",
            url: "https://stackria.com",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-XXX-XXXXXXX",
              contactType: "Customer Service",
              areaServed: "NG",
            },
          }),
        }}
      />

      {/* Hero */}
      <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-between mx-auto xl:py-20 xl:gap-20">
        
        {/* Hero text */}
        <div  className="xl:w-[50%] lg:w-[50%] mt-20 pb-0 md:pb-10 xl:pb-0 px-5 xl:px-14 xl:mt-10 md:w-[45%] md:mt-28 md:px-7">
          <h1 className={`${outfitSemibold.className} text-[36px] font-bold text-slate-900 mb-4`}>
            Let’s Build Something Meaningful Together
          </h1>
          <p className={`${outfitRegular.className} text-[15px] xl:text-[16px] text-slate-700 leading-relaxed mb-8`}>
            Whether you're launching a new idea, improving your current platform, or simply exploring what’s possible we’d love to hear from you.
          </p>
          
        </div>
        
        {/* Image */}
        <div className="xl:w-[50%] lg:w-[50%] w-full h-full md:w-[55%] md:-mt-32">
          <Image alt='about-us'
          className='relative xl:h-full xl:w-full w-full h-full mx-auto xl:-mt-24'
          src="/images/contact-img.png"
          width={800} 
          height={700} 
          priority/>
          
        </div>
      </div>

      {/* Contact */}
      <div
        className="bg-white py-20 px-6 md:px-12 lg:px-24 mx-auto xl:py-20 text-left xl:text-center xl:w-full xl:mx-auto"
        style={{
          backgroundImage: 'url(/images/bg-cta0.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2
          className={`${outfitSemibold.className} text-[34px] md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight text-left xl:text-center`}
        >
          Let’s talk about what your business needs next.
        </h2>

        <p
          className={`${outfitLight.className} max-w-xl mx-auto text-[15px] md:text-[16px] text-slate-800 mb-8 text-left xl:text-center`}
        >
          Whether you have a project in mind, a question, or just want to explore possibilities—we’d love to hear from you.
        </p>

        <div className="flex justify-left xl:justify-center">
          <a
            href="https://forms.fillout.com/t/vzJQ59nPa5us"
            className="inline-block bg-primary text-white text-sm md:text-base font-medium px-6 py-3 rounded-2xl shadow-md transition hover:bg-opacity-90"
          >
            Reach Us
          </a>
        </div>
      </div>


      {/* Form */}
      {/* <div className="max-w-xl mx-auto px-4 py-12">
        <h1 className={`${outfitRegular.className} text-3xl font-bold mb-6`}>
          Let’s Talk About Your Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`${outfitRegular.className} block mb-2`}>Name</label>
            <input
              name="name"
              required
              placeholder="Enter your full name"
              onChange={handleChange}
              value={formData.name}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className={`${outfitRegular.className} block mb-2`}>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              onChange={handleChange}
              value={formData.email}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className={`${outfitRegular.className} block mb-2`}>Phone</label>
            <input
              name="phone"
              placeholder="Optional – include country code"
              onChange={handleChange}
              value={formData.phone}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className={`${outfitRegular.className} block mb-2`}>Company</label>
            <input
              name="company"
              placeholder="Your company or brand name"
              onChange={handleChange}
              value={formData.company}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Project Description</label>
            <textarea
              name="description"
              placeholder="Briefly describe what you're looking to build, goals, timeline, etc."
              rows="5"
              onChange={handleChange}
              value={formData.description}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
          
          <div>
            <label className={`${outfitRegular.className} block mb-2`}>Budget</label>
            <input
              name="budget"
              placeholder="e.g. $3k–$5k"
              onChange={handleChange}
              value={formData.budget}
              className="w-full border rounded p-2"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${outfitRegular.className} bg-primary text-white px-6 py-3 rounded hover:bg-secondary`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
      </div> */}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Stackria",
            url: "https://stackria.com/contact",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://stackria.com/contact"
            }
          }),
        }}
      />
    </div>
  );
}
