"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  des: string;
  image: string;
  link: string;
  altText: string; // Added altText field
}

const ServicesSection: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    smallTablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const servicesArr: Service[] = [
    {
      id: 1,
      title: "Web Design & Development",
      des:
        "We make what you think. Whether it is through implementation, team extension, or research, we can support you. TechCreator provides web development services that are all about helping your business stand out in the digital world."
          .split(" ")
          .slice(0, 26)
          .join(" ") + "...",
      image: "/assets/icons/webdesignicon.png",
      link: "/services/web-development",
      altText: "Web design and development services",
    },
    {
      id: 2,
      title: "Mobile App Development",
      des:
        "Using an agile Mobile App Development methodology, TechCreator churns android app development and iOS app development for businesses of all scales."
          .split(" ")
          .slice(0, 20)
          .join(" ") + "...",
      image: "/assets/icons/appdevicon.png",
      link: "/services/mobile-app-development",
      altText: "Providing mobile app development and maintenance",
    },
    {
      id: 3,
      title: "DevOps",
      des:
        "We bridge the gap between development and operations, ensuring seamless collaboration, automation, and faster time-to-market. From CI/CD pipelines to real-time monitoring, our tailored solutions enhance efficiency, scalability, and reliability."
          .split(" ")
          .slice(0, 20)
          .join(" ") + "...",
      image: "https://cdn-icons-png.flaticon.com/512/5084/5084071.png",
      link: "/services/devops",
      altText: "Development and maintenance all at one place",
    },
    {
      id: 4,
      title: "Software Testing Service",
      des:
        "Your software is ready for success with our Software Testing Services, designed to deliver comprehensive bug detection, advanced security protocols, and flawless performance evaluation."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image: "/assets/icons/webdevicon.png",
      link: "/services/qa-testing",
      altText: "Software testing solutions at TechCreator",
    },
    {
      id: 5,
      title: "UI/UX Designing",
      des:
        "Creating colors that brands need. In addition to implementing proven systems, our designers undergo meticulous reviews and learn from impactful practices and toolsets."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image: "https://cdn-icons-png.flaticon.com/512/17109/17109606.png",
      link: "/services/ui-ux-designing",
      altText: "Design your dream into reality",
    },
    {
      id: 6,
      title: "Graphic Designing",
      des:
        "TechCreator’s creatives hail from around the world and bring a comprehensive skill set, ensuring you are matched with the right creatives – quality control included."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8CSayoy_gkUrkW4-D9Vq82e_gcDBNfOM1w&s",
      link: "/services/graphic-designing",
      altText: "Attract and grab audience attention",
    },
    {
      id: 7,
      title: "Project Management",
      des:
        "Team coordination and cooperation is what we demand and deal first. We manage a lot of businesses successfully and have the potential to handle your projects."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image: "https://cdn-icons-png.flaticon.com/512/9402/9402518.png",
      link: "/services/project-management",
      altText: "Project Management Services",
    },
    {
      id: 8,
      title: "SEO & Content Writing",
      des:
        "We aim to create websites and rank them on Google with expert SEO Services. TechCreator builds platforms that meet search engine needs to scale your business into profitability."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image: "https://cdn-icons-png.flaticon.com/512/13122/13122980.png",
      link: "/services/seo-content-writing",
      altText: "SEO and content writing for better optimization",
    },
    {
      id: 9,
      title: "Software Maintenance",
      des:
        "Ensure your software runs smoothly with expert maintenance services that address issues proactively. Our team offers regular updates, efficient bug fixes, and seamless integration to ensure your applications remain optimized and secure for modern business needs."
          .split(" ")
          .slice(0, 24)
          .join(" ") + "...",
      image: "https://cdn-icons-png.flaticon.com/512/8463/8463643.png",
      link: "/services/software-maintenance",
      altText: "Software maintenance services at TechCreator",
    },
    {
      id: 10,
      title: "Social Media Marketing & Branding",
      des:
        " We create good ads campaigns on Facebook, Instagram, LinkedIn, and Twitter to increase the reach of your brand. We focus on creating viral content, targeted ads, and communities. When paired with a solid branding strategy, we make sure your social presence hits home. From influencer collaborations to data-driven analytics, we empower social media platforms to be your leading tools in achieving growth and success."
          .split(" ")
          .slice(0, 24)
          .join(" ") + "...",
      image: "https://cdn-icons-png.flaticon.com/512/3050/3050467.png",
      link: "/services/digital-marketing",
      altText: "Social media marketing and branding services",
    },
  ];

  return (
    <div className="mx-auto">
      <div className="text-center font-bold text-[#9A00FF] text-[35px] mb-20 mt-14">
        <h2>Services we offer</h2>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s ease"
        transitionDuration={800}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px flex justify-center"
      >
        {servicesArr.map((item) => (
          <div
            key={item.id}
            className="flex justify-center h-auto w-[333px] mx-auto lg:mx-0 mb-14"
          >
            <Link href={item.link} passHref>
              <ServiceCard
                title={item.title}
                description={item.des}
                icon={item.image}
                altText={item.altText}
                style={false}
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesSection;
