"use client";
import React, {  useState } from "react";
import Image from "next/image";
import healthcareImage from "../../../public/assets/portfolioImages/healthcare.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useGetAllProjects from "@/hooks/useGetAllProjects";

// Define a TypeScript type for a Project
// interface Project {
//   _id: string;
//   title: string;
//   description: string;
//   industry: string;
//   projectScreenshot: string; // Assuming the project has an image URL
//   websiteLink: string;
//   figmaLink: string;
//   githubLink: string;
// }

const RestaurantProject: React.FC = () => {
  useGetAllProjects()
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; 

  // Fetch projects from Redux store
  const { projects } = useSelector((state: RootState) => state.projects);
  // console.log("projects", projects)

  // Filter projects by category 'restaurants'
  const filteredProjects = projects.filter(
    (project) => project.industry.includes(("restaurants"))
  );

  // Get current projects based on the page
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Handle page changes
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

  const showPagination = filteredProjects.length > 6;

  return (
    <div>
      {/* Hero section */}
      <div className="relative bg-gray-900 text-white h-[500px] md:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={healthcareImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-15"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center">
          <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-5 md:mx-auto">
            <h1 className="font-semibold text-[32px] sm:text-[48px] md:text-[58px] font-poppins leading-[1.2] mb-0">
              Restaurant Projects
            </h1>
            <p className="md:text-xl">
            Let us take your restaurant business to another level of futuristic digital solutions through TechCreator Software Company. We develop point-of-sale systems, table reservation platforms, and online food delivery solutions according to your business needs so that you can run your business efficiently and thrive. With tailored and smartly crafted software, we can streamline operations, offer additional services to customers, and thus enhance revenues either for one or multiple chains.
            </p>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  w-[85vw] gap-3 mx-auto my-10">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <div
              key={project._id}
              className="flex flex-col bg-white border border-black text-gray-800 rounded-md overflow-hidden"
            >
              <div>
                <Image
                  src={project.projectScreenshot || "/path/to/fallback-image.jpg"} // Provide a fallback image
                  alt={project.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-[250px]"
                />
              </div>
              <div className="flex flex-col p-6 space-y-4">
                <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
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

export default RestaurantProject;
