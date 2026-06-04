import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Gold Plumbing & Repiping | Luxury Plumbing & Permanent Solutions',
  description: 'Southern California\'s premium plumbing and repiping specialists. Experience white-glove service, honest pricing, and lasting solutions for your home. Built to Last. Trusted to Perform.',
  keywords: ["luxury plumbing, repiping, Southern California, professional plumber, drain cleaning, leak repair, water line replacement, home plumbing, copper repiping, PEX repiping"],
  openGraph: {
    "title": "Gold Plumbing & Repiping | Luxury Plumbing & Permanent Solutions",
    "description": "Southern California's premium plumbing and repiping specialists. Experience white-glove service, honest pricing, and lasting solutions for your home. Built to Last. Trusted to Perform.",
    "url": "https://www.goldplumbing.com",
    "siteName": "Gold Plumbing & Repiping",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/aerator-closeup-copper-glow-modern-faucet_169016-69020.jpg",
        "alt": "Luxury bathroom with golden fixtures"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Gold Plumbing & Repiping | Luxury Plumbing & Permanent Solutions",
    "description": "Southern California's premium plumbing and repiping specialists. Experience white-glove service, honest pricing, and lasting solutions for your home. Built to Last. Trusted to Perform.",
    "images": [
      "http://img.b2bpic.net/free-photo/aerator-closeup-copper-glow-modern-faucet_169016-69020.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
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
