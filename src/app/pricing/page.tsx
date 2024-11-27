"use client"
import PricingCards from '@/components/pricing/PricingCards'
import PricingHeroSection from '@/components/pricing/PricingHeroSection'
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
      <PricingHeroSection/>
      </>
    </div>
  )
}

export default page