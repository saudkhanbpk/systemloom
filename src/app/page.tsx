import OurTeam from "@/components/about/OurTeam";
import AboutSection from "@/components/landingPage/AboutSection";
import Benefits from "@/components/landingPage/Benefits";
import ClientReviews from "@/components/landingPage/ClientReviews";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import Companies, { CTASection } from "@/components/landingPage/Companies";
import GetQoute from "@/components/landingPage/GetQoute";
import Slider from "@/components/landingPage/HeroSection";
import HeroSection from "@/components/landingPage/HeroSection";
import IndustriesSection from "@/components/landingPage/IndustriesSection";
import OurValues from "@/components/landingPage/OurValues";
import PlatformInfo from "@/components/landingPage/PlatformInfo";
import Products from "@/components/landingPage/Products";
import ProjectsCount from "@/components/landingPage/ProjectsCount";
import ServicesSection from "@/components/landingPage/ServicesSection";
import TeamScalingSection from "@/components/landingPage/TeamScalingSection";
import Technologies from "@/components/landingPage/Technologies";
import WorkProcess from "@/components/landingPage/WorkProcess";


export const metadata = {
  title: "Software Development and Digital Marketing Agency | TechCreator",
  description:
    "With TechCreator, you can get the marketing and development solutions you need to grow your company. Competitor's market, now at your fingertips.",
  alternates: {
    canonical: "https://www.techcreator.co/",
  },
};

export default function Page() {
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
              "https://www.facebook.com/techcreatorfb/",
              "https://www.linkedin.com/company/techcreator",
              "https://www.techcreator.co/",
            ],
          }),
        }}
      />

     {/* 🔥 Hero Section: First Impression with Slider */}
     <Slider />

{/* 🏢 Companies We Work With (Build Trust) */}
<div className="max-w-[1450px] mx-auto  px-4 ">
  <Companies />
</div>

{/* 🚀 Services: What We Offer */}
<div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9 ">
  <ServicesSection />
</div>

{/* 💎 Technologies We Use (Credibility) */}
<div className="max-w-[1450px] mx-auto px-4 md:mt-6 mt-9">
  <Technologies />
</div>

{/* 🔥 Our Values: Why Choose Us */}
<div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
  <WorkProcess/>
  <OurValues />
</div>

{/* 📊 Project Count: Show Achievements */}
<div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9 text-center">
  <ProjectsCount />
</div>

{/* 🏆 Our Best Products (Showcase) */}
<div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
  <Products />
</div>

{/* 👨‍💼 Our Team: Meet the Experts */}
<div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9 bg-gray-100 md:py-12 py-6 rounded-lg">
  <OurTeam />
</div>

{/* 🚀 Benefits: Why Clients Love Us */}
<div className="max-w-[1450px] mx-auto md:mt-16 mt-9">
  <Benefits />
</div>

{/* 🔥 Platform Information */}
<div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
  <PlatformInfo />
  <IndustriesSection/>
</div>

{/* ❤️ Client Testimonials (Builds Trust) */}
<div className=" px-4 md:mt-16 mt-9 bg-purple-600 ">
<div className="max-w-[1450px] mx-auto">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
</div>

{/* 📞 Final CTA: Last Push to Contact */}
<div className="max-w-[1450px] mx-auto px-4 text-center md:mt-16 mt-9">
  <GetQoute />
</div>
     
    </>
  );
}

   
