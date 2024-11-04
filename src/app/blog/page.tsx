"use client"
import BlogCards from '@/components/blog/BlogCards'
import BlogHeroSection from '@/components/blog/BlogHeroSection'
import Layout from '@/newLayout'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <Layout>
      <BlogHeroSection/>
      <BlogCards />
      </Layout>
    </div>
  )
}

export default Blog