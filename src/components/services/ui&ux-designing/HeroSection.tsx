import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ServicesSectionType {
  title: string;
  image: string | StaticImageData;
  description: string;
  image2?: string | StaticImageData;
}

const HeroSection: React.FC<ServicesSectionType> = ({
  title,
  image,
  description,
  image2,
}) => {
  return (
    <div className="bg-black w-full h-auto"> {/* Added w-full here */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="text-white">
            <h1 className="font-medium text-3xl md:text-5xl md:mb-6 leading-tight md:mt-32 max-w-2xl">
              {title}
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          <div className="relative mt-10">
            <div className="relative z-10 transform translate-y-12 translate-x-4">
              <Image
                src={image}
                alt="Portfolio preview 1"
                className=" shadow-xl opacity-75 bg-blue-800 rounded-full"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
              />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
