import React from "react";
import heroappdevelopmentImage from "../../../../public/assets/servicespages/appimage.webp";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import appImage1 from "../../../../public/assets/servicespages/appimage1.webp";
import appImage2 from "../../../../public/assets/servicespages/appImage2.webp";
import appImage3 from "../../../../public/assets/servicespages/appImage3.webp";
import appImage4 from "../../../../public/assets/servicespages/appImag4.webp";
import appImage from "../../../../public/assets/servicespages/MobileAppDevelopment.webp";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";
import Herosection from "@/components/services/Herosection";
import FeatureSection from "@/components/services/FeatureSection";
import FeaturesList from "@/components/services/FeaturesList";
import DiagonalFeatureSection from "@/components/services/DiagonalFeatureSection";
import FramedFeatureSection from "@/components/services/FramedFeatureSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";

const MobileAppDevelopment = () => {
  const categorySlug = "mobile-app-development-company";
  
  const mobileAppsFaqs = [
    { question: "Do you develop apps for both iOS and Android?", answer: " Yes! We build native (Swift, Kotlin) and cross-platform (React Native, Flutter) apps." },
    { question: "How much does it cost to develop a mobile app?", answer: " Cost varies based on features, but basic apps start from $5,000+, while complex apps go higher." },
    { question: "How long does mobile app development take?", answer: " Simple apps take 3-6 months, while complex apps may take 6-12 months." },
    { question: "Do you provide post-launch support?", answer: " Yes, we offer app maintenance, updates, and bug fixes to ensure smooth performance." },
    { question: "Can you integrate third-party APIs into my app?", answer: " Yes, we integrate payment gateways, social media logins, analytics, and more." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: "Design and develop robust mobile applications for iOS and Android." },
    { icon: <FileText className="w-6 h-6 text-purple-500" />, text: 'Create user-friendly apps with seamless navigation and stunning interfaces.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Incorporate cutting-edge technologies for faster and smoother performance." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Ensure on-time delivery with a focus on quality and user satisfaction." },
  ];


  const sections = [
    {
      image: appImage1,
      alt: "Flutter Mobile App Development: Enjoy the process",
      title: "Flutter Mobile App Development for High-Performance Solutions",
      content:
        "Our expertise in Flutter mobile app development enables us to deliver fast, reliable, and visually consistent apps for both iOS and Android platforms. Leveraging this inventive framework, we create apps that provide smooth performance, enhanced flexibility, and a unified codebase, saving time and resources. From startups to enterprises, we craft solutions tailored to diverse business needs. With Flutter, we ensure a seamless user experience and quick time-to-market for your app. Our focus on modern design and robust functionality guarantees apps that stand out in the competitive mobile market.",
    },
    {
      image: appImage2,
      alt: "cross-platform mobile app development services",
      title: "Your Choice for Multi-Device Reach",
      content: 'Our cross-platform mobile app development services enable businesses to reach a wider audience with a single solution. We ensure your app functions seamlessly across multiple devices and operating systems, offering a consistent experience to all users while optimizing development efficiency. By using a unified codebase, we reduce costs and speed up the development process. This approach allows your business to stay agile and adapt quickly to market changes.'
    },
    {
      image: appImage3,
      alt: "Enterprise mobile app development company",
      title: "Enhancing Efficiency while Optimizing Functionality",
      content:
        "Enterprise mobile app development company specializes in enhancing productivity and streamlining operations. We develop secure, scalable apps that empower businesses to manage workflows, collaborate effectively, and achieve organizational goals. Our solutions are tailored to meet the unique needs of your business, ensuring seamless integration with existing systems. With a focus on user-friendly interfaces, we deliver apps that improve performance and drive business growth.",
    },
  ];

  const appDevServices = [
    {
      title: "Software Maintenance",
      description:
        "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
      icon: productDesignImage,
      link: "/services/software-maintenance-services",
    },

    {
      title: "Ui & Ux Design",
      description:
        "Building intuitive interfaces that provide a seamless promised user experience.",
      icon: webDesignImage,
      link: "/services/ui-ux-design-agency",
    },

    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: motionDesignImage,
      link: "/services/affordable-graphic-design-services",
    },
  ];


  return (
    <>
      <Herosection
        title="Mobile App Design and Development Services"
        description={
          <>
            From concept to deployment, we ensure every detail is meticulously crafted just according to your business needs. At {" "}
            <Link  href="/" className="text-blue-600">TechCreator</Link> , we specialize in mobile app development that prioritizes functionality and user engagement. Our team creates intuitive and visually appealing apps that meet your customer complex needs while delivering exceptional user experiences.
          </>
        }
        image={heroappdevelopmentImage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Healthcare Mobile App Development Transforming Industries" 
        description={
          <>
            As a trusted {" "}
            <Link href="/healthcare" className="underline">healthcare mobile app development company </Link> , we craft innovative solutions that enhance patient care and streamline medical workflows. Our services include secure data management, user-friendly interfaces, and tailored features to meet the unique needs of healthcare providers and patients. We bridge the gap between technology and healthcare for better outcomes and improved efficiency.
          </>
        }
           image={appImage}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={appImage4}
        alt="Feature illustration"
        title="Recent Work: Redefining Mobile Solutions"
        content={
          <>
            We recently collaborated with a leading startup to deliver a cross-platform mobile app development project, enabling them to reach users across iOS and Android seamlessly. Additionally, we developed a specialized healthcare app for a clinic, integrating appointment scheduling, patient records, and secure communication features, transforming their service delivery. Choose {" "}
            <Link href="/" className="underline">TechCreator </Link> {" "}  to turn your mobile app ideas into reality with innovative solutions designed to meet your business objectives.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={mobileAppsFaqs} />
        <OurTeam />
      <RelatedServices services={appDevServices} />
    
        <div className=" bg-purple-600 md:mt-16 mt-9 md:mb-16 mb-9">
          <ClientReviews />
          <ClientTestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default MobileAppDevelopment;

export const metadata = {
  title: "Cross-Platform Mobile App Design and Development | TechCreator",
  description:
    "Explore expert mobile app design and development services at TechCreator. Specializing in Flutter, cross-platform, healthcare, and enterprise app solutions tailored to meet your business needs.",
  alternates: {
    canonical: "https://www.techcreator.co/services/mobile-app-development-company",
  },
};
