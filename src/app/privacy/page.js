import { outfitSemibold, outfitLight } from "@/app/layout";
import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Stackria',
  description: 'Learn how Stackria collects, uses, and protects your information.',
};

export default function page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className={`text-4xl mb-6 ${outfitSemibold.className}`}>Privacy Policy</h1>

      <p className={`mb-4 text-lg ${outfitLight.className}`}>
        At Stackria, your privacy matters to us. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our web-based solutions and services.
      </p>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>1. Information We Collect</h2>
        <p className={`mb-3 ${outfitLight.className}`}>
          We collect personal and technical information when you:
        </p>
        <ul className={`list-disc pl-6 ${outfitLight.className}`}>
          <li>Fill out a contact form</li>
          <li>Subscribe to our updates</li>
          <li>Request a quote or solution</li>
          <li>Browse our site (via cookies and analytics)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>2. How We Use Your Information</h2>
        <p className={`mb-3 ${outfitLight.className}`}>
          The data we collect is used to:
        </p>
        <ul className={`list-disc pl-6 ${outfitLight.className}`}>
          <li>Respond to inquiries and provide support</li>
          <li>Personalize your experience</li>
          <li>Improve our site and offerings</li>
          <li>Send relevant updates or marketing (if opted-in)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>3. Data Protection</h2>
        <p className={`mb-3 ${outfitLight.className}`}>
          We implement industry-standard security measures to protect your data and do not sell or share your information with third parties without your consent, except as required by law.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>4. Cookies</h2>
        <p className={`mb-3 ${outfitLight.className}`}>
          Our site uses cookies and analytics to understand user behavior and improve performance. You can modify your browser settings to manage or disable cookies at any time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>5. Third-Party Links</h2>
        <p className={`mb-3 ${outfitLight.className}`}>
          Our website may contain links to external sites. Stackria is not responsible for the content or privacy practices of those websites.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>6. Your Rights</h2>
        <p className={`mb-3 ${outfitLight.className}`}>
          You have the right to request access to or deletion of your personal data. To do so, please contact us at <a href="mailto:hello@stackria.com" className="underline">hello@stackria.com</a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl mt-8 mb-2 ${outfitSemibold.className}`}>7. Policy Updates</h2>
        <p className={`mb-3 ${outfitLight.className}`}>
          This policy may be updated from time to time. The latest version will always be available on this page.
        </p>
      </section>

      <p className={`mt-10 text-sm text-gray-600 ${outfitLight.className}`}>
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </main>
  );
}
