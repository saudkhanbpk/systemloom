"use client";
import React, { useState } from 'react';
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
  tags: string[];
}

const posts: Post[] = [
  {
    id: 1,
    title: "Swap long video calls and emails for asynchronous video",
    date: "September 23, 2024",
    readTime: "13 min read",
    image: post1,
    content: `Uncover the hidden complexities of software engineering. Learn to manage technical challenges, stay updated, and balance innovation with stability for a successful career.
     Uncover the hidden complexities of software engineering. Learn to manage technical challenges, stay updated, and balance innovation with stability for a successful career.
     Uncover the hidden complexities of software engineering. Learn to manage technical challenges, stay updated, and balance innovation with stability for a successful career.`,
    tags: ["Software Engineering", "Career", "Productivity"],
  },
  // Other posts...
];

const createSlug = (title: string): string =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

interface Comment {
  id: number;
  name: string;
  content: string;
}

interface DetailPostProps {
  params: {
    title: string;
  };
}

const BlogDetails: React.FC<DetailPostProps> = ({ params }) => {
  const { title } = params;
  const post = posts.find((p) => createSlug(p.title) === title);

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim() && userName.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        name: userName,
        content: commentText,
      };
      setComments([...comments, newComment]);
      setCommentText('');
      setUserName('');
    }
  };

  if (!post) {
    return <div className='text-center font-bold text-3xl mx-auto'>Post not found.</div>;
  }

  return (
    <div className="pt-8 px-4 lg:px-28 my-6 max-w-4xl ">

      {/* Title Section */}
      <div className="mt-9">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
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
        <div className="w-full lg:w-[650px] mx-auto">
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
          <p className='text-gray-600 text-lg sm:text-xl'>{post.content}</p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Comments</h2>

        {/* Display Comments */}
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 p-4 rounded-md">
                <p className="font-bold text-sm sm:text-base">{comment.name}</p>
                <p className="text-gray-700 text-sm sm:text-base">{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">No comments yet. Be the first to comment!</p>
        )}

        {/* Add Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-6 space-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
              required
            />
          </div>
          <div className="flex flex-col">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm sm:text-base"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;
