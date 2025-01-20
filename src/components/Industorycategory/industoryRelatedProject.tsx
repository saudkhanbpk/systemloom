"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useGetAllProjects from "@/hooks/useGetAllProjects";

interface IndustryProjectsProps {
  slug: string;
}
const IndustryRelatedProjects: React.FC<IndustryProjectsProps> = ({ slug }) => {
  useGetAllProjects();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const { projects } = useSelector((state: RootState) => state.projects);

  const filteredProjects = projects.filter((project) =>
    project.industry.includes(slug)
  );

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProjects.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const showPagination = filteredProjects.length > itemsPerPage;

  return (
    <div>
      

      {/* Projects section */}
      <div className="grid grid-cols-1 md:grid-cols-2  md:px-8 px-3 gap-3 mx-auto my-10">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <div
              key={project._id}
              className="flex flex-col bg-white border border-black text-gray-800 rounded-md overflow-hidden"
            >
              <div>
                <Image
                  src={project.projectScreenshot || "/path/to/fallback-image.jpg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-[250px]"
                />
              </div>
              <div className="flex flex-col p-6 space-y-4">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-base text-gray-600">{project.description}</p>
                <div className="flex gap-3 flex-wrap text-nowrap">
                  {project.websiteLink && (
                    <button
                      onClick={() => window.open(project.websiteLink, "_blank")}
                      className="py-2 px-5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
                    >
                      Website Link
                    </button>
                  )}
                  {project.figmaLink && (
                    <button
                      onClick={() => window.open(project.figmaLink, "_blank")}
                      className="py-2 px-5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
                    >
                      Figma Link
                    </button>
                  )}
                  {project.githubLink && (
                    <button
                      onClick={() => window.open(project.githubLink, "_blank")}
                      className="py-2 px-5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
                    >
                      GitHub Link
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center">
            Sorry, no projects are available right now. Please check back later!
          </p>
        )}
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="flex justify-center items-center gap-4 my-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
          >
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`p-1 px-3 ${
                  currentPage === number
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                } rounded-md hover:bg-gray-400 transition-all`}
              >
                {number}
              </button>
            ))}
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(filteredProjects.length / itemsPerPage)}
            className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default IndustryRelatedProjects;
