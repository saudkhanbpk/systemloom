import OurTeam from "@/components/about/OurTeam";
import Benefits from "@/components/landingPage/Benefits";
import ClientReviews from "@/components/landingPage/ClientReviews";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import Companies from "@/components/landingPage/Companies";
import GetQoute from "@/components/landingPage/GetQoute";
import Slider from "@/components/landingPage/HeroSection";
import IndustriesSection from "@/components/landingPage/IndustriesSection";
import OurValues from "@/components/landingPage/OurValues";
// import PlatformInfo from "@/components/landingPage/PlatformInfo";
import Products from "@/components/landingPage/Products";
import ProjectsCount from "@/components/landingPage/ProjectsCount";
import ServicesSection from "@/components/landingPage/ServicesSection";
import Technologies from "@/components/landingPage/Technologies";
import WorkProcess from "@/components/landingPage/WorkProcess";
import FaqSection from "@/components/services/FaqSection";

export const metadata = {
  title: "Software Development and Digital Marketing Agency | systemloom",
  description:
    "With TechCreator, you can get the marketing and development solutions you need to grow your company. Competitor's market, now at your fingertips.",
  alternates: {
    canonical: "https://www.techcreator.co/",
  },
};

export default function Page() {

  const homePageFaqs = [
    { 
      question: "What if the software has bugs or doesn't work properly?", 
      answer: "We provide free bug fixing and support for 6 months to ensure your software runs smoothly." 
    },
    { 
      question: "Will my software be scalable if my business grows 10x in the next few years?", 
      answer: "Absolutely! We build software with scalability in mind, ensuring smooth performance as your business expands." 
    },
    { 
      question: "How do I know if my investment in custom software will give me a strong ROI?", 
      answer: "We design solutions that streamline your operations, cut costs, and maximize revenue—so your investment pays for itself quickly." 
    },
    { 
      question: "Is the development process transparent?", 
      answer: "Absolutely! We provide weekly progress reports and real-time updates so you can always track the project's progress." 
    },
    { 
      question: "Why is there no fixed pricing on the website?", 
      answer: "Our pricing depends on your project requirements, complexity, and features. We offer tailored solutions instead of one-size-fits-all pricing." 
    },
    { 
      question: "How can I be sure that my competitors aren’t using better technology than me?", 
      answer: "We stay ahead of industry trends and offer future-proof technologies to keep you competitive and innovative." 
    },
    { 
      question: "What if I have no technical knowledge? How will I manage my software?", 
      answer: "No worries! We build user-friendly solutions and provide training so you can manage everything effortlessly, even without a tech background." 
    },
    { 
      question: "I need my software fast. How quickly can you deliver?", 
      answer: "We offer optimized development timelines and phased deliveries, ensuring you get a functional version as early as possible." 
    },
    { 
      question: "Why should I trust your company instead of hiring a freelancer?", 
      answer: "Unlike freelancers, we offer a full team of experts, long-term support, scalability, and a structured process for reliable results." 
    },
    { 
      question: "How do I get started? What’s the first step?", 
      answer: "Getting started is easy! Just **fill out our contact form**, and we’ll schedule a free consultation to understand your needs and discuss the best strategy for your project." 
    },
];



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "TechCreator",
            alternateName: "Techcreator",
            url: "https://www.techcreator.co/",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGDwMkGwI7z3w/company-logo_200_200/company-logo_200_200/0/1676023222184?e=2147483647&v=beta&t=AeynEpG8fBAhql0cEiTw6hJJFz8t-ypAxsbx5e4KoNw",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92 347 1914920",
              contactType: "customer service",
              contactOption: "TollFree",
              areaServed: ["US", "GB", "CA"],
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/",
              "https://www.linkedin.com/",
              "https://www.techcreator.co/",
            ],
          }),
        }}
      />

      <Slider />
      <div className="max-w-[1450px] mx-auto  px-4 ">
        <Companies />
      </div>
      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
        <ServicesSection />
        <Technologies />
        <WorkProcess />
        <OurValues />
        <div className="md:mt-16 mt-9">
        <ProjectsCount />
        </div>
        <Products />
        <OurTeam />
        <Benefits />
      { /* <PlatformInfo /> */}
        <IndustriesSection />
        <ClientReviews />
        <ClientTestimonialsSection />
        <FaqSection title="Frequently Asked Questions" faqs={homePageFaqs} />
        <GetQoute />
      </div>
    </>
  );
}
