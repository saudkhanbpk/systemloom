import { Metadata } from "next";
import BlogHeroDetail from "@/components/blog/blogDetails/BlogHeroDetail";
import BlogDetails from "@/components/blog/blogDetails/BlogDetails";
import axios from "axios";

// Define PageProps with correct typing for params
interface PageProps {
  params: { id: string }; // Correct type definition for dynamic routes
}

// Fetch blog data
async function getBlogById(slug: string): Promise<{ title: string; description: string }> {
  try {
    const response = await axios.get(`https://techcreator-backend.onrender.com/api/v1/blogs/get/${slug}`);
    return response.data.blog || { title: "Blog Not Found", description: "No description available." };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { title: "Blog Not Found", description: "No description available." };
  }
}

// Page component
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

// Fix TypeScript issue by explicitly defining params as required
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.id; // Access the id from params

  const blog = await getBlogById(slug); // Fetch blog data using the slug

  return {
    title: blog?.title || "Blog Not Found", // Set title or fallback text
    description: blog?.description || "No description available.", // Set description or fallback text
    alternates: {
      canonical: `https://www.techcreator.co/blog/${slug}`, // Set canonical URL
    },
  };
}
