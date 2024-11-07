// jobCard.tsx (TypeScript version for Next.js)

import { useSelector } from 'react-redux';
import { MapPin, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { RootState } from '@/redux/store';



// JobCard component with typed props
interface JobCardProps {
  category: string;
  title: string;
  location: string;
  type: string;
  company: string;
  timeAgo: Date;
}

const JobCard = ({
  category = "Development",
  title = "Urgent webapp and mobile app",
  location = "Tokyo",
  type = "Freelance",
  company = "Techcreator",
  timeAgo = new Date(),
}: JobCardProps) => {
  // If timeAgo is a string, convert it to a Date object
  const timeAgoFormatted = typeof timeAgo === 'string' ? new Date(timeAgo) : timeAgo;
  const timeDistance = formatDistanceToNow(timeAgoFormatted, { addSuffix: true });

  return (
    <div className="bg-[#F4F6FC] rounded-[24px] p-6 md:w-[360px] w-[300px] h-auto hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
          <span className="text-purple-600 text-sm font-medium">{category}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>

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
          <span>{timeDistance}</span>
        </div>
      </div>
    </div>
  );
};

// JobsCard component to display the list of jobs
const JobsCard = () => {
  // Correct useSelector usage
  const { allJobs } = useSelector((state: RootState) => state.job);

  return (
    <div className="bg-[#FFFFFF] py-12 lg:px-10 px-3">
      <div>
        <p className="font-inter font-semibold text-[42px]">Open positions</p>
        <p className="font-inter font-normal text-[22px] text-[#838696]">Come join the team!</p>
      </div>
      <div className="flex flex-wrap py-14 lg:gap-10 gap-5 justify-center">
        {allJobs?.map((job) => (
          <JobCard
            key={job._id} // Assuming jobs have a unique _id
            category={job.category}
            title={job.title}
            location={job.location}
            type={job.employmentType}
            company={job.company}
            timeAgo={job.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
