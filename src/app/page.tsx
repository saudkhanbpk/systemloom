"use client";
import AboutSection from "@/components/landingPage/AboutSection";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import Companies, { CTASection } from "@/components/landingPage/Companies";
import HeroSection from "@/components/landingPage/HeroSection";
import ProjectsCount from "@/components/landingPage/ProjectsCount";
import ServicesSection from "@/components/landingPage/ServicesSection";
import TeamScalingSection from "@/components/landingPage/TeamScalingSection";
import Head from "next/head";

const Page = () => {
 
  return (
    <div>
      <Head>
      <title>Software Development and Digital Marketing Agency | TechCreator</title>
        <meta
          name="description"
          content="With TechCreator, you can get the marketing and development solutions you need to grow your company. Competitor's market, now at your fingertips."
        />

        <link rel="canonical" href="https://www.techcreator.co/" />
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
                telephone: "+92-311-9265290",
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
      </Head>

      <>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamScalingSection />
        <ClientTestimonialsSection />
        <ProjectsCount />
        <Companies />
        <CTASection />
      </>
    </div>
  );
};

export default Page;
