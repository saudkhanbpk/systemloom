import Image, { StaticImageData } from 'next/image';
import sunGlasses from '../../../public/assets/careerImages/face-sunglasses 1.png';

interface ValueCardType {
  icon: StaticImageData | string; 
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardType> = ({ icon, title, description }) => (
  <div className="bg-[#FFFFFF] w-[240px] h-[240px] -top-2 p-6 rounded-[24px] shadow-sm hover:shadow-md">
    <div className="flex justify-between">
      <div className="flex items-center mb-4">
        <h3>
          <span className="font-normal text-[14] font-inter">{title.split(" ")[0]}</span> <br />
          <span className="font-normal text-[24px] font-inter">
            {title.split(" ")[1]} {title.split(" ")[2]}
          </span>
        </h3>
      </div>
      <div className="font-inter font-normal text-base leading-7 text-[#838696]">
        {typeof icon === 'string' ? (
          <img src={icon} alt="icon" className="w-5 h-5 text-purple-600" />
        ) : (
          <Image src={icon} alt="icon" className="w-5 h-5 text-purple-600" />
        )}
      </div>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const CoreValues: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-32">
      <div className="flex">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our core values</h2>
          <p className="text-gray-600 max-w-2xl">
            We value true innovation and giving our people freedom to find their own creative solutions to the challenges we face.
            We're all in the same boat - It's time to begin the voyage.
          </p>
        </div>
        <div className="flex justify-between gap-5">
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
        <div className="flex justify-end gap-5 w-full">
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
        <div className="flex justify-start gap-5 w-full">
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
