import React from 'react';
import { StaticImageData } from 'next/image';
import post1 from "../../../public/assets/blog/Image (1).png";
import post2 from "../../../public/assets/blog/Image (2).png";
import post3 from "../../../public/assets/blog/Image (3).png";
import person1 from "../../../public/assets/blog/Ellipse.png";
import Image from 'next/image';
import Link from 'next/link';

// Define a type for the blog post data
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  authorName: string;
  authorImage: StaticImageData;
  date: string;
}

// Function to create a slug from the title
const createSlug = (title: string): string => 
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const BlogCards: React.FC = () => {
  const blogData: BlogPost[] = [
    {
      id: 1,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post1,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
    {
      id: 2,
      title: "Exploring the impact of asynchronous communication on productivity",
      description: "Learn how asynchronous communication can transform team dynamics and productivity.",
      image: post2,
      authorName: "Jane Doe",
      authorImage: person1,
      date: "July 10, 2023",
    },
    {
      id: 3,
      title: "Mastering remote collaboration with async video tools",
      description: "Remote collaboration doesn't have to be a struggle. Discover the benefits of async video.",
      image: post3,
      authorName: "John Smith",
      authorImage: person1,
      date: "August 5, 2023",
    },
  ];

  return (
    <div className="container mb-10 mt-10 mx-auto max-w-7xl grid grid-cols-1  sm:grid-cols-2 justify-items-center md:grid-cols-2 lg:grid-cols-3  w-full ">
      {blogData.map((item) => (
        <div key={item.id} className="p-2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full space-x-2 h-auto md:w-[350px] sm:h-[480px]">
            <Image src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <Link href={`/blog/blogDetail/${createSlug(item.title)}`}>
                <h2 className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer">
                  {item.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center mb-3 ">
                <Image 
                  src={item.authorImage} 
                  alt={item.authorName} 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 rounded-full mr-2" 
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.authorName}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
