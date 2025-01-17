import BlogCards from '@/components/blog/BlogCards';
import BlogHeroSection from '@/components/blog/BlogHeroSection';

interface Blog {
  _id: string;
  title: string;
  content: string;
  description: string;
  image: string | { imageUrl: string };  
  createdAt: string;
  updatedAt: string;
}

const Blog: React.FC = () => {  
  return (
    <>
        <BlogHeroSection />
        <BlogCards />
    </>
  );
};

export default Blog;


export const metadata = {
  title: "TechCreator Blog - Latest Trends in Technology",
  description: "Explore insightful articles on the latest trends in technology, software development, and industry innovations at TechCreator Blog.",
  alternates: {
    canonical: "https://www.techcreator.co/blog",
  },
};
