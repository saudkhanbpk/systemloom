import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  currentIndex?: number;
  style: boolean;
  altText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  style,
  altText,
}) => {
  return (
    <div
      className="p-2 rounded-md  transition-transform duration-300 ease-in-out border-2 hover:translate-y-8 hover:border-4 hover:border-[#7A4AFF] cursor-pointer shadow-md"
      
    >
      <div className="flex justify-center">
        <img
          src={icon}
          alt={altText} 
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div className="mt-4 hover:text-[#7A4AFF]">
        <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
        <p className="text-gray-600 text-lg ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
