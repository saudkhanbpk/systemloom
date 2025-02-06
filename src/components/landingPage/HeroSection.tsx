'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const Slider: React.FC = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} transitionTime={1000}>
      {/* Slide 1 - Video */}
<div className="relative h-screen">
  <video autoPlay loop muted className="w-full h-full object-cover ">
    <source src="/assets/homepage/backgroundVideo01.webm" type="video/webm" />
  </video>
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white p-5">
    <h2 className="text-6xl font-bold">Develop your <span className='text-purple-600'>Business</span><br/> to Accelerate Growth</h2>
    <p className="text-lg mt-4 max-w-4xl">
      We&apos;re inspired by new technology and have dedicated our careers to exploring and harnessing it.
      We are in the business of solving problems. Entrepreneurs empower us to turn ideas into lightning-fast
      solutions that revolutionize industries.
    </p>
    <Link
      href="/contact"
      rel="noopener noreferrer"
      className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition"
    >
      Automate your Business
    </Link>
  </div>
</div>


      {/* Slide 2 - Video */}
      <div className="relative h-screen">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/homepage/backgroundVideo02.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-5">
          <h2 className="text-4xl font-bold">Transform Your <span className='text-green-600'>Business</span> <br/> with a Free AI Landing Page </h2>
          <p className="text-lg mt-4 max-w-4xl">TechCreator offers AI-powered landing pages, delivered in just 1-2 days. Our custom designs boost engagement and streamline operations at an affordable price. Join industry leaders and embrace digital transformation. Claim your free AI landing page now.</p>
          <Link
            href="/contact"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Slide 3 - Video */}
      <div className="relative h-screen">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/homepage/backgroundVideo03.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-5">
        <h2 className="text-4xl font-bold">Empower Your <span className='text-red-600'>Company</span></h2>
<p className="text-lg mt-4 max-w-4xl">Unlock new potential and accelerate growth by optimizing operations and driving efficiency with the right solutions.</p>

          <Link
            href="/contact"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
