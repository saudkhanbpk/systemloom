
// ProjectCard Component
import { Eye } from 'lucide-react'
import portfolio from '../../../public/assets/portfolioImages/Rectangle 117.png'
import Image from 'next/image'

interface ProjectCardType {
  title: string
}

const ProjectCard = ({ title }: ProjectCardType) => {
  return (
    <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden cursor-pointer my-10 group">
      <Image
        src={portfolio}
        alt="Project"
        className="sm:w-full w-[300px] h-full object-cover"
      />
      {/* Overlay for hover effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
        <div className="bg-black bg-opacity-75 rounded-full p-2">
          <Eye className="text-purple-600 w-6 h-6" />
        </div>
      </div>
      {/* Title on hover */}
      {title && (
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-sm font-semibold">{title}</p>
        </div>
      )}
    </div>
  )
}

// OurProjectsGrid Component
interface Project {
  title: string;
  company: string;
  category: string;
}

interface OurProjectsGridProps {
  searchTerm: string;
}

const allProjects: Project[] = [
  { title: "Digital Startup Agency", company: "Company A", category: "Tech" },
  { title: "Creative Agency", company: "Company B", category: "Design" },
  { title: "Marketing Agency", company: "Company C", category: "Marketing" },
  // Add more projects here
]

const OurProjectsGrid = ({ searchTerm }: OurProjectsGridProps) => {
  // Filter projects based on search term
  const filteredProjects = allProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl sm:ml-11">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} title={project.title} />
        ))}
      </div>
    </div>
  )
}

export default OurProjectsGrid