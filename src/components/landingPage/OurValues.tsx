import React from "react";
import { FaHeart, FaUserCheck, FaLightbulb, FaRocket, FaBook, FaUsers } from "react-icons/fa";

const values = [
  {
    title: "Cultivate Compassion",
    description:
      "Exhibiting honesty, dependability, empathy, assistance, and respect towards others is what it takes to exemplify goodness to us.",
    icon: <FaHeart />,
  },
  {
    title: "Keep It Real",
    description:
      "We thrive by being authentic, engaged, fun-loving, humble, direct, and committed to our mission.",
    icon: <FaUserCheck />,
  },
  {
    title: "Think Innovatively",
    description:
      "We value curiosity, creativity, ambition, decisiveness, risk-taking, and tackling challenges.",
    icon: <FaLightbulb />,
  },
  {
    title: "Empower & Grow",
    description:
      "At Sibisoft, you will consistently enhance and develop your skills while widening your personal and professional experiences.",
    icon: <FaRocket />,
  },
  {
    title: "Share Knowledge",
    description:
      "By sharing insights, knowledge, and wisdom with each other and our community, we all achieve success.",
    icon: <FaBook />,
  },
  {
    title: "Unified Teamwork",
    description:
      "As a unified team, we strive to serve our clients and one another by working diligently and intelligently.",
    icon: <FaUsers />,
  },
];

const OurValues: React.FC = () => {
  return (
    <section className="relative  text-white">
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 blur-md"></div> */}

      {/* Content */}
      <div className="relative text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-wide text-purple-600">
          Our Core Values
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg hover:bg-opacity-20 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-yellow-400">{value.icon}</div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
              </div>
              <p className="text-gray-200 mt-3">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
