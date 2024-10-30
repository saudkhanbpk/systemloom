import React from "react";
import ProfileCard from "../constant/ProfileCard";

interface Profile {
  name: string;
  position: string;
  imageUrl: string;
  linkedInUrl: string;
}

const profiles: Profile[] = [
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/Rectangle(1).png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev1.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev2.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev3.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev4.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/Rectangle(1).png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev1.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev3.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev2.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev3.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/dev1.png",
    linkedInUrl: "https://linkedin.com",
  },
  {
    name: "Ammad Khan",
    position: "Managing Director",
    imageUrl: "/assets/aboutImages/Rectangle(1).png",
    linkedInUrl: "https://linkedin.com",
  },
];

const ExpertTeam: React.FC = () => {
  return (
    <div>
      <div className="py-20  text-center">
        <p className="font-inter font-bold text-[35px] text-[#9A00FF]">Expert Team</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:mx-20 ">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            position={profile.position}
            imageUrl={profile.imageUrl} 
            linkedInUrl={profile.linkedInUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
