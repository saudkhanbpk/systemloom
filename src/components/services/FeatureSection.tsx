import Image from 'next/image';

interface FeatureSectionProps {
  heading?: string;
  description?: string;
  image?: string;
  
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  heading ,
  description,
  image=""
}) => {
  return (
    // <div className="w-full max-w-6xl mx-auto p-4 relative">
    //   <div className="flex relative flex-col-reverse md:flex-row md:items-center">
    //     {/* Image Container */}
    //     <div className="absolute top-28 left-[-70px] z-10 border md:w-[400px] md:h-[400px] w-full h-auto mb-4">
    //       <Image
    //         src={image}
    //         alt="Feature section image"
    //         className="object-cover rounded-lg"
    //         layout="fill"
    //         priority
    //       />
    //     </div>

    //     {/* Text Container */}
    //     <div className="bg-[#9A00FF] w-full   p-5">
    //       <div className=" md:w-[400px] mx-auto  border ">
    //         <h2 className="font-inter font-bold text-[24px] md:text-[45.25px] leading-tight md:leading-[70.4px] text-[#FFFFFF]">
    //           {heading}
    //         </h2>
    //         <p className="font-inter font-medium text-[14px] md:text-[16px] text-[#FFFFFF]">
    //           {description}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:mt-12 relative xl:px-20   ">
  <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px] lg:h-[450px] z-10">
    <Image
      src={image}
      alt="Feature section image"
      width={300} 
      height={450}
      className=" lg:w-[400px] lg:h-[450px] mx-auto lg:absolute lg:left-30 lg:top-10 shadow-xl"
    />
  </div>
  <div className="bg-[#9A00FF] w-full max-w-[800px] lg:max-w-none lg:flex-grow lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 lg:ml-[-40px] xl:ml-[-100px]">
    <div className="text-white xl:py-20 xl:px-60">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h1>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{description}</p>
    </div>
  </div>
</div>
  );
};

export default FeatureSection;
