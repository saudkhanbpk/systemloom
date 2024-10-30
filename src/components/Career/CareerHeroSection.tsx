import Image from 'next/image';
import CommonButton from '../common/Button';
import { FC } from 'react';
import CareerSectionImage from '../../../public/assets/careerImages/Rectangle 402.png';

const CareerHeroSection: FC = () => {
  return (
    <div>
      <div className="relative bg-black text-white h-[644px]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="mb-8 md:mb-12 p-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Be Who You Are. Do What You Love
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Are you at your best in an atmosphere of trust, knowhow, freedom and support,
              alongside talented and creative people just like you? That's our working style.
            </p>
            <CommonButton
              className="bg-[#9A00FF] hover:bg-purple-700 text-white px-6 py-3 rounded-[12px] transition-colors w-[228px] h-[48px]"
              title='Send your resume'
              handleClick={() => console.log("career")}
            />
          </div>
          <div className="relative">
            <div className="absolute lg:left-[308px] lg:-top-20 md:left-0 md:top-0 top-5 overflow-hidden w-full md:w-auto">
              <Image
                src={CareerSectionImage}
                alt="Team collaboration"
                className="w-full h-full rounded-[24px] md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSection;
