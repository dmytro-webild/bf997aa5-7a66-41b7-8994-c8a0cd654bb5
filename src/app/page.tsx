"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Products",
          id: "/products",
        },
        {
          name: "Compliance",
          id: "/compliance",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="NordicChem"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Industrial Chemical Supply for the Nordic Market"
      description="NordicChem Solutions provides structured, documentation-aware chemical supply services to B2B clients across Norway and the wider Nordic region."
      testimonials={[
        {
          name: "Erik Solberg",
          handle: "@nordicprocure",
          testimonial: "Reliable supply chain partner for our manufacturing plant.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-standing-front-table-writing-diary-with-pen_23-2148087135.jpg",
        },
        {
          name: "Ingrid Berg",
          handle: "@chemicalOps",
          testimonial: "Excellent documentation and compliance transparency.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-notes_1368-6370.jpg",
        },
        {
          name: "Lars Jensen",
          handle: "@industrial",
          testimonial: "Consistently high standards for all our chemical needs.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-businessman-manager-ceo-holding-tablet-walking-through-warehouse-storage-area-looking-towards-shelves_342744-1499.jpg",
        },
        {
          name: "Solveig Nilsen",
          handle: "@factoryLead",
          testimonial: "Professional coordination and logistics support.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-queer-people-work_23-2150617703.jpg",
        },
        {
          name: "Olaf Halvorsen",
          handle: "@sourcing",
          testimonial: "Transparent pricing and great documentation.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-writing-diary-office_23-2148187178.jpg",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "/products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/plant-picture-clean-room-equipment-stainless-steel-machines_645730-718.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/plant-picture-clean-room-equipment-stainless-steel-machines_645730-718.jpg",
          alt: "Manager headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/photo-grey-pipes-tanks-chemistry-medicine-production-pharmaceutical-factory-interior-hightech-factory-modern-production_645730-43.jpg",
          alt: "Client headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-businessman-standing-front-table-writing-diary-with-pen_23-2148087135.jpg",
          alt: "Client headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111395.jpg",
          alt: "Client headshot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/laboratory-glassware-with-red-liquid-still-life_23-2149510715.jpg",
          alt: "Client headshot",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Chemical Compliance",
        },
        {
          type: "text",
          text: "Industrial Logistics",
        },
        {
          type: "text",
          text: "Regulatory Support",
        },
        {
          type: "text",
          text: "Quality Assured",
        },
        {
          type: "text",
          text: "Nordic Partner",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          value: "99.8%",
          title: "Supply Accuracy",
          items: [
            "Precise deliveries",
            "Documentation compliant",
          ],
        },
        {
          id: "2",
          value: "24h",
          title: "Response Time",
          items: [
            "Fast procurement",
            "Local support team",
          ],
        },
        {
          id: "3",
          value: "150+",
          title: "Active Agreements",
          items: [
            "Mid-sized partners",
            "Consistent supply chain",
          ],
        },
      ]}
      title="Operational Excellence"
      description="Our commitment to the Nordic industrial sector is defined by these core metrics."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/",
            },
            {
              label: "Careers",
              href: "/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Compliance",
              href: "/compliance",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
      ]}
      logoText="NordicChem"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
