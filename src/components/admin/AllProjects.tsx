import { FaTrash, FaEdit, FaEye } from 'react-icons/fa'; // Import React icons
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import { deleteProject } from '@/redux/projectSlice'; // Assuming you have delete functionality
import useGetAllProjects from '@/hooks/useGetAllProjects';
import { backend_url } from '@/newLayout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface ProjectCardType {
  projectId: string;
}

const ProjectCard = ({ projectId }: ProjectCardType) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const project = useSelector((state: RootState) =>
    state.projects.projects.find(p => p._id === projectId)
  );

  // Guard clause if the project is undefined or null
  if (!project) return <div>Project not found</div>;

  
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${backend_url}/api/v1/project/delete/${projectId}`, {withCredentials:true})
      if (res.data.success){
        dispatch(deleteProject(projectId))
        toast.success(res.data.message)
      }
    } catch (error:any) {
      console.log(error);
      toast.error(error?.response?.data?.message)
    }
  };

  const handleEdit = () => {
    router.push(`/admin/all-projects/addproject?projectId=${projectId}`);
  };

  const handleOpenWebsite = () => {
    if (project.websiteLink) {
      window.open(project.websiteLink, '_blank'); 
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden cursor-pointer my-10 group">
      <Image
        src={project.projectScreenshot || "/default-image.jpg"} // Fallback image if no screenshot is available
        alt="Project"
        className="sm:w-full w-[300px] h-[300px] object-cover"
        width={300}
        height={300}
      />
      {/* Overlay for hover effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
        <div className="flex space-x-4">
          {/* Eye Icon */}
          <div className="bg-black bg-opacity-75 rounded-full p-2" onClick={handleOpenWebsite}>
            <FaEye className="text-purple-600 w-6 h-6" />
          </div>
          {/* Edit Icon (for Update) */}
          <div className="bg-black bg-opacity-75 rounded-full p-2">
            <FaEdit className="text-yellow-400 w-6 h-6" onClick={handleEdit} />
          </div>
          {/* Trash Icon (for Delete) */}
          <div className="bg-black bg-opacity-75 rounded-full p-2" onClick={handleDelete}>
            <FaTrash className="text-red-600 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Title always visible */}
      <div className="absolute bottom-4 left-4 bg-[#9A00FF] bg-opacity-75 text-white p-2 rounded">
        <p className="text-sm font-semibold ">{project.title}</p>
      </div>
    </div>
  );
};

// OurProjectsGrid Component
interface OurProjectsGridProps {
  searchTerm: string;
}

const OurProjectsGrid = ({ searchTerm }: OurProjectsGridProps) => {
  useGetAllProjects()
  const { projects } = useSelector((state: RootState) => state.projects);

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl sm:ml-11">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} projectId={project._id} />
        ))}
      </div>
    </div>
  );
};

export default OurProjectsGrid;
