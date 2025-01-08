// app/page.js or app/page.tsx
import AboutSection from "@/components/landingPage/AboutSection";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import Companies, { CTASection } from "@/components/landingPage/Companies";
import HeroSection from "@/components/landingPage/HeroSection";
import ProjectsCount from "@/components/landingPage/ProjectsCount";
import ServicesSection from "@/components/landingPage/ServicesSection";
import TeamScalingSection from "@/components/landingPage/TeamScalingSection";

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
    <div>
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

    
<HeroSection />
      
      {/* Sections with max-w-7xl */}
      <div className="max-w-full xl:px-16 px-2 ">
       
        <AboutSection />
      </div>

        <div className="px-2">
        <ServicesSection />
          </div>
      <div className="max-w-full xl:px-16 px-2 ">

        <TeamScalingSection />
        <ClientTestimonialsSection />
</div>
      
      <ProjectsCount />
      <Companies />
      
     
      <div className="max-w-full xl:px-16 px-4 ">
        <CTASection />
      </div>
    </div>
  );
}
