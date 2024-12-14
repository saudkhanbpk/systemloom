"use client";
import PricingCards from "@/components/pricing/PricingCards";
import Head from "next/head";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Transparent Pricing Plans | Affordable Business Solutions</title>
        <meta
          name="description"
          content="Explore TechCreator’s transparent pricing plans for web development, app development, and marketing services. Flexible solutions designed to fit your budget and goals."
        />
        <link rel="canonical" href="https://www.techcreator.co/pricing" />
      </Head>
      <div>
        <PricingCards />
      </div>
    </>
  );
}

export default Pricing;
