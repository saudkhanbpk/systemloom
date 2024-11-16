"use client";
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import AdminLayout from '@/components/shared/AdminLayout';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backend_url } from '@/newLayout';

const AddProjectPage: React.FC = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    figmaLink: '',
    websiteLink: '',
    githubLink: '',
    projectScreenshot: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projectId) {
      // Fetch project data if projectId is provided
      const fetchProjectData = async () => {
        try {
          const res = await axios.get(`${backend_url}/api/v1/project/get/${projectId}`);
          console.log("single project data", res);
          
          if (res.data.success) {
            setFormData(res.data.project); // Set fetched data into form
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to load project data");
        }
      };
      fetchProjectData();
    }
  }, [projectId]);

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        projectScreenshot: files[0], // Only store the first selected file
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append('title', formData.title);
    formPayload.append('description', formData.description);
    formPayload.append('figmaLink', formData.figmaLink);
    formPayload.append('websiteLink', formData.websiteLink);
    formPayload.append('githubLink', formData.githubLink);

    if (formData.projectScreenshot) {
      formPayload.append('projectScreenshot', formData.projectScreenshot);
    }

    try {
      let res;
      if (projectId) {
        // Update existing project
        res = await axios.put(`${backend_url}/api/v1/project/update/${projectId}`, formPayload, { withCredentials: true });
      } else {
        // Create a new project
        res = await axios.post(`${backend_url}/api/v1/project/create`, formPayload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => router.push('/admin/all-projects'), 2000); // Redirect after success
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  // Handle Cancel Button
  const handleCancel = () => {
    router.push('/admin/all-projects'); // Redirect to a different page (e.g., project list)
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl text-center font-bold mb-6">
            {projectId ? 'Update Project' : 'Add New Project'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>

            {/* Figma Link Field */}
            <div>
              <label htmlFor="figmaLink" className="block text-sm font-medium text-gray-700">Figma Link</label>
              <input
                type="url"
                name="figmaLink"
                id="figmaLink"
                value={formData.figmaLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Website Link Field */}
            <div>
              <label htmlFor="websiteLink" className="block text-sm font-medium text-gray-700">Website Link</label>
              <input
                type="url"
                name="websiteLink"
                id="websiteLink"
                value={formData.websiteLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* GitHub Link Field */}
            <div>
              <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">GitHub Link</label>
              <input
                type="url"
                name="githubLink"
                id="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Project Screenshot Upload Field */}
            <div className="mt-9">
              <label htmlFor="projectScreenshot" className="block text-sm font-medium text-gray-700">Project Screenshot</label>
              <div className="mt-1 border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                {formData.projectScreenshot ? (
                  <p>{formData.projectScreenshot.name}</p>
                ) : (
                  <p className="text-gray-500">Choose a file or drag & drop it here</p>
                )}
                <input
                  type="file"
                  name="projectScreenshot"
                  id="projectScreenshot"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('projectScreenshot')?.click()}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Browse File
                </button>
              </div>
            </div>

            {/* Cancel and Post Now Buttons */}
            <div className="flex justify-between space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="w-full md:w-auto px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg"
              >
                {loading ? 'Posting...' : projectId ? 'Update Post' : 'Post Now'}
              </button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AddProjectPage;
