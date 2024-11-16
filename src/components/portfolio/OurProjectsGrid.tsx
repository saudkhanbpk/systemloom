import { Eye } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';

const ProjectCard = ({
  title,
  screenshot,
  websiteLink,
}: {
  title: string;
  screenshot: string;
  websiteLink?: string;
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-md group">
      {/* Project Image */}
      <Image
        src={screenshot}
        alt={`${title} Screenshot`}
        className="w-full h-[300px] object-cover"
        width={400}
        height={300}
      />

      {/* Eye Icon with hover effect */}
      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"
        >
          <div className="opacity-0 group-hover:opacity-100 transition duration-300">
            <Eye className="text-purple-600 w-8 h-8" />
          </div>
        </a>
      )}

      {/* Project Title */}
      {title && (
        <div className="absolute bottom-4 left-4 bg-[#9A00FF] bg-opacity-75 text-white p-2 rounded">
          <p className="text-sm font-semibold">{title}</p>
        </div>
      )}
    </div>
  );
};

const OurProjectsGrid = () => {
  const { projects } = useSelector((store: RootState) => store.projects);

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            screenshot={project.projectScreenshot || '/default-image.png'}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProjectsGrid;
