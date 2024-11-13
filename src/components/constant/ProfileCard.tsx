import React from "react";
import Image from "next/image";
import Linkedin from "../../../public/assets/icons/Vector.png";

interface TeamProfile {
  name: string;
  position: string;
  imageUrl: string;
  linkedInUrl: string;
  width: number; 
  height: number; 
}


const ProfileCard: React.FC<TeamProfile> = ({
  name,
  position,
  imageUrl,
  linkedInUrl,
  width, 
  height 
}) => {
  return (
    <div className="relative group max-w-xs mx-auto overflow-hidden ">
      <div className="relative group w-[280px] ">
        <Image
          src={imageUrl}
          alt={name}
          width={width}  
          height={height} 
          style={{ height: `${height}px`, width: `${width}px` }}
          className="object-cover w-full h-full transition-transform duration-300"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-[#F4F6FCD4] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
          >
            <Image src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="mt-2 p-4 flex flex-col  items-center">
        <h2 className="text-lg font-semibold ">{name}</h2>
        <p className="">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
