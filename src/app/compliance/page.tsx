"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { CheckCircle, FileText, Shield } from "lucide-react";

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

  <div id="compliance-info" data-section="compliance-info">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Shield,
          title: "Safety Data Sheets",
          description: "Up-to-date SDS provided for every order.",
        },
        {
          icon: CheckCircle,
          title: "REACH Compliant",
          description: "Full compliance with EU chemical regulations.",
        },
        {
          icon: FileText,
          title: "Technical Documentation",
          description: "Structured product data for facility operations.",
        },
      ]}
      title="Regulatory Compliance"
      description="NordicChem Solutions maintains stringent documentation for all distributed products."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Safety Protocols"
      description="Detailed overview of our safety and compliance standards."
      features={[
        {
          title: "ISO Certification",
          description: "Global quality standards met.",
          imageSrc: "http://img.b2bpic.net/free-photo/plant-picture-clean-room-equipment-stainless-steel-machines_645730-355.jpg",
        },
        {
          title: "Safe Handling",
          description: "Guidelines for storage and transport.",
          imageSrc: "http://img.b2bpic.net/free-photo/industrial-worker-with-protective-mask-white-uniform-holding-plastic-cans-chemical-industry_342744-1231.jpg",
        },
      ]}
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
