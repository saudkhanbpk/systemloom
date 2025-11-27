import React from "react";
import Image from "next/image";
// import ouTeamImage from "../../../public/assets/aboutpage/teamimage.png"

import Link from "next/link";

const Overview: React.FC = () => {
  return (
  
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10">
        {/* Images Section */}
       
        {/* <div className="w-full lg:w-1/2 flex justify-center">
      <Image src ={ouTeamImage} alt="our team"  width={500} height={400} className="rounded-lg object-contain" />
    </div> */}
      

        {/* Text Section */}
        <div className="w-full px-2">
          <h2 className="text-[#5de0e6] font-inter text-3xl md:text-4xl lg:text-5xl  font-semibold mb-6">
            About System Loom
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 font-bold">
            System Loom is where innovation meets smart craftsmanship. We Use modern technology
            and clear creative thinking to build digital solutions what are intelligent, scalable, and impactful.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
            From <span className="font-bold"> AI-based tools </span> to <span className="font-bold"> well-designed apps and websites, </span>  and <span className="font-bold"> marketing strategies 
            that deliver real results, </span> our team works as your complete digital partner. <br />
            Guided by our tagline - <span className="font-bold"> Weaving Intelligent Systems for the future </span> - We treat every
            project like a unique digital design, bringing together the right mix of <span className="font-bold"> design, development,
            and strategy </span> to create meaningful outcomes.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
            We dont't just build digital Products - <br />
            <span className="font-bold"> We create digital experiences that help brands grow and move forward. </span>
          </p>
        </div>
      </div>
  );
};

export default Overview;
