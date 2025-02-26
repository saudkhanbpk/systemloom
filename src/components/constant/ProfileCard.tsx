import React from "react";
import Image from "next/image";
import Linkedin from "../../../public/assets/icons/Vector.png";
import Link from "next/link";

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
    <div className="relative group max-w-xs mx-auto overflow-hidden">
     <div className="relative group w-full max-w-full">
     <Image
  src={imageUrl}
  alt={name}
  width={width} 
  height={height}
  className="w-[250px] md:h-[250px] h-[300px] object-cover transition-transform duration-300"
/>


        <div className="absolute inset-0 flex justify-center items-center bg-[#F4F6FCD4] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl cursor-pointer"
          >
            <Image src={Linkedin} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <div className="mt-2 p-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-center">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
