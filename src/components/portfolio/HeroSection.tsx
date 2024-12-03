import staticImage from '../../../public/assets/portfolioImages/Frame 5073.png';
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-black text-white h-auto py-20 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl px-10 font-bold mb-6">OUR PORTFOLIO</h1>
        <div className="flex flex-col md:flex-row  items-center">
          <div className="md:w-2/3 px-10 mb-8 md:mb-0  md:pr-8">
            <p className="text-sm md:text-base mb-4 ">
            At TechCreator, we specialize in creating custom software solutions tailored to your business needs. Our portfolio showcases a diverse range of projects, from intuitive mobile apps to complex web platforms. With a focus on quality and innovation, we turn your vision into reality, helping your business thrive in the digital world.
            </p>
          </div>
          <div className="md:w-2/3 relative flex  justify-center md:justify-end">
            <div className="relative md:absolute md:-top-56 md:right-0 w-1/2  md:w-[480px]">
              <Image src={staticImage} width={600} height={600} alt="Portfolio Image" layout="intrinsic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
