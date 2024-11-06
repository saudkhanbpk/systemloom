"use client";
import React from 'react';
import BlogDetails from '../../../../components/blog/blogDetails/BlogDetails';
import { useParams } from 'next/navigation';
import Layout from '@/newLayout';
import BlogHeroDetail from '@/components/blog/blogDetails/BlogHeroDetail';

const DetailPost: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string | string[] }; // Define type for `id`

  // Ensure `id` is always a string
  const postId = Array.isArray(id) ? id[0] : id;

  if (!postId) {
    return <div>Loading...</div>; // Handle loading or error state
  }

  return (
    <>
      <BlogHeroDetail/>
<BlogDetails params={{ title: postId }} />
    </>
    
  );
};

export default DetailPost;
