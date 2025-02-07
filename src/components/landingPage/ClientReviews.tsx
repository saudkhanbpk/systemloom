'use client';

import Image from 'next/image';
import upworkstar from "../../../public/assets/aboutpage/upwork.svg"
import linkedinstar from "../../../public/assets/aboutpage/linkedin.svg"

const ClientReviews = () => {
  return (
    <section className=" text-white py-16 text-center">
      <h2 className="text-4xl font-semibold mb-4">
        Our clients simply love <span className="text-black">what we do</span>
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
      </p>
      <div className="flex justify-center flex-wrap gap-10">
        <div className="flex items-center gap-2 ">
          <Image src={upworkstar} alt="Upwork" width={50} height={50}  />
          <div className="text-center text-4xl">
            <div className="flex gap-1 text-green-500">
              {'★'.repeat(5)}
            </div>
            <p className="text-gray-300 text-xl">102 REVIEWS</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={linkedinstar} alt="Linkedin" width={50} height={50} className='rounded-md' />
          <div className="text-center text-4xl">
            <div className="flex gap-1 text-black">
              {'★'.repeat(5)}
            </div>
            <p className="text-gray-300 text-xl">82 REVIEWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
