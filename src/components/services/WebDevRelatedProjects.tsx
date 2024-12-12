"use client";
import React from 'react';
import { FaEye } from 'react-icons/fa'; 
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';

// Define a type for the project data
type Project = {
  _id: string;
  title: string;
  description: string;
  category: string[];  
  projectScreenshot: string | undefined; 
  createdAt: string;
  updatedAt: string;
  figmaLink: string;
  githubLink: string;
  websiteLink: string | undefined;
};

const WebDevRelatedProjects = () => {
  // Access projects from Redux store
  const { projects } = useSelector((state: RootState) => state.projects);

  // Filter projects by category 'web-development'
  const filteredProjects = projects
    .filter((project) => project.category.includes("web-development"))
    .slice(0, 6);

  // Handle the redirect to the website link
  const handleRedirect = (websiteLink: string | undefined) => {
    if (websiteLink) {
      window.open(websiteLink, '_blank');
    } else {
      alert("Website link is not available for this project.");
    }
  };

  if (projects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <div>
      {/* RecentWorks section start */}
      <div className="max-w-7xl mx-auto">
        <div className="py-16 px-4 ml-2 sm:ml-0">
          <div className="md:w-[92%] mx-auto">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Works</h2>
              <p className="mt-3 text-lg">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.
              </p>
            </div>

            {/* Works Section */}
            <div className="w-full">
              {filteredProjects.length > 0 ? (
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  {filteredProjects.map((project) => (
                    <div key={project._id} className="relative overflow-hidden group border-2 rounded-md">
                      {/* Main Feature Image */}
                      <Image
                        src={project.projectScreenshot || "/path/to/fallback-image.jpg"}  // Provide a fallback image if projectScreenshot is undefined
                        alt={project.title}
                        className="h-64 md:h-[300px] rounded-md  object-fill"
                        width={500}
                        height={500}
                      />
                      <p className='bg-[#9A00FF] p-2 text-lg text-white'>{project.title}</p>
                      {/* Eye Icon on Hover */}
                      <div
                        className="absolute inset-0 flex justify-center items-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 cursor-pointer"
                        onClick={() => handleRedirect(project.websiteLink)}
                      >
                        <FaEye className="text-white text-4xl" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // No projects found message
                <p className="text-center text-xl text-gray-500 mt-6">
                  No related projects available at the moment. Check back later!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* RecentWorks section end */}
    </div>
  );
};

export default WebDevRelatedProjects;
