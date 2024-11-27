"use client";
import Login from "@/components/auth/login";
import Head from "next/head";


const page = () => {
  
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.techcreator.co/login" />
      </Head>
    
    <>
      <Login/>
    </>
    </div>
  )
}

export default page
