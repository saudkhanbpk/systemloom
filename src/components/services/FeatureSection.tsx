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

    <div className="flex lg:relative md:flex-row flex-col justify-center mt-12 ">
      <div className="lg:absolute xl:top-6 top-16 left-8 sm:left-16 lg:left-36 border">
        <Image
          src={image}
          alt="Feature section image"
          width={300} 
          height={450}
          className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] lg:w-[300px] lg:h-[300px] xl:w-[300px] xl:h-[450px] mx-auto" 
        />
      </div>

      <div className="bg-[#9A00FF] w-full max-w-[800px] h-auto xl:h-[400px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14">
        <div className="flex flex-col text-white xl:ml-52 lg:ml-72  ">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h1>
          <p className="text-sm sm:text-base lg:text-lg">{description}</p>
        </div>
      </div>
    </div>
  
  );
};

export default FeatureSection;
