import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ServicesSectionType {
  title: string;
  image: string | StaticImageData;
  description: string;
  image2?: string | StaticImageData;
}

const ServicesHeroSection: React.FC<ServicesSectionType> = ({
  title,
  image,
  description,
  image2,
}) => {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="text-white">
            <h1 className="font-medium text-[32px] md:text-[48px] md:mb-6 leading-tight md:mt-32 max-w-2xl">
              {title}
            </h1>
            <p className="text-[#FFFFFF] text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          <div className="relative mt-10">
            <div className="relative z-10 md:left-12 transform translate-y-12 translate-x-4">
              <Image
                src={image}
                alt="Portfolio preview 1"
                className="rounded-lg shadow-xl opacity-75"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            {image2 && (
              <div className="absolute top-0 z-20">
                <Image
                  src={image2}
                  alt="Portfolio preview 2"
                  className="w-full rounded-lg shadow-2xl"
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
