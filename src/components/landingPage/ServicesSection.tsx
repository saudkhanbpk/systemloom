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
      des: "Transform your online presence with a visually stunning and functional website that drives engagement and grows your brand.",
      image: "/assets/icons/webdesignicon.png",
      link: "/services/web-development",
    },
    {
      id: 2,
      title: "Mobile App Development",
      des: "Reach customers on-the-go with a seamless, user-friendly mobile app that enhances experiences across devices.",
      image: "/assets/icons/appdevicon.png",
    link: "/services/mobile-app-development"
    },
    {
      id: 3,
      title: "DevOps",
      des: "Boost efficiency with DevOps solutions that automate workflows, ensure quick deployments, and maintain top-notch quality.",
      image: "https://cdn-icons-png.flaticon.com/512/5084/5084071.png",
    link: "/services/devops",
    },
    {
      id: 4,
      title: "Software Testing Service",
      des: "Deliver flawless products with our expert testing services, ensuring performance, security, and a perfect user experience.",
      image: "/assets/icons/webdevicon.png",
    link: "/services/qa-testing",
    },
    {
      id: 5,
      title: "UI/UX Designing",
      des: "Craft intuitive and visually appealing designs that provide exceptional user experiences across all platforms.",
      image: "https://cdn-icons-png.flaticon.com/512/17109/17109606.png",
    link: "/services/ui-ux-designing",
    },
    {
      id: 6,
      title: "Graphic Designing",
      des: "Bring your ideas to life with striking graphics and creative visuals that leave a lasting impression.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8CSayoy_gkUrkW4-D9Vq82e_gcDBNfOM1w&s",
    link: "/services/graphic-designing",
    },
    {
      id: 7,
      title: "Project Management",
      des: "Streamline your projects with professional management strategies that ensure timely and successful completion.",
      image: "https://cdn-icons-png.flaticon.com/512/9402/9402518.png",
    link: "/services/project-management",
    },
    {
      id: 8,
      title: "SEO & Content Writing",
      des: "Boost your online visibility with engaging content and optimized strategies that drive traffic and conversions.",
      image: "https://cdn-icons-png.flaticon.com/512/13122/13122980.png",
    link: "/services/seo-content-writing",
    },
    {
      id: 9,
      title: "Software Maintenance",
      des: "Ensure your software runs smoothly with expert maintenance services that address issues proactively.",
      image: "https://cdn-icons-png.flaticon.com/512/8463/8463643.png",
    link: "/services/software-maintenance",
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
          <div key={item.id} className="flex justify-center h-auto w-[333px] mx-auto lg:mx-0 mb-14">
            <Link href={item.link} passHref>
              
                <ServiceCard
                  title={item.title}
                  description={item.des}
                  icon={item.image}
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
