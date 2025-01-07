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
    <div className="p-2 rounded-md transition-all h-[340px] md:mr-2 duration-300 ease-in-out border-2 mt-9  hover:-translate-y-9 hover:border-4 hover:border-[#9A00FF] cursor-pointer shadow-md ">
      <div className="flex justify-center">
        <img
          src={icon}
          alt={altText}
          className="w-[100px] h-auto object-contain"
        />
      </div>
      <div className="mt-4 hover:text-[#9A00FF]">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
