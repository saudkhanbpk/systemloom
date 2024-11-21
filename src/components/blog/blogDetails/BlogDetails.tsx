import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";

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
  _id: string;
  name: string;
  email: string;
  user: { name: string };
  commentText: string;
  createdAt: string;
}

interface DetailPostProps {
  params: {
    title: string;
  };
}

// Utility function to create a slug from a post title
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')  
    .replace(/[^\w-]+/g, '');  
};

const BlogDetails: React.FC<DetailPostProps> = ({ params }) => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const user = useSelector((state: RootState) => state.auth.user);

  // console.log("blogs", blogs)
  const { title } = params;

  // Find the post that matches the title slug
  const post = (blogs as Post[]).find((p) => createSlug(p.title) === title);

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  useEffect(() => {
    if (post?._id) {
      axios
        .get(`${backend_url}/api/v1/comments/all/${post._id}`)
        .then((res) => {
          setComments(res.data.comments);
        })
        .catch((error:any) => {
          console.error("Error fetching comments:", error.message);
        });
    } else {
      console.log("Post ID is undefined. Skipping API call.");
    }
  }, [post?._id, comments]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Prevent empty comments
    if (commentText.trim()) {
      const newComment = {
        commentText: commentText,
        blogPostId: post?._id,
      };
  
      try {
        const res = await axios.post(
          `${backend_url}/api/v1/comments/add`,
          newComment,
          { withCredentials: true }
        );
  
        if (res.data.success) {
          const updatedComment = {
            ...res.data.comment,
            user: { name: user?.name }, 
          };
  
          // Append the new comment to the comments state
          setComments((prevComments) => [...prevComments, updatedComment]);
  
          // Show success message and clear input
          toast.success(res.data.message);
          setCommentText(""); // Clear the comment input box
        } else {
          toast.error(res.data.message); // Handle API error response
        }
      } catch (error: any) {
        // Display error messages from the server or generic error
        toast.error(error?.response?.data?.message || "An error occurred.");
        console.error("Error adding comment:", error.message);
      }
    }
  };
  

  const deleteHandler = async (commentId: string) => {
    try {
      const res = await axios.delete(`${backend_url}/api/v1/comments/delete/${commentId}`, {
        withCredentials: true,  // Ensure that the cookies are sent
      });
      if (res.data.success) {
        setComments((prevComments) => prevComments.filter(comment => comment._id !== commentId));
        if (res.data.success){
          toast.success(res.data.message);
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Error deleting comment");
      console.log("Error deleting comment:", error);
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
          {post.image?.imageUrl && (
            <Image
              src={post.image.imageUrl}
              alt={post.image.altDescription}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-sm sm:text-base px-4 py-2 rounded-full shadow-md hover:bg-blue-200 transition duration-200"
            >
              #{tag.replace(/[\[\]"]+/g, "")}
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
<div className="space-y-10 mt-12 bg-gray-50 p-8  ">
  <h2 className="text-4xl font-semibold text-gray-900 mb-8">Comments</h2>

  {/* Add Comment Form */}
  <form onSubmit={handleCommentSubmit} className="space-y-6 mt-10">
    <textarea
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      placeholder="Write your comment..."
      className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={4}
      required
    />
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
    >
      Post Comment
    </button>
  </form>

  {/* Scrollable Comments Container */}
  <div className="max-h-[450px] overflow-y-auto space-y-6 scrollbar-hidden">
  {comments.length > 0 ? (
  comments.map((comment) => (
    <div
      key={comment._id}
      className="bg-white rounded-lg p-1 px-4"
    >
      <div className="flex items-start space-x-4 mb-3">
        {/* User Avatar */}
        <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-lg">
          {comment.user?.name?.charAt(0).toUpperCase() || 'N/A'}
        </div>
        <div>
          <p className="font-semibold text-lg text-gray-800">{comment.user.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(comment.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      
      {/* Comment Text */}
      <div className="text-gray-700 md:px-16 text-md leading-relaxed mb-3">
        <p>{comment.commentText}</p>
      </div>

      {/* Delete Button (Only for the logged-in user's comment) */}
      {comment.user.name === user?.name && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => deleteHandler(comment._id)}
            className="text-red-600 text-sm font-medium hover:text-red-700 transition duration-300"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  ))
) : (
  <p className="text-gray-600 text-lg text-center">No comments yet. Be the first to comment!</p>
)}


  </div>

  
</div>




    </div>
  );
};

export default BlogDetails;
