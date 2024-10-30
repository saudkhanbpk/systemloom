import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const servicesArr = [
    {
      id: 1,
      title: "Web Design & Development",
      des: "A website is an extension of yourself, and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image: "/assets/landingPage/Dashboard_perspective_matte.png", // Use path relative to public
    },
    {
      id: 2,
      title: "Mobile App Development",
      des: "A website is an extension of yourself, and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image: "/assets/landingPage/Mobile_app_perspective_matte.png", 
    },
    {
      id: 3,
      title: "DevOps",
      des: "A website is an extension of yourself, and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image: "/assets/landingPage/Code_perspective_matte.png", 
    },
    {
      id: 4,
      title: "Software Testing Service",
      des: "A website is an extension of yourself, and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image: "/assets/landingPage/Mobile_app_perspective_matte.png",
    },
  ];

  return (
    <React.Fragment>
      <div className="mx-auto">
        <div className="text-center font-bold text-[#9A00FF] text-[35px] mb-20 mt-14">
          <h2>Services we offer</h2>
        </div>
        <Carousel
          swipeable={false}
          centerMode={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {servicesArr.map((item) => (
            <div key={item.id} className="h-auto w-[333px] mb-14">
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
    </React.Fragment>
  );
}

export default ServicesSection;
