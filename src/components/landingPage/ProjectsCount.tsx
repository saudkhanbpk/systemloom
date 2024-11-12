// import necessary libraries
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FC } from 'react';

// Define the props for StatItem
interface StatItemProps {
  value: number;
  label: string;
}

// StatItem component
const StatItem: FC<StatItemProps> = ({ value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="text-center  text-white">
    <div className="text-[50px] font-medium leading-[40px] font-inter mb-2">
    <span className="text-4xl">+</span>
      {inView ? <CountUp start={0} end={value} duration={2.5} /> : 0}
    </div>
    <div className="text-[30px] font-medium leading-[40px] font-inter">{label}</div>
  </div>
  );
};

// ProjectsCount component
const ProjectsCount: FC = () => {
  return (
    <div className="relative bg-purple-600 py-8 overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-[190px] object-cover opacity-70"
        >
          <source
            src="/assets/vecteezy_digital-waves-motion-background-video-animation_3006226.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          <StatItem value={60} label="Clients" />
          <StatItem value={60} label="Countries" />
          <StatItem value={60} label="Products" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCount;
