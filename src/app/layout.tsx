import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "../newLayout"; 
import Logo from "../../public/assets/icons/Logo.png";


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
    url: "https://tech-creator-web-app-ou63.vercel.app", 
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout> 
      </body>
    </html>
  );
}
