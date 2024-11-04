import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



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
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }], // Optional: Add author info
  openGraph: {
    title: "TechCreator - Custom Software Development",
    description: "Expert solutions for your software needs. Transforming ideas into reality with our dedicated services.",
    url: "https://tech-creator-web-app-ou63.vercel.app", // Replace with your site's URL
    siteName: "TechCreator",
    images: [
      {
        url: "https://tech-creator-web-app-ou63.vercel.app/assets/landingPage/backgroundImage.png", // Ensure this URL is correct and accessible
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
        {/* Add favicon and any other head elements if necessary */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
