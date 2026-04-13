import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'NordicChem Solutions | Industrial Chemical Supply',
  description: 'Nordic-based industrial chemical supplier providing structured, documentation-aware B2B supply solutions.',
  openGraph: {
    "title": "NordicChem Solutions",
    "siteName": "NordicChem Solutions",
    "type": "website"
  },
};

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
