import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import client1 from "../../../public/assets/landingPage/Ellipse 6.png"

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  testimonial,
}) => (
  <div className="p-6 text-center">
    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
      <Image
        src={client1}
        alt={name}
        width={80}
        height={80}
        className="object-cover w-20 h-20"
      />
    </div>
    <h3 className="font-bold text-xl mb-2 text-center text-[#000000]">{name}</h3>
    <div className="flex justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <p className="font-normal leading-6 text-base mb-2 text-center text-[#000000]">
      {`"${testimonial}"`}
    </p>
  </div>
);

const ClientTestimonialsSection: React.FC = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      name: "Marcela Soto, ReasonWhy",
      image:
        "https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbLyrRW6hCFFhkRZk24akx4f3i-z~sVJ2iQdPBWq5aGIWPhobIXDOKQUmWwgCj3Ono7AiHp7eGkGeCihErHGNtS1Tfu3qCQli8QR7XnVQ65dapxmNz2htDGaMObyJOJ5IggWbqfmMnVHJJKAZanrYTnsqjuviFIEkD6vSbv8Bm5ZocuDoZoI0ByBwJ73CrfRdjA-BlGz8pXKZ1nntwlSROYk9ZP~dTCPRiXhryLqpTAE9GkJIE2M0pmcT9RC1zjTHO~zQPT-d1hl3mSfMe0yyT1c3ia1PC9diMmdPYR2TUTQTZh8YPvINirIkRPQ3OJstLWUVDPuupbao~YbBPES5g__",
      rating: 5,
      testimonial:
        "Kudos to the Common Ninja team for delivering both an outstanding product and excellent customer service. I highly recommend them to anyone looking for a top-notch solution!",
    },
    {
      name: "Marcela Soto, ReasonWhy",
      image:
        "https://s3-alpha-sig.figma.com/img/bdc6/db2a/3a906b3de8eaa53e14582edf5c918b5d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IbsTuEexLFgBTDEQ42pJ2DwmSsv-syQTSxH9KsGxZ8-1UlJjVOVedKV5wkt7x~lhzoBFlr562rnNx1f79dWJsK0HivTdoqxwwRrfGIjCbsBf33dW-Wpw15ezRURndzBrVFq43DY5Vu3a3QTLgVZCmpaurwV0NOhO1S7n7q7gHv4GhhQId0lsasYOJK4JLXbnrVBDqXUfviwZp9RJn0y-8VxU9OLQ81xytHL2BSv5wXmwOz7xBbf7Qrwd5kfdD4PdDOYZpl6dxfmLjGzUhj~Jo8m2~4eKGghyIucihnss0QWRvFoSD9J-uRKqIeg-08xQ~nba5XMAkWZUFctTGm1VsA__",
      rating: 4,
      testimonial:
        "Kudos to the Common Ninja team for delivering both an outstanding product and excellent customer service. I highly recommend them to anyone looking for a top-notch solution!",
    },
    {
      name: "Marcela Soto, ReasonWhy",
      image:
        "https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbLyrRW6hCFFhkRZk24akx4f3i-z~sVJ2iQdPBWq5aGIWPhobIXDOKQUmWwgCj3Ono7AiHp7eGkGeCihErHGNtS1Tfu3qCQli8QR7XnVQ65dapxmNz2htDGaMObyJOJ5IggWbqfmMnVHJJKAZanrYTnsqjuviFIEkD6vSbv8Bm5ZocuDoZoI0ByBwJ73CrfRdjA-BlGz8pXKZ1nntwlSROYk9ZP~dTCPRiXhryLqpTAE9GkJIE2M0pmcT9RC1zjTHO~zQPT-d1hl3mSfMe0yyT1c3ia1PC9diMmdPYR2TUTQTZh8YPvINirIkRPQ3OJstLWUVDPuupbao~YbBPES5g__",
      rating: 2,
      testimonial:
        "Kudos to the Common Ninja team for delivering both an outstanding product and excellent customer service. I highly recommend them to anyone looking for a top-notch solution!",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto px-4">
        <h2 className="text-[35px] font-bold text-center text-purple-600 mb-2">
          CLIENT TESTIMONIALS
        </h2>
        <p className="text-2xl text-center font-medium text-black mb-12">
          What they say about us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
