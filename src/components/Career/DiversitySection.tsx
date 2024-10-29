
import Image,{StaticImageData} from 'next/image';
import { FC } from 'react';
import { Instagram } from 'lucide-react';
import image from "../../../public/assets/careerImages/andreea-avramescu-wR56AUlEsE4-unsplash 1.png";
import image1 from "../../../public/assets/careerImages/Mask group.png";
import image2 from "../../../public/assets/careerImages/thisisengineering-raeng-8Jw2WhafOOg-unsplash 1.png";
import image3 from "../../../public/assets/careerImages/Mask group (1).png";
import image4 from "../../../public/assets/careerImages/Mask group (2).png";

interface ImageProps {
  src: StaticImageData | string;
  alt: string;
}

interface DiversitySectionProps {
  images: ImageProps[];
}

const DiversitySection: FC<DiversitySectionProps> = ({ images }) => {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-inter  mb-4">
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

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <div className="rounded-2xl overflow-hidden h-64">
                <Image
                  src={image}
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-2xl overflow-hidden h-64">
                <Image
                  src={image1}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-[#651FFF] rounded-2xl p-8 flex flex-col items-center justify-center text-white">
              <Instagram className="w-12 h-12 mb-4" />
              <p className="text-lg font-medium mb-2">Follow us on</p>
              <p className="text-sm opacity-90">#IPPSIbrogueDeupload</p>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden h-64">
                <Image
                  src={image2}
                  alt="Team discussion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="rounded-2xl overflow-hidden h-64">
                <Image
                  src={image3}
                  alt="Office collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden h-64">
                <Image
                  src={image4}
                  alt="Office collaboration"
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
