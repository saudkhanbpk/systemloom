// import React from 'react';
// import Buttons from './Buttons';
// import Image, { StaticImageData } from 'next/image';

// interface HeroSectionProps {
//   title: string;
//   description: React.ReactNode; 
//   links?: { href: string; text: string }[];
//   image: string | StaticImageData;
// }

// const Herosection: React.FC<HeroSectionProps> = ({ title, description, image }) => {
//   return (
//     <div>
//       {/* Hero Section Start */}
//       <div className="bg-black w-full md:px-0 px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0 justify-around items-center text-white">
//         {/* Left Section */}
//         <div className="w-full md:w-[50vw] text-center md:text-left">
//           <h1 style={{ lineHeight: 1.2 }} className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
//             {title}
//           </h1>
//           <p className="text-base lg:text-lg mt-3 leading-relaxed">
//             {description} 
//           </p>
//           <Buttons />
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-auto flex justify-center">
//           <Image
//             src={image}
//             alt={title}
//             width={300}
//             height={200}
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
//             className="rounded-lg shadow-md object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Herosection;


import React from "react";
import Buttons from "./Buttons";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  description: React.ReactNode;
  image: string | StaticImageData;
}

const Herosection: React.FC<HeroSectionProps> = ({ title, description, image }) => {
  return (
    <div className="bg-black w-full text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-32">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="text-lg lg:text-xl opacity-80 leading-relaxed">{description}</p>
        <div className="flex justify-center md:justify-start">
          <Buttons />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          priority
          className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Herosection;
