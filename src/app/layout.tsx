// app/layout.js or app/layout.tsx
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "../newLayout";
import { FaWhatsapp } from "react-icons/fa";

// Font configurations
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

// export const metadata: Metadata = {
//   title: "Software Development and Digital Marketing Agency | TechCreator",
//   description:
//     "With TechCreator, you can get the marketing and development solutions you need to grow your company. Competitor's market, now at your fingertips.",
//   alternates: {
//     canonical: "https://www.techcreator.co/",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="AVdrxyNjezX0QpeAA-BxrpT19BFeEwwfp5Tof-aLtsY"
        />
        {/* Other metadata can go here */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Layout Wrapper */}
        <Layout>{children}</Layout>

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/923471914920"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-3 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 z-50"
        >
          <FaWhatsapp size={40} />
        </a>
      </body>
    </html>
  );
}
