"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

// Define the Post and Comment interfaces
interface Post {
  _id: string;
  title: string;
  date: string;
  createdAt: string; 
  updatedAt: string;
  readTime: string;
  image: { imageUrl: string; altDescription: string };
  content: string;
  description: string;
  tags: string[];
  publish: boolean;
}

interface Comment {
  id: string;
  name: string;
  content: string;
}

interface DetailPostProps {
  params: {
    title: string;
  };
}

// Function to create a slug from the title
const createSlug = (title: string): string =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const BlogDetails: React.FC<DetailPostProps> = ({ params }) => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const { title } = params;

  const post = (blogs as Post[]).find((p) => createSlug(p.title) === title);

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>(""); 

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim() && userName.trim()) {
      const newComment: Comment = {
        id: uuidv4(),
        name: userName,
        content: commentText,
      };
      setComments([...comments, newComment]);
      setCommentText("");
      setUserName("");
    }
  };

  if (!post) {
    return (
      <div className="text-center font-bold text-3xl mx-auto">
        Post not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-12 px-4 md:px-16 lg:px-24 my-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
          {post.title}
        </h1>
      </div>

      {/* Post Meta Info */}
      <div className="flex justify-center items-center space-x-4 text-sm sm:text-base text-gray-600 mb-8">
        <span className="font-semibold">Created At: </span>
        <span>{new Date(post.createdAt).toLocaleString()}</span>
        <span className="mx-2">•</span>
        <span className="font-semibold">{post.readTime} read</span>
      </div>

      {/* Main Content Section */}
      <div className="w-full mb-12">
        {/* Image Section */}
        <div className="w-full h-[400px] lg:h-[600px] relative mb-8">
          <Image
            src={post.image?.imageUrl}
            alt={post.image?.altDescription}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
        {post.tags.map((tag, index) => (
  <span
    key={index}
    className="bg-blue-100 text-blue-600 text-sm sm:text-base px-4 py-2 rounded-full shadow-md hover:bg-blue-200 transition duration-200"
  >
    #{tag.replace(/[\[\]"]+/g, '')} {/* Remove square brackets and double quotes */}
  </span>
))}

        </div>

        {/* Content Text */}
        <div className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-12">
          <p
            className="text-sm sm:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

        {/* Display Comments */}
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="font-bold text-lg text-gray-700">{comment.name}</p>
                <p className="text-sm sm:text-base text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">
            No comments yet. Be the first to comment!
          </p>
        )}

        {/* Add Comment Form */}
        <form onSubmit={handleCommentSubmit} className="space-y-6 mt-8">
  <div className="flex flex-col">
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Your Name"
      className="w-full p-4 border border-gray-300 rounded-md text-lg sm:text-xl"
      required
    />
  </div>
  <div className="flex flex-col">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your Email"
      className="w-full p-4 border border-gray-300 rounded-md text-lg sm:text-xl"
      required
    />
  </div>
  <div className="flex flex-col">
    <textarea
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      placeholder="Add a comment..."
      className="w-full p-4 border border-gray-300 rounded-md text-lg sm:text-xl"
      rows={4}
      required
    />
  </div>
  <button
    type="submit"
    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg sm:text-xl"
  >
    Post Comment
  </button>
</form>

      </div>
    </div>
  );
};

export default BlogDetails;
