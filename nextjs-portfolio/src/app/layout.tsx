import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HVChatWidget from "@/components/HVChatWidget";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://harshvashishtha.space'),
  title: {
    default: 'Harsh Vashishtha — AI Engineer, Agent Builder & Founder of Haqikos',
    template: '%s | Harsh Vashishtha'
  },
  description: 'Harsh Vashishtha is an AI Engineer, AI Agent Builder, Web Developer and Founder of Haqikos — an Indian AI technology company. Building QIA, PayQIA, and Gearist. Based in India, available for freelance and full-time roles.',
  keywords: [
    'Harsh Vashishtha',
    'Harsh Vashishtha AI Developer',
    'Harsh Vashishtha Haqikos',
    'Haqikos founder',
    'AI Engineer India',
    'AI Agent Builder India',
    'Claude API developer India',
    'React developer India',
    'Next.js developer India',
    'Indian AI startup founder',
    'PayQIA',
    'QIA AI',
    'Gearist AI tools',
    'MCA AI ML LPU',
    'AI developer New Delhi'
  ],
  authors: [{ name: 'Harsh Vashishtha', url: 'https://harshvashishtha.space' }],
  creator: 'Harsh Vashishtha',
  publisher: 'Harsh Vashishtha',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: 'https://harshvashishtha.space',
    siteName: 'Harsh Vashishtha',
    title: 'Harsh Vashishtha — AI Engineer & Founder of Haqikos',
    description: 'AI Engineer, Agent Builder and Founder of Haqikos. Building intelligent AI products for India.',
    images: [{
      url: '/assets/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Harsh Vashishtha — AI Engineer & Founder'
    }],
    firstName: 'Harsh',
    lastName: 'Vashishtha',
    username: 'TheHarshVashishtha',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TheHVashishtha',
    creator: '@TheHVashishtha',
    title: 'Harsh Vashishtha — AI Engineer & Founder',
    description: 'AI Engineer, Agent Builder and Founder of Haqikos. Building intelligent AI products for India.',
    images: ['/assets/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.harshvashishtha.space',
  },
  verification: {
    google: 'ADD_GOOGLE_SEARCH_CONSOLE_CODE',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        <meta name="google-adsense-account" content="ca-pub-6625278402778620" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6625278402778620"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Harsh Vashishtha",
              "url": "https://harshvashishtha.space",
              "image": "https://harshvashishtha.space/assets/images/profile.jpg",
              "jobTitle": "AI Engineer & Founder",
              "description": "AI Engineer, AI Agent Builder, Web Developer and Founder of Haqikos — an Indian AI technology company building QIA, PayQIA, and Gearist.",
              "email": "vashishthaharsh97@gmail.com",
              "nationality": "Indian",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Delhi",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Lovely Professional University",
                "url": "https://lpu.in"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Haqikos",
                "url": "https://haqikos.com"
              },
              "sameAs": [
                "https://linkedin.com/in/theharshvashishtha",
                "https://github.com/Harsh-Vashishtha-G",
                "https://youtube.com/@TheHarshVashishtha",
                "https://x.com/TheHVashishtha",
                "https://haqikos.com"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "AI Agents",
                "React.js",
                "Next.js",
                "Claude API",
                "Cloud Computing",
                "SaaS Development",
                "Python",
                "TypeScript"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "AI Engineer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Haqikos",
              "url": "https://haqikos.com",
              "founder": {
                "@type": "Person",
                "name": "Harsh Vashishtha"
              },
              "foundingDate": "2024",
              "description": "Indian AI technology company building QIA, PayQIA, and Gearist.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://haqikos.com",
                "https://harshvashishtha.space"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Harsh Vashishtha",
              "url": "https://harshvashishtha.space",
              "description": "Personal website of Harsh Vashishtha — AI Engineer, Agent Builder and Founder of Haqikos.",
              "author": {
                "@type": "Person",
                "name": "Harsh Vashishtha"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://harshvashishtha.space/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} antialiased font-sans`}>
        <ScrollToTop />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <HVChatWidget />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
