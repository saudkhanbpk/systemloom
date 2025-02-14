'use client'; // ✅ Ye client component rahega

import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import placeholderImage from "../../../public/assets/homepage/placeholder.jpg";
import Link from 'next/link';
import Image from 'next/image';

const Slider: React.FC<{ slides: any[] }> = ({ slides }) => {
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([0]);

  return (
    <ResponsiveCarousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      swipeable={true} // ✅ Swipe enable for mobile
      showIndicators={false}
      emulateTouch={true}
      transitionTime={700}
      onChange={(index) => {
        if (!loadedIndexes.includes(index)) {
          setLoadedIndexes((prev) => [...prev, index]);
        }
      }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-screen">
          {/* ✅ Optimized Lazy Load Video */}
          {loadedIndexes.includes(index) ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata" // ✅ Optimized Preload
              className="w-full h-full object-cover"
            >
              <source src={slide.videoSrc} type="video/webm" />
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={placeholderImage}
              alt="Slide Thumbnail"
              width={1920}
              height={1080}
              priority={index === 0}
              className="w-full h-full object-cover"
            />
          )}

          {/* ✅ Optimized Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6"
               style={{ background: "rgba(0, 0, 0, 0.6)" }}> {/* ✅ Background Overlay */}
            <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-center max-w-4xl leading-normal">
              <span>{slide.heading.split(slide.highlight)[0]}</span>
              <span className={slide.highlightColor}> {slide.highlight} </span>
              <span>{slide.heading.split(slide.highlight)[1]}</span>
            </h2>
            <p className="md:text-2xl text-lg mt-4 md:max-w-4xl text-center">{slide.description}</p>
            <Link href="/contact" rel="noopener noreferrer">
              <button className={`mt-4 px-6 py-3 ${slide.buttonColor} text-white font-semibold rounded-full transition`}>
                {slide.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Slider;
