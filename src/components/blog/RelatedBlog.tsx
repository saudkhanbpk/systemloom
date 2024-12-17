import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image'; // Next.js Image component
import Link from 'next/link'; // Next.js Link component

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
    <div className="container mb-10 mt-10  px-16   ">
      <div className="flex flex-wrap justify-center  items-center md:w-[450px]  gap-3">
        {relatedBlogs.map((blog: any) => (
          <div key={blog._id || Math.random()} className="">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full space-x-2 h-auto sm:h-[430px]">
              <Image
                src={blog.image?.imageUrl || '/path/to/default-image.jpg'}
                alt={blog.image?.altDescription || blog.title || 'Blog Image'}
                width={350}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Link href={`/blog/blogDetail/${createSlug(blog.title || 'Untitled')}`}>
                  <h2 className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer">
                    {blog.title || 'Untitled Blog'}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{truncateText(blog.description, 200)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlog;
