"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import BlogHeroDetail from '@/components/blog/blogDetails/BlogHeroDetail';
import BlogDetails from '@/components/blog/blogDetails/BlogDetails';


const DetailPost: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string | string[] }; 

  // Ensure `id` is always a string
  const postId = Array.isArray(id) ? id[0] : id;

  if (!postId) {
    return <div>Blog not available at this time. Please check back later.</div>; 
  }

  return (
    <>
      <BlogHeroDetail/>
<BlogDetails params={{ slug: postId }} />
    </>
    
  );
};

export default DetailPost;
