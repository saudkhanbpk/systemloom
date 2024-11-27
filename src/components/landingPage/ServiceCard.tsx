import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  currentIndex?: number;
  style: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  style,
}) => {
  return (
    <div
  className={`
    ${style ? "bg-white rounded-[20px] w-full max-w-[350px] p-4 md:p-6 flex flex-col mx-auto" : "bg-white rounded-lg p-4 flex flex-col justify-center items-center mx-auto"}
    transition-transform duration-300 ease-in-out hover:translate-y-8 hover:border-2 hover:border-[#bb7fe3] cursor-pointer
  `}
  style={{
    boxShadow: `${style ? "3px 4px 5px 0px #00000040" : "0px 4px 30px 0px #0000000D"}`,
  }}
>
  <div className="flex justify-center">
    <img src={icon} alt="icon" className="w-[100px] h-[100px] object-contain" />
  </div>
  <div className="mt-4">
    <h3 className="text-xl font-semibold mb-2 text-[#9A00FF]">{title}</h3>
    <p className={`font-inter font-normal leading-6 text-base md:text-[18px] text-justify text-[#000000] ${style ? "" : "text-gray-600"}`}>
      {description}
    </p>
  </div>
</div>

  );
};

export default ServiceCard;
