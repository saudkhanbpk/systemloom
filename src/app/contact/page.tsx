"use client"
import ContactUs from '@/components/contact/Contactus'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>
       <Head>
        <link rel="canonical" href="https://www.techcreator.co/contact" />
      </Head>
      <>
      <ContactUs/>
      </>
    </>
  )
}

export default page