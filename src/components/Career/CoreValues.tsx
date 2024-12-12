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
          Throughout everything we do at TechCreator, our core values guide us. Inspire our team, shape our culture, and ensure that our clients receive exceptional results.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 space-x-2 space-y-2 sm:space-y-0 ">
          <ValueCard
            icon={sunGlasses}
            title="Be You"
            description="Celebrating individuality while nurturing an environment in which everyone is heard, valued and respected."
          />
          <ValueCard
            icon={sunGlasses}
            title="Strive to Grow"
            description="Become shaped through continuous evolution and exploration of ideas in ways to open the door to personal and professional development."
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-end gap-5 w-full">
          <ValueCard
            icon={sunGlasses}
            title="Push the Boundaries"
            description="Do not believe in mediocrity but rather value the amazing ideas by which new solutions can be created."
          />
          <ValueCard
            icon={sunGlasses}
            title="Strive to Impact"
            description="In your unwavering conviction to make a difference, create solutions that would be most relevant to clients and the communities in which we engage."
          />
          <ValueCard
            icon={sunGlasses}
            title="Unite As One"
            description="We come together, combining all that we have to reach a common target and build lasting relationships"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-start gap-5 w-full">
          <ValueCard
            icon={sunGlasses}
            title="Be Transparent"
            description="Open communication, clear expectations to empower trust, and honesty in everything we say and do."
          />
          <ValueCard
            icon={sunGlasses}
            title="Take Pride"
            description="With every project we execute, put your heart into it and take pride in the work we accomplish."
          />
          <ValueCard
            icon={sunGlasses}
            title="Have Fun"
            description="Because work is more than just about doing tasks; it is about work, passion, creativity, and sharing an amazing journey with the team."
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
