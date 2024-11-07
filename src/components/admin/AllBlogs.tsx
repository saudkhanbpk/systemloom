// import React from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// // Define a type for the blog data
// interface Blog {
//   id: number;
//   image: string;
//   content: string;
//   tags: string[];
//   publishDate: string;
// }

// const AllBlogs: React.FC = () => {
//   // Sample blog data
//   const blogs: Blog[] = [
//     {
//       id: 1,
//       image: 'https://media.istockphoto.com/id/1830163120/photo/group-of-computer-programmers-talking-while-working-at-it-office.jpg?s=2048x2048&w=is&k=20&c=9kBhD3LKWrtIOvnA1Y7TNQ1Wde83uUBtJAofUFxK898=',
//       content: 'This is a sample blog content.',
//       tags: ['React', 'JavaScript'],
//       publishDate: '2023-11-04',
//     },
//     {
//       id: 2,
//       image: 'https://media.istockphoto.com/id/1830159907/photo/happy-ceo-offering-handshake-in-front-of-his-business-team-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=gLPcMu43smWQ5Sfbo37FJQX1QwnSGWFnS8uY8bSEVXM=',
//       content: 'Another blog content example.',
//       tags: ['Next.js', 'TypeScript'],
//       publishDate: '2023-11-03',
//     },
//     // Add more blog data as needed
//   ];

//   return (
//     <div className="my-10 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-2xl font-bold mb-5">All Blogs</h2>
//       {/* Scrollable container for small screens */}
//       <div className="overflow-x-auto md:w-[80vw] w-[65vw]">
//         <table className="min-w-full border border-gray-300  text-xs md:text-base"> {/* Smaller text on small screens */}
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="px-2 py-1 border md:text-base text-xs text-left">Image</th>
//               <th className="px-2 py-1 md:text-base text-xs border text-left">Content</th>
//               <th className="px-2 py-1 border md:text-base text-xs text-left">Tags</th>
//               <th className="px-2 py-1 border md:text-base text-xs text-left">Publish</th>
//               <th className="px-2 py-1 border md:text-base text-xs text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {blogs.map((blog) => (
//               <tr key={blog.id} className="hover:bg-gray-50">
//                 <td className="px-2 py-1 border">
//                   <img src={blog.image} alt="Blog" className="w-12 h-12 object-cover" /> {/* Smaller image */}
//                 </td>
//                 <td className="px-2 py-1 md:text-base text-xs text-nowrap border">{blog.content}</td>
//                 <td className="px-2 py-1 border">
//                   {blog.tags.map((tag, index) => (
//                     <span key={index} className="text-xs bg-blue-100 text-nowrap text-blue-700 rounded-full px-1 py-0.5 mr-1"> {/* Smaller tags */}
//                       {tag}
//                     </span>
//                   ))}
//                 </td>
//                 <td className="px-2 py-1 border text-nowrap">{blog.publishDate}</td>
//                 <td className="px-2 py-1 border text-center  space-x-1 flex justify-center"> {/* Adjusted spacing */}
//                   <button className="p-1 text-blue-500 hover:text-blue-700" aria-label="Edit">
//                     <FaEdit size={14} /> {/* Smaller icon */}
//                   </button>
//                   <button className="p-1 text-red-500 hover:text-red-700" aria-label="Delete">
//                     <FaTrash size={14} /> {/* Smaller icon */}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllBlogs;


"use client";
import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { IoMdAdd, IoMdArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { usePathname } from 'next/navigation';

// Define a type for the blog data
interface Blog {
  id: number;
  image: string;
  content: string;
  tags: string[];
  publishDate: string;
}

const AllBlogs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 5;
  const blogs: Blog[] = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1830163120/photo/group-of-computer-programmers-talking-while-working-at-it-office.jpg?s=2048x2048&w=is&k=20&c=9kBhD3LKWrtIOvnA1Y7TNQ1Wde83uUBtJAofUFxK898=",
      content: "This is a sample blog content.",
      tags: ["React", "JavaScript"],
      publishDate: "2023-11-04",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1830159907/photo/happy-ceo-offering-handshake-in-front-of-his-business-team-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=gLPcMu43smWQ5Sfbo37FJQX1QwnSGWFnS8uY8bSEVXM=",
      content: "Another blog content example.",
      tags: ["Next.js", "TypeScript"],
      publishDate: "2023-11-03",
    },
    // Add more blog data as needed
  ];

  // Filter blogs based on the search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <main className="max-w-7xl mx-auto bg-inline p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <button
            aria-label="Filter Blogs"
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50"
          >
            <MdFilterList className="mr-2" /> Filters
          </button>
          <button
            aria-label="Add Blog"
            className="flex items-center px-4 py-2 bg-[#9A00FF] text-white rounded-lg shadow-sm hover:bg-[#32044f]"
            >
            <IoMdAdd className="mr-2" /> Add Blog
          </button>
          <span className="text-gray-700">1 row selected</span>
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
            <tr className="bg-gray-50">
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input className="form-checkbox h-4 w-4 text-blue-600" type="checkbox" aria-label="Select All" />
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image <IoMdArrowDown className="inline ml-2" />
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Content <IoMdArrowDown className="inline ml-2" />
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
            {displayedBlogs.map((blog, index) => (
              <tr key={`${blog.id}-${index}`}>
                <td className="px-6 py-4 border-b border-gray-200">
                  <input className="form-checkbox h-4 w-4 text-blue-600" type="checkbox" aria-label={`Select blog ${blog.id}`} />
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <img
                    alt="Blog preview"
                    className="h-10 w-10 rounded object-cover"
                    src={blog.image}
                    width="40"
                    height="40"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">{blog.content}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 mr-1">
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">{blog.publishDate}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                  <button aria-label="Delete Blog" className="text-gray-500 hover:text-gray-700">
                    <FaRegTrashCan />
                  </button>
                  <button aria-label="Edit Blog" className="text-gray-500 hover:text-gray-700 ml-2">
                    <FiEdit2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0 p-3">
          <button
            aria-label="Previous Page"
            className={`px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 ${
              currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
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
            className={`px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 ${
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default AllBlogs;
