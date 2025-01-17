import React from "react";
import ProfileCard from "../constant/ProfileCard";

interface Profile {
  name: string;
  position: string;
  imageUrl: string;
  linkedInUrl: string;
  width: number;
  height: number;
}

const profiles: Profile[] = [
  {
    name: "Aamad Khan",
    position: "Admin Officer",
    imageUrl: "/assets/aboutpage/hamdad.webp",
    linkedInUrl: "https://www.linkedin.com/in/amad-khan-11b394263",
    width: 300,
    height: 300,
  },
  {
    name: "Hamdan Khan",
    position: "Project Manager",
    imageUrl: "/assets/aboutpage/hamdan.webp",
    linkedInUrl: "http://www.linkedin.com/in/hamdan-khan-60b03a1ba",
    width: 300,
    height: 300,
  },
  {
    name: "Ihtizaz",
    position: "Angular Developer",
    imageUrl: "/assets/aboutpage/ihtizaz.webp",
    linkedInUrl: "https://www.linkedin.com/in/ihtizazahmad",
    width: 300,
    height: 300,
  },
  {
    name: "Imran Khan",
    position: "Mern Stack Developer",
    imageUrl: "/assets/aboutpage/imran.webp",
    linkedInUrl: "https://linkedin.com/in/imrookhan44",
    width: 300,
    height: 300,
  },
  {
    name: "Ishaq Khan",
    position: "Frontend Developer",
    imageUrl: "/assets/aboutpage/ishaq.webp",
    linkedInUrl: "https://www.linkedin.com/in/ishaqcoder",
    width: 300,
    height: 300,
  },
  {
    name: "Saad",
    position: "Angular Developer ",
    imageUrl: "/assets/aboutpage/saad.webp",
    linkedInUrl: "https://www.linkedin.com/in/saad-khan-42716a222",
    width: 300,
    height: 300,
  },
  {
    name: "Sameer Khan",
    position: "Mern Stack Developer",
    imageUrl: "/assets/aboutpage/sameer.webp",
    linkedInUrl: "https://www.linkedin.com/in/sameer-khan-660966251",
    width: 300,
    height: 300,
  },
  {
    name: "Sulaiman Khan",
    position: "Frontend Developer",
    imageUrl: "/assets/aboutpage/sulaiman.webp",
    linkedInUrl: "https://www.linkedin.com/in/sulaiman-khan-5932bb308",
    width: 300,
    height: 300,
  },
  {
    name: "Waheed Khan",
    position: "App Developer",
    imageUrl: "/assets/aboutpage/waheed.webp",
    linkedInUrl: "https://www.linkedin.com/in/waheed-ahmad-khan-3570491ba",
    width: 300,
    height: 300,
  },
  {
    name: "Afaq Khan",
    position: "App Developer ",
    imageUrl: "/assets/aboutpage/afaq.webp",
    linkedInUrl: "https://www.linkedin.com/in/theafaq-ul-islam",
    width: 300,
    height: 300,
  },
];

const ExpertTeam: React.FC = () => {
  return (
    <div>
      <div className="py-7  text-center ">
        <p className="font-inter font-bold text-[35px] text-[#9A00FF]">
          Expert Team
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  md:gap-12 xl:px-10 md:px-7 px-4   ">
        {profiles.map((profile, index) => (
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
