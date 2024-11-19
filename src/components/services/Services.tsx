import Link from "next/link";
import ServiceCard from "../constant/ServiceCard";
import Image from "next/image";
import backgroundImage from "../../../public/assets/aboutImages/servicesBgImage.jpeg";



const ServicesSec = () => {

  return (
    <div>
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Background"
            className="w-full h-auto opacity-15"
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ">
          <div className="text-left md:text-center  mt-10">
            <h1 className="font-semibold text-[40px] md:text-[57px] leading-[50px] md:leading-[65px] mb-6 text-center">
              Our Services
            </h1>
            <p className="font-normal text-[16px] md:text-[18px] mx-auto leading-6 md:leading-9 ">
              TechCreator offers top-notch web and mobile app development
              services to help businesses bring their ideas to life. Our
              experienced team of developers creates custom apps that are
              tailored to meet our clients' specific needs. We use the latest
              technologies and industry best practices to ensure that our apps
              are scalable, secure, and easy to use. Whether you need a simple
              mobile app or a complex web application, TechCreator has the
              expertise to deliver high-quality solutions that exceed your
              expectations. Contact us today to learn more about our web and
              mobile app development services.
            </p>
          </div>
        </div>
      </div>
    <ServiceCard/>
    </div>
  );
};

export default ServicesSec;
