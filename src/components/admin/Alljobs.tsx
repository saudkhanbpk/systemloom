"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import { MapPin, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { RootState } from '@/redux/store'
import { FiEdit2 } from "react-icons/fi"
import { FaRegTrashCan } from "react-icons/fa6"

// JobCard component with typed props
interface JobCardProps {
  category: string;
  title: string;
  location: string;
  type: string;
  company: string;
  timeAgo: Date | string;
}

const JobCard: React.FC<JobCardProps> = ({
  category = "Development",
  title = "Urgent webapp and mobile app",
  location = "Tokyo",
  type = "Freelance",
  company = "Techcreator",
  timeAgo = new Date(),
}) => {
  // Convert `timeAgo` to Date object if it's a string
  const timeAgoFormatted = typeof timeAgo === 'string' ? new Date(timeAgo) : timeAgo
  const timeDistance = formatDistanceToNow(timeAgoFormatted, { addSuffix: true })

  return (
    <div className="bg-[#F4F6FC] rounded-[24px] p-6 md:w-[360px] w-[300px] h-auto hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
          <span className="text-purple-600 text-sm font-medium">{category}</span>
        </div>

        <div className='flex gap-3'>
          <FaRegTrashCan className='cursor-pointer'/>
          <FiEdit2 className='cursor-pointer'/>
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
  )
}

// Define props for the JobsCard component
interface JobsCardProps {
  searchTerm: string;
}

// JobsCard component to display the list of jobs
const JobsCard: React.FC<JobsCardProps> = ({ searchTerm }) => {
  // Define the type for Redux state
  const { allJobs } = useSelector((state: RootState) => state.job)

 // Filter jobs based on search term
const filteredJobs = allJobs?.filter(job =>
  job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.category?.toLowerCase().includes(searchTerm.toLowerCase())
)


  return (
    <div className="bg-[#FFFFFF] lg:px-10 px-3">
      <div className="flex flex-wrap py-9 lg:gap-10 gap-5 justify-start">
        {filteredJobs?.map((job) => (
          <div key={job._id}>
            <JobCard
              category={job.category}
              title={job.title}
              location={job.location}
              type={job.employmentType}
              company={job.company}
              timeAgo={job.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobsCard
