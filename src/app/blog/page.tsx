"use client"
import BlogCards from '@/components/blog/BlogCards'
import BlogHeroSection from '@/components/blog/BlogHeroSection'
import useGetAllBlogs from '@/hooks/useGetAllBlogs'
import React from 'react'

const Blog = () => {
  useGetAllBlogs()
  return (
    <div>
      <>
      <BlogHeroSection/>
      <BlogCards />
      </>
    </div>
  )
}

export default Blog