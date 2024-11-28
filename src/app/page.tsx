"use client";
import AboutSection from "@/components/landingPage/AboutSection";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import Companies, { CTASection } from "@/components/landingPage/Companies";
import HeroSection from "@/components/landingPage/HeroSection";
import ProjectsCount from "@/components/landingPage/ProjectsCount";
import ServicesSection from "@/components/landingPage/ServicesSection";
import TeamScalingSection from "@/components/landingPage/TeamScalingSection";
import { backend_url } from "@/newLayout";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/auth/user`, {
          withCredentials: true,
        });

        if (res.data.success) {
          // console.log("User data received:", res.data.user);
          dispatch(setUser(res.data.user));
        } else {
          console.warn("User not authenticated or no user data available.");
        }
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 401) {
            console.warn("User not authenticated or token expired");
          } else {
            console.error(
              `Error fetching user data: ${error.response.status} - ${error.response.data.message}`
            );
          }
        } else if (error.request) {
          console.error("No response received. Network error?", error.request);
        } else {
          console.error("Error in request setup:", error.message);
        }
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <div>
      <Head>
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
