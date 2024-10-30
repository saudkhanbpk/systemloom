import { FC } from 'react';
import { MapPin, Clock } from 'lucide-react';

// Define types for JobCard props
interface JobCardProps {
  category?: string;
  title?: string;
  location?: string;
  type?: string;
  company?: string;
  timeAgo?: string;
}

// JobCard component with props typed
const JobCard: FC<JobCardProps> = ({
  category = "Development",
  title = "Urgent webapp and mobile app",
  location = "Tokyo",
  type = "Freelance",
  company = "Techcreator",
  timeAgo = "6 months ago",
}) => {
  return (
    <div className="bg-[#F4F6FC] rounded-[24px] p-6 w-[360px] h-auto hover:shadow-lg transition-shadow   ">
      <div className=" flex items-center mb-3">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
          <span className="text-purple-600 text-sm font-medium">{category}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      <div className="flex items-center justify-between space-x-4 mb-4 text-gray-600">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1"></div>
          <span className="text-sm">{type}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-20">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm">T</span>
          </div>
          <span className="font-medium">{company}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

// JobsCard component as main container
const JobsCard: FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-12 px-10 ">
      <div>
        <p className="font-inter font-semibold text-[42px]">Open positions</p>
        <p className="font-inter font-normal text-[22px] text-[#838696]">Come join the team!</p>
      </div>
      <div className="flex flex-wrap  py-14 gap-10 justify-center">
  <JobCard />
  <JobCard
    category="Design"
    title="Urgent webapp and mobile app development"
    location="New York"
    type="Full-time"
    company="DesignCo"
    timeAgo="2 days ago"
  />
  <JobCard
    category="Design"
    title="Urgent webapp and mobile app development"
    location="New York"
    type="Full-time"
    company="DesignCo"
    timeAgo="2 days ago"
  />
  <JobCard
    category="Design"
    title="Urgent webapp and mobile app development"
    location="New York"
    type="Full-time"
    company="DesignCo"
    timeAgo="2 days ago"
  />
  <JobCard
    category="Design"
    title="Urgent webapp and mobile app development"
    location="New York"
    type="Full-time"
    company="DesignCo"
    timeAgo="2 days ago"
  />
  <JobCard
    category="Design"
    title="Urgent webapp and mobile app development"
    location="New York"
    type="Full-time"
    company="DesignCo"
    timeAgo="2 days ago"
  />
  <JobCard
    category="Design"
    title="Urgent webapp and mobile app development"
    location="New York"
    type="Full-time"
    company="DesignCo"
    timeAgo="2 days ago"
  />
</div>

    </div>
  );
};

export default JobsCard;
