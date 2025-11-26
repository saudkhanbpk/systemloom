import Slider from "./Slider";

const getSlides = async () => {
  return [
    // {
    // //  videoSrc: "/videos/backgroundVideo.webm",
    //   heading: "Where Technology Meets Marketing Excellence",
    //   highlight: "Technology Marketing",
    //   highlightColor: "text-purple-600",
    //   description: `We blend cutting-edge technology with strategic marketing to deliver comprehensive digital solutions that drive your business forward.`,
    //   buttonText: "Get Your Custom Solution Now!",
    //   buttonColor: "bg-purple-600 hover:bg-purple-700",
    //   imageSrc: "/assets/homepage/webapp.webp"
    // },
    // {
    // //  videoSrc: "/videos/aibakgroundvideo.webm",
    //   heading: "Where Technology Meets Marketing Excellence",
    //   highlight: "Technology Marketing",
    //   highlightColor: "text-purple-600",
    //   description: `We blend cutting-edge technology with strategic marketing to deliver comprehensive digital solutions that drive your business forward.`,
    //   buttonText: "Get Started – Launch in 58 Hours!",
    //   buttonColor: "bg-purple-600 hover:bg-purple-700",
    //   imageSrc: "/assets/homepage/aifuture.webp"
    // },
    {
    //  videoSrc: "/videos/shapping-background-video.webm",
      heading: "Weaving Intelligent Systems for the Future",
      highlight: "Technology Marketing",
      highlightColor: "text-purple-700",
      description: `System Loom is a multi-disciplinary tech studio weaving intelligent 
        systems for the future through cutting-edge app development, web solutions, 
        AI innovation, Creative design, and strategic digital marketing. We bring ideas 
        to life with seamless technology and future-ready creativity.`,
      buttonText: `Start Your Project`,
      buttonColor: "bg-cyan-600 hover:bg-[#5de0e6]",
      imageSrc: "/assets/homepage/shapingfuture.webp"
    },
  ];
};

const Page = async () => {
  const slides = await getSlides();

  return <Slider slides={slides} />;
};

export default Page;