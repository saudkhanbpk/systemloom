import Image from "next/image";
import ouTeamImage from "../../../public/assets/aboutpage/teamimage.png";
import OurTeamClient from "../landingPage/OurTeamClient";

// ✅ Server-Side Function (SSR)
const getTeamData = async () => {
  return {
    heading: "Our Team is Your Team",
    description:
      "Don’t just share your story – make it unforgettable! We simplify the complex, captivate your audience, and drive results with expert digital marketing strategies that boost visibility, drive qualified traffic, and turn leads into conversions. From engagement and rankings to conversions, we help you achieve your marketing goals with creative brilliance. Ready to transform your strategy? Learn more about us HERE.",
  };
};

const OurTeam = async () => {
  const teamData = await getTeamData(); 

  return (
    <div className="flex lg:flex-row flex-col justify-between gap-6 bg-gray-100 md:py-12 py-6 rounded-lg px-6 md:mt-16 mt-9">
      <div>
        <div className="lg:w-[500px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  text-purple-600 font-bold">{teamData.heading}</h2>
          <p className="text-gray-600 mt-3">{teamData.description}</p>
        </div>
        <OurTeamClient /> 
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={ouTeamImage} alt="Our Team" width={500} height={400} className="rounded-lg object-contain" />
      </div>
    </div>
  );
};

export default OurTeam;