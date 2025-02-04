import { Metadata } from "next";
import BlogHeroDetail from "@/components/blog/blogDetails/BlogHeroDetail";
import BlogDetails from "@/components/blog/blogDetails/BlogDetails";
import axios from "axios";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.id;

  // Fetch blog data from your backend using axios
  const blog = await getBlogById(slug);

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `https://www.techcreator.co/blog/${slug}`,
    },
  };
}

async function getBlogById(slug: string) {
  try {
    const response = await axios.get(`https://techcreator-backend.onrender.com/api/v1/blogs/get/${slug}`);  
    return response.data.blog;  
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      title: "Blog not found",
      description: "The blog content could not be loaded.",
    };
  }
}

export default function DetailPost({ params }: PageProps) {
  const slug = params.id;

  if (!slug) {
    return <div>Blog not available at this time. Please check back later.</div>;
  }

  return (
    <>
      <BlogHeroDetail />
      <BlogDetails params={{ slug: slug }} />
    </>
  );
}
