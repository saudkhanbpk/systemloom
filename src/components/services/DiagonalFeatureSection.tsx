import React from 'react';

interface Section {
  heading: string;
  description: string;
  imageSrc: string;
}

interface DiagonalFeatureSectionProps {
  heading?: string;
  description?: string;
  imageSrc?: string;
}

const DiagonalFeatureSection: React.FC<DiagonalFeatureSectionProps> = ({
  heading = "Heading",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and",
  imageSrc = "https://s3-alpha-sig.figma.com/img/ec03/02bf/7afeaa73f91b17dc7103499bdb12f005?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ToY1RBKqDYSwPpMEuJ5FSI0NSY19oDKCKDjfobxTJ6AKYE5VlcfOq4m6~AdqqnNwE19O8TGH7Nnqn8GTSFKvdeCUFBevKlB2JyfM~jl9SUuluGVfK9Hfv1Y4FU8foSaP9~T6BARx0j07JwAIcDbmi~S-0uvCgK0CsQ1JG8~ifJzhJb9wcfO8FsjEbtHfX9Z9ieifaOwCgO1HfnKj7eD7mK6MT6k90DAelqzO2TXEKqV39jaahzTPbvtKn8NpoH00VQilBWhSR6ZueueRbEiXBhQBMHrklexzxXD5SwMsXDFlmwiBzpO25XtTKVWnLw-Uj96pxNtS-vTli4lAQ3VhCA__",
}) => {
  const sections: Section[] = [
    { heading, description, imageSrc },
    { heading, description, imageSrc },
    { heading, description, imageSrc },
  ];

  return (
    <div className="w-full md:w-[90%] py-16 mx-2 sm:mx-auto p-4 bg-white rounded-lg overflow-hidden shadow-md mb-10">
      {sections.map((section, index) => (
        <div key={index} className="relative mb-32">
          <div
            className={`flex md:gap-32 flex-col-reverse md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image container */}
            <div className="relative w-full md:w-[42%] flex justify-center items-center ">
              <div className="absolute -bottom-10 md:right-24 w-[250px] h-[300px] md:w-[413px] md:h-[482px] bg-[#9A00FF]" />
              <div className="relative z-10 w-full h-full overflow-hidden">
                <img
                  src={section.imageSrc}
                  alt="Feature illustration"
                  className="w-full h-full object-cover mt-16 sm:mt-0 md:w-[413px] md:h-[482px]"
                />
              </div>
            </div>
            {/* Text container */}
            <div className="w-full md:w-1/2 mt-10 justify-center">
              <h2 className="text-[32px] md:text-[40px] font-semibold mb-4 text-[#000000]">
                {section.heading}
              </h2>
              <p className="font-inter font-normal text-[#000000] text-lg">
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
