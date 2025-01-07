"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";

// Function to create a slug from the title
const createSlug = (title: string | undefined): string =>
  title
    ? title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    : "untitled";

// Function to truncate HTML content to plain text
// const truncateText = (htmlContent: string, limit: number): string => {
//   const div = document.createElement("div");
//   div.innerHTML = htmlContent;
//   const textContent = div.textContent || div.innerText || "";
//   return textContent.length > limit
//     ? textContent.substring(0, limit) + "..."
//     : textContent;
// };

const BlogCards: React.FC = () => {
  useGetAllBlogs();
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate the index of the last and first blog on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Get the current blogs for the page
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to paginate
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div>
    {blogs.length === 0 ? (
      <p className="text-center text-gray-600 mt-10">
        Sorry, no blogs are available at the moment. Please check back later!
      </p>
    ) : (
      <>
        <div className="container mb-10 mt-10 mx-auto cursor-pointer max-w-7xl md:px-12 px-2 grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {currentBlogs.map((blog: any) => (
  <div key={blog._id}>
    <Link href={`/blog/blogDetail/${createSlug(blog.title)}`}>

    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:h-[390px]">
      <Image
        src={blog.image?.imageUrl || "/path/to/default-image.jpg"}
        alt={blog.image?.altDescription || blog.title}
        width={350}
        height={200}
        className="w-full h-48 object-cover"
      />
    <div className="md:p-3 p-1">
  <div className="line-clamp-6">
    <Link href={`/blog/blogDetail/${createSlug(blog.title)}`}>
      <h2 className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer">
        {blog.title}
      </h2>
    </Link>
    <p className="text-gray-600 mb-4">
      {blog.description}
    </p>
  </div>
</div>

    </div>
    </Link>
  </div>
))}

        </div>
        {/* Pagination Controls */}
        {blogs.length > blogsPerPage && (
          <div className="flex justify-center mb-6 items-center mt-8 space-x-4">
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
                      ? "bg-[#9A00FF] text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
        )}
      </>
    )}
  </div>
);
};
 

export default BlogCards;
