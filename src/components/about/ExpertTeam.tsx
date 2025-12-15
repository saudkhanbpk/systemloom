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
  category: string | string[];
}

/* const profiles: Profile[] = [
  { name: "Saud Khan", position: "CEO", imageUrl: "/assets/aboutpage/ceoimage2.webp", linkedInUrl: "https://www.linkedin.com/in/saudkhan39", width: 300, height: 300, category: "Leadership" },
  { name: "Aamad Khan", position: "Admin Officer", imageUrl: "/assets/aboutpage/amad.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "Leadership" },
  { name: "Aamir Shahzad", position: "SEO & Project manager", imageUrl: "/assets/aboutpage/amir1.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "SEO" },
  { name: "Hamdan Khan", position: "Project Manager", imageUrl: "/assets/aboutpage/hamdan2.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "Leadership" },
  { name: "Abbas Khan", position: "HubSpot", imageUrl: "/assets/aboutpage/abbas1.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "CRM" },
  { name: "Zakarya Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/zakrya.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },
  { name: "Imam Hussain", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/imamhussain.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },
  { name: "Ihtizaz", position: "Angular Developer", imageUrl: "/assets/aboutpage/irtizaz.jpg", linkedInUrl: "https://www.linkedin.com/in/ihtizazahmad", width: 300, height: 300, category: "angular" },
  
  { name: "Muhammad Ammar", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/ammaar.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },
  
  { name: "Farooq", position: "Graphic designer & 3D visualizer", imageUrl: "/assets/aboutpage/farooq1.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "designer" },
  { name: "Umair Amjed", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/umair1.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },
  { name: "Luqman", position: "Angular Developer", imageUrl: "/assets/aboutpage/luqman.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "angular" },
  { name: "Ali Hassan", position: "Angular Developer", imageUrl: "/assets/aboutpage/ali hassan.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "angular" },

  { name: "Imran Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/imran.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },

  { name: "Saad", position: "Angular Developer ", imageUrl: "/assets/aboutpage/saad.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "angular" },
  { name: "Sameer Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/sameer.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },
  
  { name: "Waheed Khan", position: "App Developer", imageUrl: "/assets/aboutpage/waheed1.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "app" },
  { name: "Naeem Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/naem.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },
 
  { name: "Afaq Khan", position: "App Developer ", imageUrl: "/assets/aboutpage/afaq.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "app" },
  { name: "Shahzad Khan", position: "Digital Marketing Lead", imageUrl: "/assets/aboutpage/shahzad.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "designer" },
  { name: "Adeel ahmed khan", position: "Digital Marketing", imageUrl: "/assets/aboutpage/adeel.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "designer" },

  { name: "Masroor Ahmad", position: "HubSpot & Content writer", imageUrl: "/assets/aboutpage/masror.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: ["SEO", "CRM"] },
  { name: "Ishtiaq", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/ishtiaq.jpg", linkedInUrl: "https://www.linkedin.com/company/techcreator", width: 300, height: 300, category: "mern stack" },
]; */

const ExpertTeam: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter profiles based on selected category
 /*  const filteredProfiles = selectedCategory === "All" 
  ? profiles 
  : profiles.filter(profile => 
      Array.isArray(profile.category) 
        ? profile.category.includes(selectedCategory) 
        : profile.category === selectedCategory
    ); */

  const categories = [
    { id: "All", label: "All" },
    { id: "Leadership", label: "Leadership" },
    { id: "mern stack", label: "Mern Stack Developer" },
    { id: "app", label: "App Developer" },
    { id: "CRM", label: "CRM" },
    { id: "designer", label: "Graphic designer & Marketing" },
    { id: "angular", label: "Angular Developer" },
    { id: "SEO", label: "SEO" },
  ];

  // Split categories into two rows (4 items each)
  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4);

  return (
    <div className="md:mt-16 mt-9">
      <h2 className="text-center font-inter font-bold text-3xl md:text-4xl lg:text-5xl mb-8 text-[#302f2f]">
        Our Team
      </h2>

      {/* Category cards in two rows with borders */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {firstRow.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 font-medium text-center ${
                selectedCategory === category.id
                  ? "bg-cyan-600 text-white border-cyan-600 shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:border-cyan-400 hover:shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondRow.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 font-medium text-center ${
                selectedCategory === category.id
                  ? "bg-cyan-600 text-white border-cyan-600 shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:border-cyan-400 hover:shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 md:gap-12  md:mb-16 mb-9">
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
      </div> */}
    </div>
  );
};

export default ExpertTeam;