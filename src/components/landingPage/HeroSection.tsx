'use client';

import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const slides = [
  {
    videoSrc: "/assets/homepage/backgroundVideo01.webm",
    heading: "Your All-in-One Solution for Websites, Mobile Apps & Custom Software",
    highlight: "Solution for Websites",
    highlightColor: "text-purple-600",
    description: `Empower your business with a team of experts dedicated to crafting tailor-made solutions that drive growth, efficiency, and success.`,
    buttonText: "Automate your Business",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    videoSrc: "/assets/homepage/aibakgroundvideo.mp4",
    heading: "AI-Powered Growth: Transforming Ideas into Industry Disruptors",
    highlight: "AI-Powered Growth:",
    highlightColor: "text-purple-600",
    description: `We use AI to drive innovation and accelerate business success. From startups to enterprises, our smart solutions transform bold ideas into game-changing technologies, ensuring smarter, faster, and more efficient results.`,
    buttonText: "Automate your Business",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    videoSrc: "/assets/homepage/shapping background video.mp4",
    heading: "Shaping the Future with Innovation",
    highlight: "Future",
    highlightColor: "text-purple-600",
    description: `We empower businesses to transform and lead through cutting-edge technology.`,
    buttonText: "Automate your Business",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  }
];

const Slider: React.FC = () => {
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([0]);
  

  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false} 
      swipeable={false}  
      showIndicators={false} 
      emulateTouch={false}
      transitionTime={700} 
      onChange={(index) => {
        if (!loadedIndexes.includes(index)) {
          setLoadedIndexes((prev) => [...prev, index]);
        }
      }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-screen">
          {/* Lazy Load Video */}
          {loadedIndexes.includes(index) ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={slide.videoSrc}  />
            </video>
          ) : (
            <img 
              alt="Slide Thumbnail" 
              className="w-full h-full object-cover" 
              loading="lazy" // ✅ Lazy load poster
            />
          )}

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white p-6">
            <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-center max-w-4xl">
              {slide.heading.split(slide.highlight).map((part, i) => (
                <span key={i}>
                  {part}
                  {i < slide.heading.split(slide.highlight).length - 1 && (
                    <span className={slide.highlightColor}> {slide.highlight} </span>
                  )}
                </span>
              ))}
            </h2>
            <p className="md:text-2xl text-lg mt-4 md:max-w-4xl text-center">{slide.description}</p>
            <Link href="/contact" rel="noopener noreferrer" className=' mt-4 rounded-full'>
              <button className={` px-6 py-3 ${slide.buttonColor} text-white font-semibold rounded-full transition`}>
                {slide.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;