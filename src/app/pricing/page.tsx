"use client"
import PricingCards from '@/components/pricing/PricingCards'
import PricingHeroSection from '@/components/pricing/PricingHeroSection'
import Layout from '@/newLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <Layout>
      <PricingCards/>
      <PricingHeroSection/>
      </Layout>
    </div>
  )
}

export default page