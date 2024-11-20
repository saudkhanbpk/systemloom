import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "./ServiceCard";

interface Service {
  id: number;
  title: string;
  des: string;
  image: string;
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
    },
    {
      id: 2,
      title: "Mobile App Development",
      des: "Reach customers on-the-go with a seamless, user-friendly mobile app that enhances experiences across devices.",
      image: "/assets/icons/appdevicon.png",
    },
    {
      id: 3,
      title: "DevOps",
      des: "Boost efficiency with DevOps solutions that automate workflows, ensure quick deployments, and maintain top-notch quality.",
      image: "/assets/landingPage/Code_perspective_matte.png",
    },
    {
      id: 4,
      title: "Software Testing Service",
      des: "Deliver flawless products with our expert testing services, ensuring performance, security, and a perfect user experience.",
      image: "/assets/icons/webdevicon.png",
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
          <div key={item.id} className="flex justify-center h-auto w-[333px]  mx-auto lg:mx-0 mb-14">
            <ServiceCard
              title={item.title}
              description={item.des}
              icon={item.image}  
              style={false}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesSection;
