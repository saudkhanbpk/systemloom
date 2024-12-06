import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "../newLayout"; 
import { FaWhatsapp } from "react-icons/fa";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Update the metadata to be more descriptive and relevant
export const metadata: Metadata = {
  
  title: "TechCreator - Custom Software Development",
  description: "Expert solutions for your software needs. Transforming ideas into reality with our dedicated services.",
  keywords: "software development, custom software, tech solutions, web development, app development",
  authors: [{ name: "Zakarya khan", url: "https://tectcreator.co" }], 
  openGraph: {
    title: "TechCreator - Custom Software Development",
    description: "Expert solutions for your software needs. Transforming ideas into reality with our dedicated services.",
    url: "https://tectcreator.co", 
    siteName: "TechCreator",
    images: [
      {
        url: "https://www.techcreator.co/assets/landingPage/backgroundImage.png", 
        width: 800,
        height: 600,
        alt: "TechCreator Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/assets/icons/Logo.png" type="image/png" />
        <meta name="google-site-verification" content="AVdrxyNjezX0QpeAA-BxrpT19BFeEwwfp5Tof-aLtsY" />
        <link rel="canonical" href="https://www.techcreator.co" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout> 

        <a
          href="https://wa.me/923471914920" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-3  p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 z-50"
        >
          <FaWhatsapp size={40} />
        </a>
      </body>
    </html>
  );
}


