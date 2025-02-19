import React from 'react';
import backgroundImage from "../../../public/assets/homepage/blogbg (convert.io).webp"
import Image from 'next/image';

const BlogHeroSection: React.FC = () => {
  return (
    <>
      <div>
        <div className="relative bg-gray-900 text-white ">
          <div className="absolute inset-0 overflow-hidden opacity-25">
            <Image
              src={backgroundImage}
              alt="Background"
              width={300}
              height={150}
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-2 lg:px-8 py-24 md:py-32">
            <div className="flex justify-center items-center h-[70vh]">
              <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl  font-poppins leading-[65px] text-center mb-6">
                Our latest news and updates
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeroSection;
