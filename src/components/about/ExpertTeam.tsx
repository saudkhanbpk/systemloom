"use client";
import React, { useState } from "react";
import ProfileCard from "../constant/ProfileCard";

interface Profile {
  name: string;
  position: string;
  imageUrl: string;
  linkedInUrl: string;
  width: number;
  height: number;
  category: string;  // Added category to each profile
}

const profiles: Profile[] = [
  { name: "Umair Amjed", position: "Admin Officer", imageUrl: "/assets/aboutpage/umair1.jpg", linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263", width: 300, height: 300, category: "Leadership" },
  { name: "Aamad Khan", position: "Admin Officer", imageUrl: "/assets/aboutpage/hamdad.webp", linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263", width: 300, height: 300, category: "Leadership" },
  { name: "Hamdan Khan", position: "Project Manager", imageUrl: "/assets/aboutpage/hamdan.webp", linkedInUrl: "http://www.linkedin.com/in/hamdan-khan-60b03a1ba", width: 300, height: 300, category: "Leadership" },
  { name: "Ihtizaz", position: "Angular Developer", imageUrl: "/assets/aboutpage/ihtizaz.webp", linkedInUrl: "https://www.linkedin.com/in/ihtizazahmad", width: 300, height: 300, category: "Performance" },

  { name: "Luqman", position: "Angular Developer", imageUrl: "/assets/aboutpage/luqman.jpg", linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263", width: 300, height: 300, category: "Leadership" },
  { name: "Ali Hassan", position: "Angular Developer", imageUrl: "/assets/aboutpage/ali hassan.jpg", linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263", width: 300, height: 300, category: "Leadership" },

  { name: "Imran Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/imran.webp", linkedInUrl: "https://linkedin.com/in/imrookhan44", width: 300, height: 300, category: "Performance" },
  { name: "Ishaq Khan", position: "Frontend Developer", imageUrl: "/assets/aboutpage/ishaq.webp", linkedInUrl: "https://www.linkedin.com/in/ishaqcoder", width: 300, height: 300, category: "CRM" },
  { name: "Saad", position: "Angular Developer ", imageUrl: "/assets/aboutpage/saad.jpg", linkedInUrl: "https://www.linkedin.com/in/saad-khan-42716a222", width: 300, height: 300, category: "MarTech" },
  { name: "Sameer Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/sameer.webp", linkedInUrl: "https://www.linkedin.com/in/sameer-khan-660966251", width: 300, height: 300, category: "SEO" },
  { name: "Sulaiman Khan", position: "Frontend Developer", imageUrl: "/assets/aboutpage/sulaiman.webp", linkedInUrl: "https://www.linkedin.com/in/sulaiman-khan-5932bb308", width: 300, height: 300, category: "SEO" },
  { name: "Waheed Khan", position: "App Developer", imageUrl: "/assets/aboutpage/waheed.webp", linkedInUrl: "https://www.linkedin.com/in/waheed-ahmad-khan-3570491ba", width: 300, height: 300, category: "Leadership" },
  { name: "Afaq Khan", position: "App Developer ", imageUrl: "/assets/aboutpage/afaq.webp", linkedInUrl: "https://www.linkedin.com/in/theafaq-ul-islam", width: 300, height: 300, category: "MarTech" },
];

const ExpertTeam: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter profiles based on selected category
  const filteredProfiles = selectedCategory === "All" ? profiles : profiles.filter(profile => profile.category === selectedCategory);

  return (
    <div>
      <div className="py-4 text-center">
        <p className="font-inter font-bold text-[35px] text-[#9A00FF]">Our Team</p>
      </div>

      {/* Buttons to select category */}
      <div className="flex justify-center space-x-4 py-4 mb-6">
        <button
          onClick={() => handleCategoryChange("All")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "All" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("Leadership")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "Leadership" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Leadership
        </button>
        <button
          onClick={() => handleCategoryChange("Performance")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "Performance" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Performance
        </button>
        <button
          onClick={() => handleCategoryChange("CRM")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "CRM" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          CRM
        </button>
        <button
          onClick={() => handleCategoryChange("mern stack")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "MarTech" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Mern Stack Developer
        </button>
        <button
          onClick={() => handleCategoryChange("angular")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "MarTech" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Angular Developer
        </button>
        <button
          onClick={() => handleCategoryChange("SEO")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "SEO" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          SEO
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-12 xl:px-10 md:px-7 px-4">
        {filteredProfiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            position={profile.position}
            imageUrl={profile.imageUrl}
            linkedInUrl={profile.linkedInUrl}
            width={profile.width}
            height={profile.height}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
