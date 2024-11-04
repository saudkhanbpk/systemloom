"use client";
import Register from '@/components/auth/Register'
import Layout from '@/newLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <Layout>
        <Register/>
      </Layout>
    </div>
  )
}

export default page