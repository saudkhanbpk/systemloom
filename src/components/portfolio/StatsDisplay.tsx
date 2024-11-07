import React from 'react';
import Image from 'next/image';
import portfolio1 from "../../../public/assets/portfolioImages/portfolio1.png";
import portfolio2 from "../../../public/assets/portfolioImages/portfolio2.png";
import portfolio3 from "../../../public/assets/portfolioImages/portfolio3.png";

const StatsDisplay: React.FC = () => {
  return (
    <div className='my-28 flex flex-col gap-3 md:flex-row bg-[#F1EEE4] rounded-md w-full md:w-fit p-4 md:p-8 mx-auto'>

      {/* dev1 */}
      <div className='flex flex-col gap-3'>
        {/* Image Row */}
        <div className='flex flex-wrap gap-2 w-full justify-center md:w-[500px] border-2'>
          <Image src={portfolio1} alt='laptop_Image' width={338} height={170} className="object-cover" />
          <Image src={portfolio2} alt='mobile_image' width={150} height={150} className="object-cover" />
        </div>

        {/* Stats and Central Image */}
        <div className='flex flex-col md:flex-row items-center gap-5'>
          
          {/* Stats Column */}
          <div className='flex md:flex-col flex-row gap-4 text-center'>
            <div className='bg-[#A7B8FF] text-white p-4 py-8 rounded-3xl w-full sm:w-auto'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>98%</h1>
              <p className='text-sm sm:text-base'>Training Completion</p>
            </div>
            <div className='bg-[#5E2E53] text-white p-4 py-8 rounded-3xl w-full sm:w-[250px]'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>4.7</h1>
              <p className='text-sm sm:text-base'>Employee Satisfaction</p>
            </div>
          </div>

          {/* Center Image */}
          <div className='w-full sm:w-auto flex justify-center'>
            <Image src={portfolio3} alt='computer_image' width={240} height={200} className="object-cover" />
          </div>
        </div>
      </div>

      {/* dev2 */}
      <div className='flex md:flex-col flex-row gap-3 mt-6 md:mt-0 justify-center items-center'>
  <div className='py-2 p-2 px-2 w-[180px] sm:w-[280px] h-[200px] sm:h-[240px] rounded-3xl bg-[#006A60] text-white text-center'>
    <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold'>98%</h1>
    <p className='text-sm sm:text-base'>Client Satisfaction</p>
  </div>
  <div className='py-2 p-2 px-2 sm:w-[280px] w-[180px] h-[200px] sm:h-[240px] rounded-3xl bg-[#FFD572] text-green-900 text-center'>
    <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold'>100%</h1>
    <p className='text-sm sm:text-base'>Success Rate</p>
  </div>
</div>

    </div>
  );
};

export default StatsDisplay;
