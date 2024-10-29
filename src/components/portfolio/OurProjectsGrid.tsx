import { Eye } from 'lucide-react';
import portfolio from '../../../public/assets/portfolioImages/Rectangle 117.png'
import Image from 'next/image';
interface ProjectCardType {
  title: string
}

const ProjectCard = ({ title }: ProjectCardType) => {

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer"
    >
      <Image
        src={portfolio}
        alt="Project"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0  flex items-center justify-center">
        <div className="bg-black rounded-full p-2">
          <Eye className="text-purple-600 w-6 h-6" />
        </div>
      </div>
      {title && (
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded">
          <p className="text-sm font-semibold ">{title}</p>
        </div>
      )}
    </div>
  );
};

const OurProjectsGrid = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <ProjectCard title="Digital Startup Agency" />
        <ProjectCard title="Digital Startup Agency" />
        <ProjectCard title="Digital Startup Agency" />
        <ProjectCard title="Digital Startup Agency" />
        <ProjectCard title="Digital Startup Agency" />
        <ProjectCard title="Digital Startup Agency" />
        <ProjectCard title="Digital Startup Agency" />
        <ProjectCard title="Digital Startup Agency" />
      </div>
    </div>
  );
};

export default OurProjectsGrid;