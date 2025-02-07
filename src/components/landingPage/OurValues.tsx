import React from "react";

const values = [
  {
    title: "Cultivate Compassion",
    description:
      "Exhibiting honesty, dependability, empathy, assistance, and respect towards others is what it takes to exemplify goodness to us.",
  },
  {
    title: "Keep It Real",
    description:
      "We thrive by being authentic, engaged, fun-loving, humble, direct, and committed to our mission.",
  },
  {
    title: "Think Innovatively",
    description:
      "We value curiosity, creativity, ambition, decisiveness, risk-taking, and tackling challenges.",
  },
  {
    title: "Empower & Grow",
    description:
      "At Sibisoft, you will consistently enhance and develop your skills while widening your personal and professional experiences.",
  },
  {
    title: "Share Knowledge",
    description:
      "By sharing insights, knowledge, and wisdom with each other and our community, we all achieve success.",
  },
  {
    title: "Unified Teamwork",
    description:
      "As a unified team, we strive to serve our clients and one another by working diligently and intelligently.",
  },
];

const OurValues: React.FC = () => {
  return (
    <section className="relative bg-purple-600 text-white py-16  ">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Our Values</h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {values.map((value, index) => (
            <div key={index} className="p-4">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-gray-300 mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
