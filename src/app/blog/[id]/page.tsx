import { Metadata } from "next";
import BlogHeroDetail from "@/components/blog/blogDetails/BlogHeroDetail";
import BlogDetails from "@/components/blog/blogDetails/BlogDetails";
import axios from "axios";


interface PageProps {
  params: { id: string }; 
}

// Fetch blog data
async function getBlogById(slug: string): Promise<{ title: string; description: string }> {
  try {
    const response = await axios.get(`http://localhost:8000/api/v1/blogs/get/${slug}`);
    return response.data.blog || { title: "Blog Not Found", description: "No description available." };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { title: "Blog Not Found", description: "No description available." };
  }
}


export default function DetailPost({ params }: PageProps) {
  if (!params?.id) {
    return <div>Blog not available at this time. Please check back later.</div>;
  }

  return (
    <>
      <BlogHeroDetail />
      <BlogDetails params={{ slug: params.id }} />
    </>
  );
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.id; 

  const blog = await getBlogById(slug); 

  return {
    title: blog?.title || "Blog Not Found", 
    description: blog?.description || "No description available.", 
    alternates: {
      canonical: `https://www.techcreator.co/blog/${slug}`, 
    },
  };
}
