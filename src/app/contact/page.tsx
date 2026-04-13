"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

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

  <div id="contact-form" data-section="contact-form">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Contact Our Procurement Team"
      description="Discuss your supply requirements today. Our team is ready to provide technical support and supply agreements."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we assist you?",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111395.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Procurement Hub"
      description="Located in the heart of Oslo, we manage regional distribution logistics."
      imageSrc="http://img.b2bpic.net/free-photo/laptop-near-smartphone-watch-table_23-2148036898.jpg"
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
