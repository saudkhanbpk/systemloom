import React from 'react';
import JobApplicationForm from '@/components/Career/ApplicationForm';
import heroImage from "../../../public/assets/careerImages/joinUs.png"
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <div className="relative w-full h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Join Us"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Black Overlay with Increased Opacity */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      {/* Form Section */}
      <div className="w-full mt-10">
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default Page;
