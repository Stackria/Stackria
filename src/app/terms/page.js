import { outfitSemibold, outfitLight } from "@/app/layout";
import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Stackria',
  description: 'Understand the terms and conditions for using Stackria’s web-based solutions and services.',
};

export default function terms() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className={`text-4xl mb-6 ${outfitSemibold.className}`}>Terms & Conditions</h1>

      <p className={`mb-4 text-lg ${outfitLight.className}`}>
        Welcome to Stackria. By accessing or using our web-based solutions, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>1. Use of Services</h2>
        <p className={`${outfitLight.className}`}>
          Our solutions are intended for business use only. You agree to use our site and offerings for lawful purposes and not to misuse or attempt to access Stackria systems or data.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>2. Intellectual Property</h2>
        <p className={`${outfitLight.className}`}>
          All content on this site—including visuals, copy, code, and branding—is the property of Stackria or its licensors. You may not reproduce or redistribute any part of the site without written consent.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>3. Client Responsibilities</h2>
        <p className={`${outfitLight.className}`}>
          Clients are responsible for providing accurate information, timely feedback, and any assets necessary for the success of a project. Delays in client communication may affect project timelines.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>4. Payments & Refunds</h2>
        <p className={`${outfitLight.className}`}>
          Payments for custom web-based solutions are non-refundable unless stated otherwise in a service agreement. Full project scopes and payment terms will be documented and agreed upon before commencement.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>5. Limitation of Liability</h2>
        <p className={`${outfitLight.className}`}>
          Stackria is not liable for any direct, indirect, or incidental damages resulting from your use of our site or services. We make no warranties beyond those required by law.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>6. Changes to Terms</h2>
        <p className={`${outfitLight.className}`}>
          We may update these terms periodically. Continued use of our services after any such changes constitutes your acceptance of the updated terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>7. Governing Law</h2>
        <p className={`${outfitLight.className}`}>
          These terms are governed by and construed in accordance with the laws of your local jurisdiction, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>8. Contact</h2>
        <p className={`${outfitLight.className}`}>
          For any questions about these Terms & Conditions, please contact us at <a href="mailto:hello@stackria.com" className="underline">hello@stackria.com</a>.
        </p>
      </section>

      <p className={`mt-10 text-sm text-gray-600 ${outfitLight.className}`}>
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </main>
  );
}
