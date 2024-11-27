"use client";
import Register from '@/components/auth/Register'
import Layout from '@/newLayout'
import Head from 'next/head';
import React from 'react'

const page = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.techcreator.co/register" />
      </Head>
      <>
        <Register/>
      </>
    </div>
  )
}

export default page