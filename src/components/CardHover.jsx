import { HoverEffect } from "@/components/ui/card-hover-effect"

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export const projects = [
  {
    title: "Custom Animations & Front-End Experiences",
    description: "Need a wow-factor? We implement custom animations, dynamic interactions, and bespoke UI/UX features that make your platform stand out while remaining intuitive.",
  },
  {
    title: "Business Website Development",
    description:
      "From sleek landing pages to robust multi-page websites, we develop high-performing, professional sites that showcase your brand, attract customers, and drive conversions.",
  },
  {
    title: "Web Application & SaaS Development",
    description: "Need something more dynamic than a standard website? We develop full-featured web applications and SaaS (Software as a Service) solutions with complex functionality, seamless UX, and scalability",
  },
  {
    title: "Membership & Subscription Development",
    description:
      "We develop membership-based solutions with gated content, user account management, subscription billing, and renewal automation—ideal for educational, coaching, or digital product businesses.",
  },
  {
    title: "Content Management System (CMS) Development",
    description:
      "We develop tailored CMS solutions that give you full control over content pages, blogs, media, products—with user roles, approval workflows, and easy expansion.",
  },
  {
    title: "Custom WordPress Development",
    description:
      "We create bespoke WordPress solutions tailored to your brand, empowering you to easily manage content, optimize performance, and scale your online presence.",
  },
  
]
