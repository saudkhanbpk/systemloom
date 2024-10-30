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
        ${style ? "bg-white rounded-[20px] w-full max-w-[350px] p-6 md:p-8 flex flex-col mx-auto" : "bg-white rounded-lg p-6 flex flex-col justify-center items-center mx-auto"}
      `}
      style={{
        boxShadow: `${style ? "3px 4px 5px 0px #00000040" : "0px 4px 30px 0px #0000000D"}`,
      }}
    >
      <div className="mb-4  p-3 h-[58px] w-full bg-purple-100 rounded-full">
        <img src={icon} alt="image" className="w-[34px] h-[34px]" />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold mb-2 text-[#9A00FF]">{title}</h3>
        <p className={`font-inter font-normal text-base md:text-[20px] text-justify leading-6 md:leading-[31.4px] text-[#000000] ${style ? "" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
