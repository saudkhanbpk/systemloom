"use client"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FC } from 'react';

interface StatItemProps {
  value: number;
  label: string;
}

const StatItem: FC<StatItemProps> = ({ value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="text-center text-white">
      <div className="text-[50px] font-medium leading-[40px] font-inter mb-2">
        {inView ? (
          <CountUp
            start={0}
            end={value}
            duration={2.5}
            suffix="+"
          />
        ) : (
          `0+`
        )}
      </div>
      <div className="text-[30px] font-medium leading-[40px] font-inter">{label}</div>
    </div>
  );
};

const ProjectsCount: FC = () => {
  return (
    <div className="relative bg-[#9A00FF] py-8 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          <StatItem value={90} label="Clients" />
          <StatItem value={70} label="Countries" />
          <StatItem value={35} label="Products" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCount;


