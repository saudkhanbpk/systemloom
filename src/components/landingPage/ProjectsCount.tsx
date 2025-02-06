"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FC } from "react";
import successCompanyImage from "../../../public/assets/homepage/our-people-our-success.webp";

interface StatItemProps {
  value: number;
  label: string;
}

const StatItem: FC<StatItemProps> = ({ value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="md:text-start text-center text-white">
      <div className="md:text-[100px] text-[50px] font-medium leading-[40px] font-inter mb-2">
        {inView ? <CountUp start={0} end={value} duration={2.5} suffix="+" /> : `0+`}
      </div>
      <div className="text-[30px] mt-8 font-medium leading-[40px] font-inter">{label}</div>
    </div>
  );
};

const ProjectsCount: FC = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat md:h-[80vh] h-screen flex flex-col justify-between py-10"
      style={{ backgroundImage: `url(${successCompanyImage.src})` }} // ✅ Full background image
    >
      {/* ✅ Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* ✅ Heading at the Top */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl text-purple-600 font-bold">
          Our People, Our Success
        </h2>
      </div>

      {/* ✅ Stats Section at the Bottom */}
      <div className="relative z-10 text-center text-white md:mt-auto mb-20 mt-10 ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 ">
            <StatItem value={90} label="Clients" />
            <StatItem value={70} label="Countries" />
            <StatItem value={35} label="Products" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCount;
