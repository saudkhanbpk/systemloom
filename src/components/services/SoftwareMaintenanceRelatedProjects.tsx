"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend_url } from '@/newLayout'; 
import Image from 'next/image';
import { FaEye } from 'react-icons/fa'; 

// Define a type for the project data
type Project = {
  _id: string;
  title: string;
  description: string;
  category: string;
  projectScreenshot: string;
  createdAt: string;
  updatedAt: string;
  figmaLink: string;
  githubLink: string;
  websiteLink: string;
};

const SoftwareMaintenanceRelatedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/v1/project/all`);
        if (response.data.success) {
          setProjects(response.data.projects);
        } else {
          console.error("No projects found");
          setProjects([]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        alert("Failed to load projects, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects by category 'web-development'
  const filteredProjects = projects
  .filter((project) => project.category === "web-development")
  .slice(0, 6);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  // Handle the redirect to the website link
  const handleRedirect = (websiteLink: string) => {
    window.open(websiteLink, '_blank');
  };

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
                    <div key={project._id} className="relative overflow-hidden group">
                      {/* Main Feature Image */}
                      <Image
                        src={project.projectScreenshot}
                        alt={project.title}
                        className="h-64 md:h-[300px] rounded-md border-2 object-fill"
                        width={500}
                        height={500}
                      />
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

            {/* View All Button (Optional) */}
            <div className="text-center mt-12">
              {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                View All
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* RecentWorks section end */}
    </div>
  );
};

export default SoftwareMaintenanceRelatedProjects;
