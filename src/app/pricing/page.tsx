"use client"
import PricingCards from '@/components/pricing/PricingCards'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <div>
      <Head>
        <title>Pricing of TechCreator’s Services</title>
        <meta
          name="description"
          content="Explore affordable and flexible pricing plans at TechCreator. We design software solutions to scale with your business needs. Find the perfect plan today and empower your business online."
        />
        <link rel="canonical" href="https://www.techcreator.co/pricing" />
      </Head>
      <>
      <PricingCards/>
      </>
    </div>
  )
}

export default page