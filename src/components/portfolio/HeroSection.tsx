import staticImage from '../../../public/assets/portfolioImages/Frame 5073.png';
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-black text-white h-auto md:py-20 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto mt-32 md:mt-0 md:p-0 p-2 md:py-32">
        <h1 className="text-3xl md:text-5xl md:px-10 px-2 font-bold md:text-start text-center mb-6">Our Portfolio</h1>
        <div className="flex flex-col md:flex-row  items-center">
          <div className="md:w-2/3 md:px-10 px-2 mb-8 md:mb-0  md:pr-8">
            <p className="text-base md:text-lg mb-4 text-center md:text-start">
            TechCreator delivers impactful solutions customized to each client's needs. Our portfolio shows how we have helped businesses achieve their goals through innovative designs, seamless development, and strategic marketing. From Marketing to Development, we help you grow your business in every aspect.
            </p>
          </div>
          <div className="md:w-2/3 relative flex  justify-center md:justify-end">
            <div className="relative md:absolute md:-top-56 md:-right-9 sm:-right-24 w-full sm:w-[480px]  md:w-[510px]">
              <Image src={staticImage} width={600} height={600} alt="Tailor-made impactful solutions for your growth using design, development, and marketing" layout="intrinsic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
