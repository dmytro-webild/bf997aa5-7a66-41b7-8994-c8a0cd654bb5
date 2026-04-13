"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

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

  <div id="product-list" data-section="product-list">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Industrial Solvent A",
          price: "Request Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-grey-pipes-tanks-chemistry-medicine-production-pharmaceutical-factory-interior-hightech-factory-modern-production_645730-43.jpg",
        },
        {
          id: "p2",
          name: "Lubricant Solution",
          price: "Request Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/laboratory-glassware-with-red-liquid-still-life_23-2149510715.jpg",
        },
        {
          id: "p3",
          name: "Cleaning Agent",
          price: "Request Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-technologist-white-protective-uniform-holding-tablet-controlling-food-production-processing-factory_342744-1196.jpg",
        },
        {
          id: "p4",
          name: "Coating Base",
          price: "Request Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-water-can-with-orange-paint-white-art-color-drink-photo_140725-93204.jpg",
        },
        {
          id: "p5",
          name: "Catalyst Compound",
          price: "Request Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/barrels-toxic-waste-from-nuclear-power-plant_23-2150957734.jpg",
        },
        {
          id: "p6",
          name: "Stabilizer Agent",
          price: "Request Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-erlenmeyer-flask-with-orange-liquid-round-flask-with-blue-liquid-lab_181624-35081.jpg",
        },
      ]}
      title="Our Industrial Chemicals"
      description="Explore our comprehensive range of high-quality industrial chemicals."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Featured Solutions"
      description="Specialized chemical formulations for industrial applications."
      products={[
        {
          id: "f1",
          brand: "NordicChem",
          name: "High-Efficiency Solvent",
          price: "Contact for Pricing",
          rating: 5,
          reviewCount: "42",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-science-lab-substance_23-2148492004.jpg",
        },
        {
          id: "f2",
          brand: "NordicChem",
          name: "Standard Cleaning Agent",
          price: "Contact for Pricing",
          rating: 4,
          reviewCount: "28",
          imageSrc: "http://img.b2bpic.net/free-photo/plastic-jerry-can-isolated-white-background_493343-29839.jpg",
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
