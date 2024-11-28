"use client";
import Head from 'next/head';
import BlogCards from '@/components/blog/BlogCards';
import BlogHeroSection from '@/components/blog/BlogHeroSection';
import useGetAllBlogs from '@/hooks/useGetAllBlogs';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


// Define types for the blog structure
interface Blog {
  _id: string;
  title: string;
  content: string;
  description: string;
  image: string | { imageUrl: string };  
  createdAt: string;
  updatedAt: string;
}

const Blog: React.FC = () => {
  useGetAllBlogs();
  const blogs = useSelector((state: RootState) => state.blogs.blogs);


  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting", 
    "headline": blogs[0]?.title || "Best Practices for SEO in 2024: Boost Your Rankings Like a Pro",
    "description": blogs[0]?.description || "In-depth SEO strategies for 2024 to help you dominate search engine results.", // Dynamic description
    "url": `https://www.techcreator.co/blog/${blogs[0]?._id}`, 
    "mainEntityOfPage": `https://www.techcreator.co/blog/${blogs[0]?._id}`, 
    "image": typeof blogs[0]?.image === 'string' ? blogs[0]?.image : blogs[0]?.image?.imageUrl || "https://res.cloudinary.com/tech-creator/image/upload/v1732124958/gn5g7n3qljgsph4xhfcp.webp", 
    "author": {
      "@type": "Person",
      "name": "Zakarya Khan",
      "url": "https://www.techcreator.co/about" 
    },
    "publisher": {
      "@type": "Organization",
      "name": "TechCreator", 
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.techcreator.co/assets/icons/Logo.png" 
      }
    },
    "datePublished": blogs[0]?.createdAt || "2024-11-25T08:00:00Z", 
    "articleBody": blogs[0]?.content || "Content coming soon..." 
  };
  

  return (
    <div>
      <Head>
        <link rel="canonical" href={`https://www.techcreator.co/blog/${blogs[0]?._id}`} />
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Head>
      <>
        <BlogHeroSection />
        <BlogCards />
      </>
    </div>
  );
};

export default Blog;
