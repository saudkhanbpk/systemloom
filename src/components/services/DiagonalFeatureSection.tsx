import React from 'react';
import Image, { StaticImageData } from "next/image";
import firstHeadingImage from "../../../public/assets/ServiceDetailsImages/firstheading.webp";
import secondHeadingImage from "../../../public/assets/ServiceDetailsImages/secondheading.webp";
import thirdHeadingImage from "../../../public/assets/ServiceDetailsImages/thirdheading.webp";

interface Section {
  heading: string;
  description: string;
  imageSrc: string | StaticImageData;
}

interface DiagonalFeatureSectionProps {
  heading?: string;
  description?: string;
  imageSrc?: string | StaticImageData;
}

const DiagonalFeatureSection: React.FC<DiagonalFeatureSectionProps> = ({
  heading = "Heading",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and",
  imageSrc = '',
}) => {
  const sections: Section[] = [
    { heading, description, imageSrc: firstHeadingImage },
    { heading, description, imageSrc: secondHeadingImage },
    { heading, description, imageSrc: thirdHeadingImage },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 mx-auto bg-white rounded-lg overflow-hidden shadow-md mb-10 max-w-screen-xl">
      {sections.map((section, index) => (
        <div key={index} className="relative mb-16 md:mb-32">
          <div
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:gap-16 lg:gap-24`}
          >
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-[250px] h-[300px] md:w-[400px] md:h-[450px] lg:w-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <Image
                  src={section.imageSrc}
                  alt="Feature illustration"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                {section.heading}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700">
                {section.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagonalFeatureSection;
