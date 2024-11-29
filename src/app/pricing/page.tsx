"use client"
import PricingCards from '@/components/pricing/PricingCards'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.techcreator.co/pricing" />
      </Head>
      <>
      <PricingCards/>
      </>
    </div>
  )
}

export default page