"use client";
import { useEffect } from "react";
import Script from "next/script";
import Layout from "../newLayout";
import { FaWhatsapp } from "react-icons/fa";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import * as Sentry from "@sentry/react";

// Sentry Initialization
// Sentry.init({
//   dsn: "https://9d42fdd8329487e9dedc9b6bb7f46e6d@o4508575425036288.ingest.us.sentry.io/4508579252666368",
//   integrations: [],
// });

// Font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Google Analytics Config Function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Set up Google Analytics tracking
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-PHQXJH3N0Z", {
        page_path: window.location.pathname + window.location.search,
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/icons/Logo.png" type="image/png" />

        {/* Metadata */}
        <meta
          name="google-site-verification"
          content="AVdrxyNjezX0QpeAA-BxrpT19BFeEwwfp5Tof-aLtsY"
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PHQXJH3N0Z"
          strategy="lazyOnload" 
          defer
        />
        <Script id="google-analytics" strategy="lazyOnload" defer>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PHQXJH3N0Z', { 'anonymize_ip': true });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload" 
          defer
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MSPBKQM2');
          `}
        </Script>

        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11493765407"
          strategy="lazyOnload"
          async
        />
        <Script id="google-ads" strategy="lazyOnload" defer>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11493765407');
          `}
        </Script>

        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSPBKQM2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Layout Wrapper */}
        <Layout>{children}</Layout>

        {/* WhatsApp Floating Button */}
        <Link
          href="https://wa.me/+447511801699"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-3 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 z-50"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={40} />
        </Link>
      </body>
    </html>
  );
}
