import Image from 'next/image';
import backImage from '../../../public/assets/pricing_images/64fee6e4d18cb43d557f7c5d_6336046db53d9981fd90a40c_career-header-p-500.webp.png';
import frontImage from '../../../public/assets/pricing_images/List → Listitem.png';

const PricingHeroSection: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <div className="max-w-6xl mx-auto"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6 py-10 md:py-20 px-6 md:px-20">
        <div className="mt-6 md:mt-10 space-y-5">
          <h1 className="text-[#004540] font-inter font-medium text-3xl md:text-[45.25px]">
            Innovation Unleashed
          </h1>
          <p className="text-[#004540] font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
            Dive into the future with our state-of-the-art products and services. From software development to hardware solutions, we are the architects of your digital dreams.
          </p>
        </div>
        <div className="relative w-full md:w-[480px] h-[400px] md:h-[549.42px] mx-auto md:mx-0">
          <div className="relative z-10 w-full h-full">
            <div className="w-[600px]">
              <Image
                src={backImage}
                alt="Background"
                className="absolute inset-0 rounded-2xl"
                layout="fill" // Ensure it covers the parent div correctly
                objectFit="cover" // Maintain aspect ratio while covering
              />
            </div>
            <Image
              src={frontImage}
              alt="Foreground"
              className="absolute inset-0 rounded-2xl"
              layout="fill" // Ensure it covers the parent div correctly
              objectFit="cover" // Maintain aspect ratio while covering
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeroSection;
