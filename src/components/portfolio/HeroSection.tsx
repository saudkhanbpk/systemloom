import staticImage from '../../../public/assets/portfolioImages/Frame 5073.png';
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-black text-white h-auto py-20 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl px-10 font-bold mb-6">OUR PORTFOLIO</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 px-10 mb-8 md:mb-0 md:pr-8">
            <p className="text-sm md:text-base mb-4">
              At TechCreator Software Company, we specialize in crafting bespoke
              software solutions that cater to your unique business needs. Our portfolio
              showcases a range of successful projects, from intuitive mobile apps to
              complex web platforms. With a talented team dedicated to quality and
              innovation, we're your partner in turning ideas into impactful realities. Join
              us in the journey of transforming your vision into cutting-edge technology.
            </p>
          </div>
          <div className="md:w-1/3 relative flex justify-center md:justify-end">
            <div className="relative md:absolute md:-top-40 md:right-0 w-1/2  md:w-[380px]">
              <Image src={staticImage} alt="Portfolio Image" layout="intrinsic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
