"use client";
import React from 'react';
import { StaticImageData } from 'next/image';
import post1 from "../../../../public/assets/blog/Image (1).png";
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  date: string;
  readTime: string;
  image: StaticImageData;
  content: string;
  tags: string[];  // Add tags property
}

// Sample posts data
const posts: Post[] = [
  {
    id: 1,
    title: "Swap long video calls and emails for asynchronous video",
    date: "September 23, 2024",
    readTime: "13 min read",
    image: post1,
    content: `Uncover the hidden complexities of software engineering. Learn to manage technical challenges, stay updated, and balance innovation with stability for a successful career.`,
    tags: ["Software Engineering", "Career", "Productivity"],  // Example tags
  },

  {
    id: 2,
    title: "Exploring the impact of asynchronous communication on productivity",
    date: "September 23, 2024",
    readTime: "13 min read",
    image: post1,
    content: `Uncover the hidden complexities of software engineering. Learn to manage technical challenges, stay updated, and balance innovation with stability for a successful career.`,
    tags: ["Software Engineering", "Career", "Productivity"],  // Example tags
  },
  // Other posts...
];

// Function to create a slug
const createSlug = (title: string): string =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

interface DetailPostProps {
  params: {
    title: string;
  };
}

const BlogDetails: React.FC<DetailPostProps> = ({ params }) => {
  const { title } = params;

  // Find post by slug
  const post = posts.find((p) => createSlug(p.title) === title);

  if (!post) {
    return <div className='text-center font-bold text-3xl mx-auto'>Post not found.</div>;
  }

  return (
    <div className="pt-8 lg:px-28 w-[1200px] ">

      {/* Title Section */}
      <div className="mt-9">
        <h1 className="text-xl sm:text-2xl lg:text-3xl  font-bold leading-tight">
          {post.title}
        </h1>
      </div>

      {/* Post Meta Info */}
      <div className="mt-6 text-sm sm:text-base">
        <span className="font-bold">Updated:</span>
        <span> {post.date}</span>
        <span className="font-bold mx-2">•</span>
        <span className='font-semibold'>{post.readTime}</span>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-9 max-w-full">
        {/* Image Section */}
        <div className="w-full lg:w-[650px]">
          <Image src={post.image} alt="Post Image" width={650} height={400} layout="responsive" />
        </div>

         {/* Tags Section */}
         <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Content Text */}
        <div className="text-sm py-6">
          <p className='text-gray-600 text-xl'>{post.content}</p>
        </div>

       
      </div>
    </div>
  );
};

export default BlogDetails;
