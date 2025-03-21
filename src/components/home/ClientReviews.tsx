"use client";
import Image from "next/image";
import upworkstar from "../../../public/assets/aboutpage/upwork.svg";
import linkedinstar from "../../../public/assets/aboutpage/linkedin.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

const scrollToContact = (event: React.MouseEvent) => {
  event.preventDefault(); // Stop default anchor behavior
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
const testimonials = [
  {
    image: "/assets/homepage/client1.jpg",
    name: "Aiden Clarke",
    company: "NextGen Tech",
    rating: 5,
    feedback: "They crafted a stunning website that truly represents our brand!",
  },
  {
    image: "/assets/homepage/client2.jpg",
    name: "Sophia Mitchell",
    company: "Web Creators",
    rating: 4,
    feedback: "The website is smooth, modern, and user-friendly. Great job!",
  },
  {
    image: "/assets/homepage/client3.jpg",
    name: "Liam Bennett",
    company: "Design Studio",
    rating: 5,
    feedback: "Superb development work! Highly satisfied with their service.",
  },
  {
    image: "/assets/homepage/client4.jpg",
    name: "Noah Reed",
    company: "Startup Solutions",
    rating: 5,
    feedback: "They brought our vision to life with a sleek and responsive site!",
  },
  {
    image: "/assets/homepage/client5.jpg",
    name: "Zara Ellis",
    company: "Digital Edge",
    rating: 4,
    feedback: "Professional and creative team. Loved working with them!",
  },
  {
    image: "/assets/homepage/client6.jpg",
    name: "Ethan Foster",
    company: "Ecom Boosters",
    rating: 5,
    feedback: "Our online store is now faster and more engaging than ever!",
  },
];



  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  
  const ClientReviews = () => {
    return (
      <div className="bg-gradient-to-r from-[#091424] to-[#031220] text-white py-16 px-4 md:px-8">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Feedback from <span className="text-purple-600">Our Customers</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            Proud to serve as the innovation partner for industry leaders.
          </p>
          <div className="flex justify-center flex-wrap gap-6 mb-10">
            {[{ image: upworkstar, reviews: "102 REVIEWS" }, { image: linkedinstar, reviews: "82 REVIEWS" }].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#0d2538] p-4 rounded-lg shadow-lg border border-purple-500 transition-transform duration-300 hover:scale-105"
              >
                <Image src={item.image} alt="logo" width={40} height={40} className="rounded-md" />
                <div className="text-center text-xl md:text-2xl">
                  <div className="flex gap-1 text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-400 text-sm md:text-lg">{item.reviews}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section className="mt-8 md:mt-12">
          <div className="max-w-7xl mx-auto">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <div className="bg-[#112240] p-6 rounded-lg shadow-lg border border-purple-500 flex flex-col md:flex-row items-center md:h-[190px] md:w-auto md:items-start transition-transform duration-300 md:hover:scale-105">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.company}</p>
                      <div className="flex justify-center md:justify-start text-yellow-400 mt-1">
                        {"★".repeat(testimonial.rating)}
                        {"☆".repeat(5 - testimonial.rating)}
                      </div>
                      <p className="text-gray-300 mt-2 italic">{testimonial.feedback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
  
        <div className="text-center mt-8 md:mt-12">
         
            <button  onClick={scrollToContact}  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-all flex items-center gap-2 mx-auto text-lg">
              Get Your Site Built <ArrowDownIcon className="w-5 h-5" />
            </button>
       
          <p className="text-sm text-gray-400 mt-2">USA Exclusive: 10% Off</p>
        </div>
      </div>
    );
  };
  
  export default ClientReviews;
