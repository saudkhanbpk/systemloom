import React from 'react'
// import BlogCard from '../constant/BlodCard';
import post1 from "../../../public/assets/blog/Image (1).png"
import post2 from "../../../public/assets/blog/Image (2).png"
import post3 from "../../../public/assets/blog/Image (3).png"
import post4 from "../../../public/assets/blog/Image (4).png"
import post5 from "../../../public/assets/blog/Image (5).png"
import post6 from "../../../public/assets/blog/Image.png"
import post7 from "../../../public/assets/blog/Rectangle (1).png"
import post8 from "../../../public/assets/blog/Rectangle.png"
import person1 from "../../../public/assets/blog/Ellipse.png"
import Image from 'next/image'




const BlogCards = () => {

  const blogData = [
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
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post2,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
    {
      id: 3,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post3,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
    {
      id: 4,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post4,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
    {
      id: 5,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post5,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
    {
      id: 6,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post6,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
    {
      id: 7,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post7,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
    {
      id: 8,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post8,
      authorName: "Robert Fox",
      authorImage:person1,
      date: "June 21, 2023",
    },
    {
      id: 9,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: post1,
      authorName: "Robert Fox",
      authorImage: person1,
      date: "June 21, 2023",
    },
  ];


  return (
    <div className="container mb-10 mt-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4  w-full">
        {
          blogData.map((item) => {
            return (
              <div className="p-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center">
                    <Image src={item.authorImage} alt={item.authorName} className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.authorName}</p>
                      <p className="text-sm text-gray-500">{item.date}</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })

        }
      </div>
  )
}

export default BlogCards