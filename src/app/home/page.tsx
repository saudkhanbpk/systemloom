import ClientReviews from "@/components/home/ClientReviews";
import ContactForm from "@/components/home/Contactform";
import Footer from "@/components/home/Footer";
import Herosection from "@/components/home/Herosection";
import Navbar from "@/components/home/Navbar";
import ServiceSection from "@/components/home/ServiceSection";
import StatsSection from "@/components/home/StatsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <StatsSection />
      <ClientReviews />
      <ServiceSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

export const metadata = {
  title: "TechCreator - Custom Software Development & IT Solutions",
  description:
    "TechCreator specializes in custom software development, web and mobile app development, DevOps, graphic design, and project management. Elevate your business with cutting-edge technology solutions.",
  alternates: {
    canonical: "https://www.techcreator.co/home",
  },
};
