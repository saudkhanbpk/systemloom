import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

// Define a type for the blog data
interface Blog {
  id: number;
  image: string;
  content: string;
  tags: string[];
  publishDate: string;
}

const AllBlogs: React.FC = () => {
  // Sample blog data
  const blogs: Blog[] = [
    {
      id: 1,
      image: 'https://media.istockphoto.com/id/1830163120/photo/group-of-computer-programmers-talking-while-working-at-it-office.jpg?s=2048x2048&w=is&k=20&c=9kBhD3LKWrtIOvnA1Y7TNQ1Wde83uUBtJAofUFxK898=',
      content: 'This is a sample blog content.',
      tags: ['React', 'JavaScript'],
      publishDate: '2023-11-04',
    },
    {
      id: 2,
      image: 'https://media.istockphoto.com/id/1830159907/photo/happy-ceo-offering-handshake-in-front-of-his-business-team-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=gLPcMu43smWQ5Sfbo37FJQX1QwnSGWFnS8uY8bSEVXM=',
      content: 'Another blog content example.',
      tags: ['Next.js', 'TypeScript'],
      publishDate: '2023-11-03',
    },
    // Add more blog data as needed
  ];

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-5">All Blogs</h2>
      {/* Scrollable container for small screens */}
      <div className="overflow-x-auto md:w-[80vw] w-[65vw]">
        <table className="min-w-full border border-gray-300  text-xs md:text-base"> {/* Smaller text on small screens */}
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1 border md:text-base text-xs text-left">Image</th>
              <th className="px-2 py-1 md:text-base text-xs border text-left">Content</th>
              <th className="px-2 py-1 border md:text-base text-xs text-left">Tags</th>
              <th className="px-2 py-1 border md:text-base text-xs text-left">Publish</th>
              <th className="px-2 py-1 border md:text-base text-xs text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="px-2 py-1 border">
                  <img src={blog.image} alt="Blog" className="w-12 h-12 object-cover" /> {/* Smaller image */}
                </td>
                <td className="px-2 py-1 md:text-base text-xs text-nowrap border">{blog.content}</td>
                <td className="px-2 py-1 border">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-nowrap text-blue-700 rounded-full px-1 py-0.5 mr-1"> {/* Smaller tags */}
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="px-2 py-1 border text-nowrap">{blog.publishDate}</td>
                <td className="px-2 py-1 border text-center  space-x-1 flex justify-center"> {/* Adjusted spacing */}
                  <button className="p-1 text-blue-500 hover:text-blue-700" aria-label="Edit">
                    <FaEdit size={14} /> {/* Smaller icon */}
                  </button>
                  <button className="p-1 text-red-500 hover:text-red-700" aria-label="Delete">
                    <FaTrash size={14} /> {/* Smaller icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBlogs;
