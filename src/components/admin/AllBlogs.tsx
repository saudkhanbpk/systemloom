'use client';
import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";
import Link from 'next/link';
import { IoMdAdd, IoMdArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { backend_url } from "@/newLayout";
import axios from "axios";
import { toast } from "react-toastify";
import { deleteblog } from "@/redux/blogSlice";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import { useRouter } from "next/navigation";

// Define a type for the blog data
interface Blog {
  _id: string;
  image: string | { imageUrl: string }; 
  content: string;
  tags: string[];
  createdAt: any;
  publish: boolean;
  title: string;
}

const AllBlogs: React.FC = () => {
  useGetAllBlogs()
  const { blogs } = useSelector((state: any) => state.blogs);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 5;

  const filteredBlogs = Array.isArray(blogs) ? blogs.filter((blog: Blog) =>
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const dispatch = useDispatch();
  const router = useRouter()

  const handleEdit = (blogId: string) => {
    router.push(`/admin/create-blog?blogId=${blogId}`);
  };

  

  

  const [isDeleting, setIsDeleting] = useState(false);

  const deletedblogHandler = async (id: any) => {
    setIsDeleting(true);
    try {
      const res = await axios.delete(`${backend_url}/api/v1/blogs/delete/${id}`, { withCredentials: true });
      if (res.data.success) {
        dispatch(deleteblog(id));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.error("Error while deleting blog:", error);
      toast.error("Error deleting blog");
    } finally {
      setIsDeleting(false);
    }
  };
  
  
  
  return (
    <main className="max-w-7xl mx-auto bg-inline lg:p-6">
      <header className="flex flex-col md:flex-row justify-between md:items-center mb-4 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <button
            aria-label="Filter Blogs"
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50"
          >
            <MdFilterList className="mr-2" /> Filters
          </button>
          <Link href="/admin/create-blog" passHref>
            <button
              aria-label="Add Blog"
              className="flex items-center px-4 py-2 bg-[#9A00FF] text-white rounded-lg shadow-sm hover:bg-[#32044f] text-nowrap"
            >
              <IoMdAdd className="mr-2" /> Add Blog
            </button>
          </Link>
          {/* <span className="text-gray-700">1 row selected</span> */}
        </div>
        <div className="relative w-full md:w-auto">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            type="text"
            aria-label="Search Blogs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </header>

      <section className="overflow-x-auto shadow rounded-lg bg-white">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 text-nowrap">
              {/* <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input className="form-checkbox h-4 w-4 text-blue-600" type="checkbox" aria-label="Select All" />
              </th> */}
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image <IoMdArrowDown className="inline ml-2" />
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title <IoMdArrowDown className="inline ml-2" />
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags <IoMdArrowDown className="inline ml-2" />
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Publish Date <IoMdArrowDown className="inline ml-2" />
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions <IoMdArrowDown className="inline ml-2" />
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {displayedBlogs.map((blog: Blog, index: number) => (
              <tr key={`${blog._id}-${index}`}>
                {/* <td className="px-6 py-4 border-b border-gray-200">
                  <input className="form-checkbox h-4 w-4 text-blue-600" type="checkbox" aria-label={`Select blog ${blog._id}`} />
                </td> */}
                <td className="px-6 py-4 border-b border-gray-200">
                  <img
                    alt="Blog preview"
                    className="h-10 w-10 rounded object-cover"
                    src={(typeof blog.image === "string") ? blog.image : blog.image.imageUrl}
                    width="40"
                    height="40"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900 text-nowrap">{blog.title}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                  {blog.tags.map((tag: string, index: number) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 mr-1">
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900 text-nowrap">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                  <button aria-label="Delete Blog" className="text-gray-500 hover:text-gray-700" onClick={() => deletedblogHandler(blog._id)} disabled={isDeleting} >
                    <FaRegTrashCan />
                  </button>
                  <button onClick={() => handleEdit(blog._id)} aria-label="Edit Blog" className="text-gray-500 hover:text-gray-700 ml-2">
                    <FiEdit2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0 p-3 ">
          <button
            aria-label="Previous Page"
            className={`px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            aria-label="Next Page"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default AllBlogs;
