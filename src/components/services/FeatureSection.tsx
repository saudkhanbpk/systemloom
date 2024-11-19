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
//     <div className="w-full max-w-6xl mx-auto p-6  relative">
//   <div className="flex flex-col-reverse md:flex-row md:items-center relative">
//     {/* Image Container */}
//     <div className="absolute top-28 left-[-50px] z-10 md:w-[400px] md:h-[400px] w-full h-auto mb-4">
//       <div className="relative w-full h-full border-4 border-[#FFFFFF] shadow-lg rounded-lg">
//         <Image
//           src={image}
//           alt="Feature section image"
//           className="object-cover rounded-lg"
//           layout="fill"
//           priority
//         />
//       </div>
//     </div>

//     {/* Text Container */}
//     <div className="bg-gradient-to-r from-[#9A00FF] to-[#6A00CC] w-full p-6 md:pl-96 h-[60vh] md:pr-12 rounded-lg shadow-lg">
//       <div className="md:w-[800px] mx-auto ">
//         <h2 className="font-sans font-extrabold text-[24px] md:text-[42px] leading-tight md:leading-[1.2] text-[#FFFFFF] mb-4">
//           {heading}
//         </h2>
//         <p className="font-sans font-medium w-[40vw] text-[14px] md:text-[16px] leading-relaxed text-[#FFFFFF]">
//           {description}
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

  
  <div className="flex flex-col lg:flex-row items-center md:px-32 lg:items-start  justify-center lg:mt-12 my-6  relative   ">
  <div className="relative lg:static lg:flex-shrink-0 lg:w-[300px]  lg:h-[450px] z-10">
    <Image
      src={image}
      alt="Feature section image"
      width={300} 
      height={450}
      className=" lg:w-[400px] lg:h-[450px]  mx-auto lg:absolute lg:left-20 lg:top-10 shadow-xl"
    />
  </div>
  <div className="bg-[#9A00FF] w-full max-w-[800px] lg:max-w-7xl lg:flex-grow lg:h-[450px] p-6 sm:p-10 lg:p-16 py-10 lg:py-14 mt-8 lg:mt-0 lg:ml-[-40px] xl:ml-[-100px]">
    <div className="text-white xl:py-20 lg:px-60">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h1>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed  md:w-[500px] xl:w-[700px]   text-wrap">{description}</p>
    </div>
  </div>
</div>
  );
};

export default FeatureSection;
