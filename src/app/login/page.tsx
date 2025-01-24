"use client";
import Login from "@/components/auth/login";
import Head from "next/head";
import { useEffect } from "react";


const page = () => {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  return (
    <>
        <link rel="canonical" href="https://www.techcreator.co/login" />
    <>
    
      <Login/>
    </>
    </>
  )
}

export default page
