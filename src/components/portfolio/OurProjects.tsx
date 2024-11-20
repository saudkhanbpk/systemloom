'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Project } from '../../types/project';
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';



const OurProjects = () => {
  const { projects }: { projects: Project[] } = useSelector((store: RootState) => store.projects);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects: Project[] = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="my-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold">
          Our <span className="text-[#9A00FF]">Impressive</span> Projects
        </h1>
      </div>
      {currentProjects.map((project: Project) => (
        <div key={project._id} className="flex flex-col lg:flex-row justify-between bg-gray-100 rounded-lg p-6 shadow-lg mb-6">
          <div className="lg:w-[50%] w-full text-gray-800 mx-auto mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-[#9A00FF] mb-4">{project.title}</h2>
            <p className="text-lg mb-4">{project.description || 'No description provided.'}</p>
            <div className="flex space-x-4 mt-4">
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Website Link
                </a>
              )}
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#9A00FF] text-white rounded-md hover:bg-[#8A00D1] transition duration-300"
                >
                  Figma Link
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
                >
                  GitHub Link
                </a>
              )}
            </div>
          </div>
          <div className="lg:w-[45%] w-full">
            <Image
              src={project.projectScreenshot || '/placeholder-image.jpg'} // Add a default image path
              alt={`Screenshot of ${project.title}`}
              width={600}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center mt-8">
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-gray-800 text-white rounded-md disabled:opacity-50 hover:bg-gray-700 transition duration-300"
        >
          <AiOutlineArrowLeft size={20} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center mx-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? 'bg-[#9A00FF] text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-gray-800 text-white rounded-md disabled:opacity-50 hover:bg-gray-700 transition duration-300"
        >
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
