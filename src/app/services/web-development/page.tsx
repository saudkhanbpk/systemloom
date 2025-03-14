import React from "react";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";
import OurTeam from "@/components/about/OurTeam";
import Herosection from "@/components/services/Herosection";
import FeatureSection from "@/components/services/FeatureSection";
import FeaturesList from "@/components/services/FeaturesList";
import DiagonalFeatureSection from "@/components/services/DiagonalFeatureSection";
import FramedFeatureSection from "@/components/services/FramedFeatureSection";
import RelatedServices from "@/components/services/RelatedServices";

const WebDevelopment = () => {
  const categorySlug = "web-development";

  

  const webDevFaqs = [
    { question: "Which technologies do you use for web development?", answer: " We use modern technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and TailwindCSS for building scalable web applications." },
    { question: "Do you develop eCommerce websites?", answer: " Yes, we specialize in eCommerce platforms like Shopify, WooCommerce, and custom solutions with secure payment gateways." },
    { question: "How long does it take to develop a website?", answer: " Development time depends on complexity, but typically 4-12 weeks for a complete project." },
    { question: "Do you provide website maintenance and support?", answer: " Yes, we offer ongoing maintenance to update content, fix bugs, and improve security." },
    { question: "Will my website be SEO-friendly and mobile-responsive?", answer: " Absolutely! We ensure your website is optimized for search engines and fully responsive on all devices." },
  ];

  return (
    <div className="">

      {/* hero section start */}
     <Herosection/>

      {/* hero section end */}
      
<div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
      {/* FeatureSection section start */}
        <FeatureSection/>
      {/* FeatureSection section end */}

      {/* FeaturesList section start */}
     <FeaturesList/>
      {/* FeaturesList section end */}

      {/* DiagonalFeatureSection section start */}
     <DiagonalFeatureSection />
      {/* DiagonalFeatureSection section end */}

      {/* FramedFeatureSection section start */}
      <FramedFeatureSection/>
      {/* FramedFeatureSection section end */}

      {/* RecentWorks section start */}
      <ServicesRelatedProjects slug={categorySlug} />
      {/* RecentWorks section end */}



<FaqSection title="Frequently Asked Questions" faqs={webDevFaqs} />
<OurTeam />



      {/* RelatedServices section start */}
     <RelatedServices />


      {/* RelatedServices section end */}
      <div className=" bg-purple-600 md:mt-16 mt-9 md:mb-16 mb-9">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
</div>
    </div>
  );
};

export default WebDevelopment;



export const metadata = {
  title: "Progressive Web App Development Company | TechCreator",
  description:
    "TechCreator provides full-fledged Progressive Web App development Services for your business online needs. Get a more attractive and customized solution here.",
  alternates: {
    canonical: "https://www.techcreator.co/services/web-development",
  },
};