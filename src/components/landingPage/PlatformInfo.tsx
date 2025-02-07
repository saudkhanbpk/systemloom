// components/PlatformInfo.tsx
import React from 'react';

const PlatformInfo: React.FC = () => {
  return (
    <div className="">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="ms:text-4xl text-2xl font-bold text-purple-600">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-700 mt-2">A platform that transcends boundaries with innovation</p>
      </div>

      {/* Content Section */}
      <div className="flex md:flex-row flex-col items-center justify-between md:p-10 p-3 bg-white rounded-xl shadow-lg">
        {/* Left section */}
        <div className="md:w-1/2 md:mb-0 mb-9">
          <h2 className="ms:text-3xl text-xl font-bold text-black">Our platform is now called <span className="text-purple-600">Transcend</span></h2>
          <p className="mt-4 text-lg text-gray-700">
            A unified platform that transcends auto and asset retail and finance,
            all powered by Artificial Intelligence.
          </p>
          <div className="mt-4">
            <p className="font-bold text-lg">Transcend</p>
            <p className="text-sm text-gray-600">Def.: To rise above or go beyond the limits of.</p>
          </div>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full flex items-center">
            Learn More
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4v12M4 10l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Right section with video */}
        <div className="md:w-1/2">
          <video autoPlay loop muted className="w-full h-auto rounded-lg">
            <source src="/assets/homepage/backgroundVideo02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default PlatformInfo;
