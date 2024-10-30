

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Instagram } from 'lucide-react';
import image from "../../../public/assets/careerImages/andreea-avramescu-wR56AUlEsE4-unsplash 1.png";
import image1 from "../../../public/assets/careerImages/Mask group.png";
import image2 from "../../../public/assets/careerImages/thisisengineering-raeng-8Jw2WhafOOg-unsplash 1.png";
import image3 from "../../../public/assets/careerImages/Mask group (1).png";
import image4 from "../../../public/assets/careerImages/Mask group (2).png";

const DiversitySection: FC = () => {
  // Define the images array directly inside the component
  const images = [
    { src: image, alt: "Team meeting" },
    { src: image1, alt: "Team collaboration" },
    { src: image2, alt: "Team discussion" },
    { src: image3, alt: "Office collaboration" },
    { src: image4, alt: "Office collaboration" }
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold font-inter mb-4">
            We're from everywhere
          </h2>
          <p className="text-[#838696] font-normal font-inter text-[22px] leading-[35px]">
            Diversity and inclusion of all races, religions, orientations and
            background is, like our people, somethings that's integral to
            Deupload philosophy. We hire you at Deupload because you're
            awesome and talented - we welcome you to Deupload as your true
            self.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[#651FFF] rounded-2xl p-8 flex flex-col items-center justify-center text-white col-span-1 sm:col-span-2 md:col-span-1">
            <Instagram className="w-12 h-12 mb-4" />
            <p className="text-lg font-medium mb-2">Follow us on</p>
            <p className="text-sm opacity-90">#IPPSIbrogueDeupload</p>
          </div>

          <div className="col-span-1">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversitySection;


