import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import RelatedBlog from "../RelatedBlog";

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
  // const user = useSelector((state: RootState) => state.auth.user);

  // console.log("blogs", blogs)
  const { title } = params;

  // Find the post that matches the title slug
  const post = (blogs as Post[]).find((p) => createSlug(p.title) === title);

  

  if (!post) {
    return (
      <div className="text-center font-bold text-3xl mx-auto">
        Post not found.
      </div>
    );
  }

  return (
    <>
    <div className="container mx-auto pt-12 px-4 md:px-16 lg:px-24 my-8 ">
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
        {/* <span className="mx-2">•</span> */}
        {/* <span className="font-semibold">{post.readTime} read</span> */}
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

    </div>

<div className="">
<h1 className="text-center text-3xl font-bold ">Related Blogs</h1>
<div>
<RelatedBlog excludeBlogId={post._id} />
</div>
</div>
</>
  );
};

export default BlogDetails;
