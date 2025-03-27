import { Metadata } from "next";
import BlogHeroDetail from "@/components/blog/blogDetails/BlogHeroDetail";
import BlogDetails from "@/components/blog/blogDetails/BlogDetails";
import axios from "axios";

interface PageProps {
  params: { id: string };
}

// Define Blog Data Type
interface BlogData {
  title: string;
  description: string;
  metaTitle?: string;        // ✅ Optional metaTitle
  metaDescription?: string;  // ✅ Optional metaDescription
}

// Fetch blog data
async function getBlogById(slug: string): Promise<BlogData> {
  try {
    const response = await axios.get(`https://techcreator-backend.onrender.com/api/v1/blogs/get/${slug}`);

    if (response.data.blog) {
      return {
        title: response.data.blog.title,
        description: response.data.blog.description,
        metaTitle: response.data.blog.metaTitle,         
        metaDescription: response.data.blog.metaDescription, 
      };
    }

    return { title: "Blog Not Found", description: "No description available." };

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

// ✅ Generate Dynamic Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.id;
  const blog = await getBlogById(slug);

  return {
    title: blog.metaTitle || blog.title || "Blog Not Found", 
    description: blog.metaDescription || blog.description || "No description available.", 
    alternates: {
      canonical: `https://www.techcreator.co/blog/${slug}`,
    },
  };
}
