import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useGetAllTestimonial from '@/hooks/useGetAllTestimonial';


interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  testimonial: string;
  reviewScreenshot: string; // Add screenshot prop
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  testimonial,
  reviewScreenshot,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-6 text-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-cover w-20 h-20"
        />
      </div>
      <h3 className="font-bold text-xl mb-2 text-center">{name}</h3>
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="font-normal leading-6 text-base mb-2 text-center">{`"${testimonial}"`}</p>

      {isHovered && reviewScreenshot && (
        <div className="absolute top-0 left-0 w-full h-full  bg-white bg-opacity-105 flex justify-center items-center">
          <img
            src={reviewScreenshot}
            alt="Testimonial Screenshot"
            className="object-cover max-w-[500px] max-h-[500px]"
          />
        </div>
      )}
    </div>
  );
};


const ClientTestimonialsSection: React.FC = () => {
  useGetAllTestimonial(); 
  const { testimonials } = useSelector((state: RootState) => state.testimonials);

  // Carousel settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    smallTablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="py-16">
      <div className="mx-auto px-4">
        <h2 className="text-[35px] font-bold text-center text-purple-600 mb-2">
          CLIENT TESTIMONIALS
        </h2>
        <p className="text-2xl text-center font-medium mb-12">
          What they say about us
        </p>
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          removeArrowOnDeviceType={['mobile', 'tablet']}
          arrows={false}
          showDots
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial._id}
              name={testimonial.clientName}
              image={testimonial.profilePicture || '/default-profile.png'}
              rating={testimonial.rating}
              testimonial={testimonial.review}
              reviewScreenshot={testimonial.reviewScreenshot || '/default-screenshot.png'} 
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};


export default ClientTestimonialsSection;
