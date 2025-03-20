import OurTeam from "@/components/about/OurTeam"
import Footer from "@/components/home/Footer"
import Herosection from "@/components/home/Herosection"
import Navbar from "@/components/home/Navbar"
import RealNumers from "@/components/home/RealNumers"
import ServiceSection from "@/components/home/ServiceSection"
import ClientReviews from "@/components/landingPage/ClientReviews"
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import PlatformInfo from "@/components/landingPage/PlatformInfo"
import TechnologiesSection from "@/components/landingPage/Technologies"
import WorkProcess from "@/components/landingPage/WorkProcess"
import FaqSection from "@/components/services/FaqSection"


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

const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    
    <RealNumers  />
   
    <div className="max-w-[1440px] mx-auto sm:px-4 px-2">
    <ServiceSection/>
    <div className="md:mt-16 mt-9">
    <TechnologiesSection/>
    </div>

    <WorkProcess />
   
    <OurTeam />
   <PlatformInfo />
   <ClientReviews />
    <ClientTestimonialsSection />
    <FaqSection title="Frequently Asked Questions" faqs={homePageFaqs} />
    </div>
    <Footer/>
  </>
  )
}

export default Home


export const metadata = {
  title: "TechCreator - Custom Software Development & IT Solutions",
  description:
    "TechCreator specializes in custom software development, web and mobile app development, DevOps, graphic design, and project management. Elevate your business with cutting-edge technology solutions.",
  alternates: {
    canonical: "https://www.techcreator.co/home",
  },
};