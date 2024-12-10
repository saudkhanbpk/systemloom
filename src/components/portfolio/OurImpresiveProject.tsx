import Image from 'next/image';
import React from 'react';
import healthcareImage from '../../../public/assets/portfolioImages/healthcare.png';
import restaurantImage from '../../../public/assets/portfolioImages/restaurant.png';
import realstateImage from '../../../public/assets/portfolioImages/realstate.png';
import ecommerceImage from '../../../public/assets/portfolioImages/eccommerce.png';
import HospitalityImage from '../../../public/assets/portfolioImages/hospitality.png';
import greenEnergyImage from '../../../public/assets/portfolioImages/greenenergy.png';
import Link from 'next/link';

const OurImpressiveProject = () => {
  return (
    <div className=" my-20 px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Our <span className="text-[#9A00FF]">Impressive</span> Projects
        </h1>
        <p className="text-gray-500 mt-4">
          Explore some of our outstanding projects that demonstrate innovation and excellence.
        </p>
      </div>

      {/* Project Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {/* Single Project Card 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg md:w-[380px] border">
          {/* Project Image */}
          <Image
            src={healthcareImage}
            alt="Healthcare Project"
            width={400}
            height={400}
            className="transition-transform duration-300 w-full ease-in-out group-hover:scale-110"
          />
          {/* Title with Background */}
          <h1 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
            Healthcare
          </h1>
        </div>

        {/* card 2 */}
        <div className="relative group overflow-hidden rounded-lg md:w-[380px] shadow-lg">
          {/* Project Image */}
          <Image
            src={restaurantImage}
            alt="restaurant Project"
            width={400}
            height={400}
            className="transition-transform duration-300 ease-in-out w-full group-hover:scale-110"
          />
          {/* Title with Background */}
          <Link href="/restaurants-projects"><h1 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
          Restaurant
          </h1></Link>
        </div>

         {/* card 3 */}
         <div className="relative group overflow-hidden rounded-lg md:w-[380px] shadow-lg">
          {/* Project Image */}
          <Image
            src={realstateImage}
            alt="realstate Project"
            width={400}
            height={400}
            className="transition-transform duration-300 ease-in-out w-full group-hover:scale-110"
          />
          {/* Title with Background */}
          <h1 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
            Real Estate
          </h1>
        </div>


         {/* card 4 */}
         <div className="relative group overflow-hidden rounded-lg md:w-[380px] shadow-lg">
          {/* Project Image */}
          <Image
            src={ecommerceImage}
            alt="ecommerce Project"
            width={400}
            height={400}
            className="transition-transform duration-300 w-full ease-in-out group-hover:scale-110"
          />
          {/* Title with Background */}
          <h1 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
            E-commerce
          </h1>
        </div>


         {/* card 5 */}
         <div className="relative group overflow-hidden rounded-lg md:w-[380px] shadow-lg">
          {/* Project Image */}
          <Image
            src={HospitalityImage}
            alt="Hospitality Project"
            width={400}
            height={400}
            className="transition-transform w-full duration-300 ease-in-out group-hover:scale-110"
          />
          {/* Title with Background */}
          <Link href="/hospitality-projects">
          <h1 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
          Hospitality
          </h1>
          </Link>
          
        </div>


         {/* card 6 */}
         <div className="relative group overflow-hidden rounded-lg md:w-[380px] shadow-lg">
          {/* Project Image */}
          <Image
            src={greenEnergyImage}
            alt="greenEnergy Project"
            width={400}
            height={400}
            className="transition-transform duration-300 w-full ease-in-out group-hover:scale-110"
          />
          {/* Title with Background */}
          <h1 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 px-6 cursor-pointer py-6">
            Green Energy
          </h1>
        </div>
        
      </div>
    </div>
  );
};

export default OurImpressiveProject;
