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

const profiles: Profile[] = [
  { name: "Saud Khan", position: "CEO", imageUrl: "/assets/aboutpage/ceoimage2.webp", linkedInUrl: "https://www.linkedin.com/in/saudkhan39", width: 300, height: 300, category: "Leadership" },
  { name: "Aamad Khan", position: "Admin Officer", imageUrl: "/assets/aboutpage/amad.jpg", linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263", width: 300, height: 300, category: "Leadership" },
  { name: "Aamir Shahzad", position: "SEO & Project manager", imageUrl: "/assets/aboutpage/amir1.jpg", linkedInUrl: "https://www.linkedin.com/in/aamirshahzads/", width: 300, height: 300, category: "SEO" },
  { name: "Hamdan Khan", position: "Project Manager", imageUrl: "/assets/aboutpage/hamdan2.jpg", linkedInUrl: "http://www.linkedin.com/in/hamdan-khan-60b03a1ba", width: 300, height: 300, category: "Leadership" },
  { name: "Abbas Khan", position: "HubSpot", imageUrl: "/assets/aboutpage/abbas1.jpg", linkedInUrl: "https://www.linkedin.com/in/abbas-khan-google/", width: 300, height: 300, category: "CRM" },
  { name: "Zakarya Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/zakrya.jpg", linkedInUrl: "https://www.linkedin.com/in/zakarya-khan-4038162a5", width: 300, height: 300, category: "mern stack" },
  { name: "Imam Hussain", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/imamhussain.jpg", linkedInUrl: "http://www.linkedin.com/in/imam-hussain-876494270", width: 300, height: 300, category: "mern stack" },
  { name: "Ihtizaz", position: "Angular Developer", imageUrl: "/assets/aboutpage/irtizaz.jpg", linkedInUrl: "https://www.linkedin.com/in/ihtizazahmad", width: 300, height: 300, category: "angular" },
  
  { name: "Ammar", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/ammaaar.jpg", linkedInUrl: "https://www.linkedin.com/in/ammari045", width: 300, height: 300, category: "mern stack" },
  { name: "Farooq", position: "Graphic designer", imageUrl: "/assets/aboutpage/farooq1.jpg", linkedInUrl: "https://www.linkedin.com/in/muhammad-farooq-08bb71150/", width: 300, height: 300, category: "designer" },
  { name: "Umair Amjed", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/umair1.jpg", linkedInUrl: "https://www.linkedin.com/in/umair-amjad-3a4b64205", width: 300, height: 300, category: "mern stack" },
  { name: "Luqman", position: "Angular Developer", imageUrl: "/assets/aboutpage/luqman.jpg", linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263", width: 300, height: 300, category: "angular" },
  { name: "Ali Hassan", position: "Angular Developer", imageUrl: "/assets/aboutpage/ali hassan.jpg", linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263", width: 300, height: 300, category: "angular" },

  { name: "Imran Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/imran.jpg", linkedInUrl: "https://linkedin.com/in/imrookhan44", width: 300, height: 300, category: "mern stack" },

  { name: "Saad", position: "Angular Developer ", imageUrl: "/assets/aboutpage/saad.jpg", linkedInUrl: "https://www.linkedin.com/in/saad-khan-42716a222", width: 300, height: 300, category: "angular" },
  { name: "Sameer Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/sameer.jpg", linkedInUrl: "https://www.linkedin.com/in/sameer-khan-660966251", width: 300, height: 300, category: "mern stack" },
  
  { name: "Waheed Khan", position: "App Developer", imageUrl: "/assets/aboutpage/waheed1.jpg", linkedInUrl: "https://www.linkedin.com/in/waheed-ahmad-khan-3570491ba", width: 300, height: 300, category: "app" },
  { name: "Naeem Khan", position: "Mern Stack Developer", imageUrl: "/assets/aboutpage/naem.jpg", linkedInUrl: "https://www.linkedin.com/in/naeem-khan-b205b8304", width: 300, height: 300, category: "mern stack" },
 
  { name: "Afaq Khan", position: "App Developer ", imageUrl: "/assets/aboutpage/afaq.jpg", linkedInUrl: "https://www.linkedin.com/in/theafaq-ul-islam", width: 300, height: 300, category: "app" },
  { name: "Shahzad Khan", position: "Digital Marketing Lead", imageUrl: "/assets/aboutpage/shahzad.jpg", linkedInUrl: "https://www.linkedin.com/in/shahzad-khan-5b84b076", width: 300, height: 300, category: "designer" },

  { name: "Masroor Ahmad", position: "HubSpot & Content writer", imageUrl: "/assets/aboutpage/masror.jpg", linkedInUrl: "https://www.linkedin.com/in/shahzad-khan-5b84b076", width: 300, height: 300, category: ["SEO", "CRM"] },
];

const ExpertTeam: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter profiles based on selected category
  const filteredProfiles = selectedCategory === "All" 
  ? profiles 
  : profiles.filter(profile => 
      Array.isArray(profile.category) 
        ? profile.category.includes(selectedCategory) 
        : profile.category === selectedCategory
    );

  return (
    <div>
      <div className="py-4 text-center">
        <p className="font-inter font-bold text-[35px] text-[#9A00FF]">Our Team</p>
      </div>

      {/* Buttons to select category */}
      <div className="flex justify-center flex-wrap text-nowrap gap-3 md:gap-0 space-x-4 py-4 mb-6">
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
          onClick={() => handleCategoryChange("app")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "app" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          App Developer
        </button>
        <button
          onClick={() => handleCategoryChange("designer")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "designer" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Graphic designer & Marketing
        </button>
        <button
          onClick={() => handleCategoryChange("CRM")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "CRM" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          CRM
        </button>
        <button
          onClick={() => handleCategoryChange("mern stack")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "mern stack" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Mern Stack Developer
        </button>
        <button
          onClick={() => handleCategoryChange("angular")}
          className={`px-6 py-2 rounded-lg ${selectedCategory === "angular" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"}`}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 md:gap-12 xl:px-10 md:px-7 px-4 md:mb-16 mb-9">
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
