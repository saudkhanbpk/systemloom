import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image'; 
import Link from 'next/link'; 

// Utility function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (!text) return '';
  return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
};

// Utility function to create a slug
const createSlug = (title: string) => {
  return title
    ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    : 'untitled';
};

interface RelatedBlogProps {
  excludeBlogId?: string; 
}

const RelatedBlog: React.FC<RelatedBlogProps> = ({ excludeBlogId }) => {
  // Fetch blogs from Redux state
  const blogs = useSelector((state: RootState) => state.blogs.blogs);

  // Filter blogs to exclude the current blog
  const relatedBlogs = blogs?.filter((blog: any) => blog._id !== excludeBlogId).slice(0, 3) || [];

  return (
    <div className="container mb-10 mt-10 mx-auto cursor-pointer md:px-8  xl:px-16 px-4 grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
    {relatedBlogs.map((blog: any) => (
      <div key={blog._id || Math.random()} >
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:h-[380px]">
          <Image
            src={blog.image?.imageUrl || '/path/to/default-image.jpg'}
            alt={blog.image?.altDescription || blog.title || 'Blog Image'}
            width={350}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-2">
            <div className="line-clamp-6">
              <Link href={`/blog/blogDetail/${createSlug(blog.title || 'Untitled')}`}>
                <h2 className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer">
                  {blog.title || 'Untitled Blog'}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{truncateText(blog.description, 200)}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  

  );
};

export default RelatedBlog;
