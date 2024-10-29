import Image, { StaticImageData } from 'next/image';
import defaultImage from '../../../public/assets/Rectangle 21855.png';

interface FramedFeatureSectionProps {
  heading?: string;
  description?: string;
  imageSrc?: StaticImageData | string;
}

const FramedFeatureSection: React.FC<FramedFeatureSectionProps> = ({
  heading = "Heading",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and",
  imageSrc = defaultImage,
}) => {
  return (
    <div className="w-full md:w-[95%] mx-auto p-4 md:p-8">
      <div className="relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-[100%] bg-[#9A00FF] p-6 md:p-12 text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              {heading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed md:w-[450px]">
              {description}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] mt-6 md:mt-0 md:-ml-8 z-10">
            <div className="relative bg-gray-100 w-full md:w-auto">
              <Image
                src={imageSrc}
                alt="Feature illustration"
                className="w-full h-[300px] md:h-[500px] object-cover"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramedFeatureSection;
