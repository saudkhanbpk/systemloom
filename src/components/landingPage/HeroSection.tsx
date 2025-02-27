import Slider from "./Slider";

const getSlides = async () => {
  return [
    {
      videoSrc: "/videos/backgroundVideo.webm",
      heading: "Your All-in-One Solution for Websites, Mobile Apps & Custom Software",
      highlight: "Solution for Websites",
      highlightColor: "text-purple-600",
      description: `Empower your business with a team of experts dedicated to crafting tailor-made solutions that drive growth, efficiency, and success.`,
      buttonText: "Automate your Business",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      imageSrc: "/assets/homepage/webapp.webp"
    },
    {
      videoSrc: "/videos/aibakgroundvideo.webm",
      heading: "AI-Powered Growth: Transforming Ideas into Industry Disruptors",
      highlight: "AI-Powered Growth:",
      highlightColor: "text-purple-600",
      description: `We use AI to drive innovation and accelerate business success. From startups to enterprises, our smart solutions transform bold ideas into game-changing technologies, ensuring smarter, faster, and more efficient results.`,
      buttonText: "Automate your Business",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      imageSrc: "/assets/homepage/aifuture.webp"
    },
    {
      videoSrc: "/videos/shapping-background-video.webm",
      heading: "Shaping the Future with Innovation",
      highlight: "Future",
      highlightColor: "text-purple-700",
      description: `We empower businesses to transform and lead through cutting-edge technology.`,
      buttonText: "Automate your Business",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      imageSrc: "/assets/homepage/shapingfuture.webp"
    },
  ];
};

const Page = async () => {
  const slides = await getSlides();

  return <Slider slides={slides} />;
};

export default Page;
