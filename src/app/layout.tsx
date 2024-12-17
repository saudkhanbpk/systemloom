// // app/layout.js or app/layout.tsx
// import { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import Layout from "../newLayout";
// import { FaWhatsapp } from "react-icons/fa";

// // Font configurations
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Site Verification */}
//         <meta
//           name="google-site-verification"
//           content="AVdrxyNjezX0QpeAA-BxrpT19BFeEwwfp5Tof-aLtsY"
//         />
//         {/* Other metadata can go here */}
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {/* Layout Wrapper */}
//         <Layout>{children}</Layout>

//         {/* WhatsApp floating button */}
//         <a
//           href="https://wa.me/923471914920"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-20 right-3 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 z-50"
//         >
//           <FaWhatsapp size={40} />
//         </a>
//       </body>
//     </html>
//   );
// }




// app/layout.tsx
import { useEffect } from "react";
import Script from "next/script";
import Layout from "../newLayout";
import { FaWhatsapp } from "react-icons/fa";
import localFont from "next/font/local";
import "./globals.css";

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

// Declare global gtag function for TypeScript
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
  // useEffect(() => {
  //   if (typeof window !== "undefined" && typeof window.gtag === "function") {
  //     window.gtag("config", "G-PHQXJH3N0Z", {
  //       page_path: window.location.pathname + window.location.search,
  //     });
  //   }
  // }, []);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PHQXJH3N0Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PHQXJH3N0Z');
          `}
        </Script>

        {/* Metadata */}
        <meta
          name="google-site-verification"
          content="AVdrxyNjezX0QpeAA-BxrpT19BFeEwwfp5Tof-aLtsY"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Layout Wrapper */}
        <Layout>{children}</Layout>

        {/* WhatsApp Floating Button */}
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
