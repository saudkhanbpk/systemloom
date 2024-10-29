import React from 'react';
import BlogCards from './BlogCards';

const BlogHeroSection: React.FC = () => {
  return (
    <>
      <div>
        <div className="relative bg-gray-900 text-white h-[700px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/930f/4355/0bcba6ef8b56768f41a9178e764cc5ea?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4w5Emi2brMKFJnvLACHgfmSX9DdtK35psqsEokLlmBJ0UIzgM5qfFf8jvuVrQtgXnsAx3pi7wYWH0Dm9hN1uD9X6u1zW5ZFRDcOCvyg8cmu1IvtI-GUkoKPnL0tI6YzbP16Bc7n~tQ2cCtmnn5o6opZabVHzTFeOO-WcVmojwec~nIWWtGNWgOyvTUIhv2QZ1cdzbprg24ynfRUgk~OSTIqEQqihNwVvPCTChx2BlPa1wS8935BrmlvaKiYNHVfHlwcmpNmLqwDu20RYqGJsEklaD9-6K7KqkLm~ZvQMz2lnd8xyrFUX9e6a3pGW9U3bUV2yC3yLMEBgekqEVNQbQ__"
              alt="Background"
              className="w-full h-full object-cover" // Added h-full and object-cover for better styling
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="flex justify-center items-center h-[70vh]">
              <h1 className="font-semibold text-[58px] font-poppins leading-[65px] text-center mb-6">
                our latest news and updates
              </h1>
            </div>
          </div>
        </div>
      </div>
      <BlogCards />
    </>
  );
};

export default BlogHeroSection;
