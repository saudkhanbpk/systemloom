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
      heading: "We make your website live within 58 hours for your customer",
      highlight: "within 58 hours for your customer",
      highlightColor: "text-purple-600",
      description: `100% mobile optimized site, custom or CMS development, 100% money-back guarantee.`,
      buttonText: "Let's Discuss your web design first, Open to discuss your Site",
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
