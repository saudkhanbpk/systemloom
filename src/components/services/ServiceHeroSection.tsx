import Link from "next/link";
import Buttons from "./Buttons";
import webdevelopmentimage from "../../../public/assets/servicebackgroundimages/web-develoment.webp";
import Image from "next/image";

const ServiceHeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-start px-2 md:px-8 lg:px-12 text-white">
      <div className="absolute inset-0">
        <Image
          src={webdevelopmentimage}
          alt="Web Development Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75} 
          priority 
          placeholder="blur" 
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content Section */}
      <div className="relative w-full mt-20 md:mt-0 sm:max-w-4xl text-center md:text-left p-2 md:p-8 lg:p-12 rounded-lg md:ml-10">
        <h1 style={{ lineHeight: "1.3" }} className="text-xl sm:text-3xl lg:text-5xl font-extrabold animate-fadeInUp text-purple-600">
          Empower Your Business with Custom Web Development
        </h1>

        <p style={{ lineHeight: "1.7" }} className="text-base md:text-lg lg:text-xl font-medium mt-4 opacity-80 animate-fadeInUp delay-100">
          Techcreator accelerates your business growth by delivering custom web solutions designed to meet your business objectives. Our skilled, experienced, and dedicated developers craft tailored websites for industries like  
          <Link href="/healthcare" className="text-blue-500 hover:underline transition-colors"> Healthcare</Link>,  
          <Link href="/real-estate" className="text-blue-500 hover:underline transition-colors"> Real Estate</Link>,  
          <Link href="/restaurants" className="text-blue-500 hover:underline transition-colors"> Restaurants</Link>,  
          <Link href="/e-commerce" className="text-blue-500 hover:underline transition-colors mr-1"> E-Commerce</Link>   
          stores—ensuring seamless functionality and innovation.
        </p>

        <div className="mt-6 animate-fadeInUp delay-200">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
