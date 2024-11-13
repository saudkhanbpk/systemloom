import Image, { StaticImageData } from 'next/image';
import sunGlasses from '../../../public/assets/careerImages/face-sunglasses 1.png';

interface ValueCardType {
  icon: StaticImageData | string; 
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardType> = ({ icon, title, description }) => (
  <div className="bg-[#FFFFFF] w-[240px] h-auto -top-2 p-6 rounded-[24px] shadow-md">
    <div className="flex justify-between">
      <div className="flex items-center mb-4">
        <h3>
          <span className="font-normal text-[14] text-black font-inter">{title.split(" ")[0]}</span> <br />
          <span className="font-bold text-[24px] text-black font-inter">
            {title.split(" ")[1]} {title.split(" ")[2]}
          </span>
        </h3>
      </div>
      <div className="font-inter font-normal text-base leading-7 text-[#838696]">
        
          <Image src={icon} alt="icon" className="w-5 h-5 text-purple-600" />
        
      </div>
    </div>
    <p className="text-gray-600  mt-8">{description}</p>
  </div>
);

const CoreValues: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:mt-44 mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 space-x-3 ">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our core values</h2>
          <p className=" max-w-2xl">
            We value true innovation and giving our people freedom to find their own creative solutions to the challenges we face.
            We're all in the same boat - It's time to begin the voyage.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 space-x-2 space-y-2 sm:space-y-0 ">
          <ValueCard
            icon={sunGlasses}
            title="Be You"
            description="We embrace diversity, and provide freedom and flexibility."
          />
          <ValueCard
            icon={sunGlasses}
            title="Strive to Grow"
            description="We embrace diversity, and provide freedom and flexibility."
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-end gap-5 w-full">
          <ValueCard
            icon={sunGlasses}
            title="Push the Boundaries"
            description="We embrace diversity, and provide freedom and flexibility."
          />
          <ValueCard
            icon={sunGlasses}
            title="Strive to Impact"
            description="We embrace diversity, and provide freedom and flexibility."
          />
          <ValueCard
            icon={sunGlasses}
            title="Unite As One"
            description="We embrace diversity, and provide freedom and flexibility."
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-start gap-5 w-full">
          <ValueCard
            icon={sunGlasses}
            title="Be Transparent"
            description="We embrace diversity, and provide freedom and flexibility."
          />
          <ValueCard
            icon={sunGlasses}
            title="Take Pride"
            description="We embrace diversity, and provide freedom and flexibility."
          />
          <ValueCard
            icon={sunGlasses}
            title="Have Fun"
            description="We embrace diversity, and provide freedom and flexibility."
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
