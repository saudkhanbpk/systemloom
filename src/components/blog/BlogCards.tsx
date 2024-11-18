import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

// Function to create a slug from the title
const createSlug = (title: string | undefined): string =>
  title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : 'untitled';


// Function to truncate HTML content to plain text
const truncateText = (htmlContent: string, limit: number): string => {
  const div = document.createElement('div');
  div.innerHTML = htmlContent;
  const textContent = div.textContent || div.innerText || '';
  return textContent.length > limit ? textContent.substring(0, limit) + '...' : textContent;
};

const BlogCards: React.FC = () => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
console.log("blogs", blogs)

  return (
    <div className="container mb-10 mt-10 mx-auto cursor-pointer max-w-7xl grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-2 lg:grid-cols-3 w-full">
      {blogs.map((blog: any) => (
        <div key={blog._id} className="p-2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full space-x-2 h-auto  sm:h-[350px]">
            <Image
              src={blog.image?.imageUrl || '/path/to/default-image.jpg'}
              alt={blog.image?.altDescription || blog.title}
              width={350}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
            <Link href={`/blog/blogDetail/${createSlug(blog.title)}`}>
                <h2 className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer">
                  {blog.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{truncateText(blog.content, 100)}</p>
              {/* <div className="flex items-center mb-3">
                <Image
                  src="/path/to/default-author-image.jpg"
                  alt="Author"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Author Name</p>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;