"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminLayout from "@/components/shared/AdminLayout";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backend_url } from "@/newLayout";

const AddProjectPage: React.FC = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    figmaLink: "",
    websiteLink: "",
    githubLink: "",
    category: "",
    industry:"",
    projectScreenshot: null as File | null,
    screenshotUrl: "", // To store the URL of the existing screenshot for updates
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projectId) {
      // Fetch project data if projectId is provided
      const fetchProjectData = async () => {
        try {
          const res = await axios.get(
            `${backend_url}/api/v1/project/get/${projectId}`
          );
          // console.log("single project data", res);

          if (res.data.success) {
            setFormData({
              ...res.data.project,
              screenshotUrl: res.data.project.projectScreenshot || "", // Set the screenshot URL for updates
            });
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
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
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
        projectScreenshot: files[0], // Store the selected file
        screenshotUrl: URL.createObjectURL(files[0]), // Create a preview URL for the image
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("title", formData.title);
    formPayload.append("description", formData.description);
    formPayload.append("figmaLink", formData.figmaLink);
    formPayload.append("websiteLink", formData.websiteLink);
    formPayload.append("githubLink", formData.githubLink);
    formPayload.append("category", formData.category);
    formPayload.append("industry", formData.industry);

    console.log("Industry Value:", formData.industry);

    if (formData.projectScreenshot) {
      formPayload.append("projectScreenshot", formData.projectScreenshot);
    }

    try {
      let res;
      if (projectId) {
        // Update existing project
        res = await axios.put(
          `${backend_url}/api/v1/project/update/${projectId}`,
          formPayload,
          { withCredentials: true }
        );
      } else {
        // Create a new project
        res = await axios.post(
          `${backend_url}/api/v1/project/create`,
          formPayload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => router.push("/admin/all-projects"), 2000); // Redirect after success
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Handle Cancel Button
  const handleCancel = () => {
    router.push("/admin/all-projects"); // Redirect to a different page (e.g., project list)
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl text-center font-bold mb-6">
            {projectId ? "Update Project" : "Add New Project"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
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
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>



{/* Industry Field */}
<div>
  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
    Industry
  </label>
  <select
    name="industry"
    id="industry"
    value={formData.industry}
    onChange={handleChange}
    required
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
  >
    <option value="">Select an Industry</option>
    <option value="healthcare">HealthCare</option>
    <option value="e-commerce">E-Commerce</option>
    <option value="hospitality">Hospitality</option>
    <option value="real-estate">Real Estate</option>
    <option value="restaurants">Restaurants</option>
    <option value="green-energy">Green Energy</option>
  </select>
</div>

{/* Category Field */}
<div>
  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
    Category
  </label>
  <select
    name="category"
    id="category"
    value={formData.category}
    onChange={handleChange}
    required
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
  >
    <option value="">Select a Category</option>
    <option value="web-development">Web Development</option>
    <option value="app-development">App Development</option>
    <option value="ui-ux-design">UI & UX Design</option>
    <option value="devops">DevOps</option>
    <option value="graphic-designing">Graphic Designing</option>
    <option value="project-management">Project Management</option>
    <option value="seo-content-writing">SEO & Content Writing</option>
    <option value="software-maintenance">Software Maintenance</option>
    <option value="qa-testing">QA Testing</option>
    <option value="social-media-marketing">Social Media Marketing & Branding</option>
  </select>
</div>



            {/* Figma Link Field */}
            <div>
              <label
                htmlFor="figmaLink"
                className="block text-sm font-medium text-gray-700"
              >
                Figma Link
              </label>
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
              <label
                htmlFor="websiteLink"
                className="block text-sm font-medium text-gray-700"
              >
                Website Link
              </label>
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
              <label
                htmlFor="githubLink"
                className="block text-sm font-medium text-gray-700"
              >
                GitHub Link
              </label>
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
              <label
                htmlFor="projectScreenshot"
                className="block text-sm font-medium text-gray-700"
              >
                Project Screenshot
              </label>
              <div className="mt-1 border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                {formData.projectScreenshot || formData.screenshotUrl ? (
                  <div>
                    <img
                      src={
                        formData.screenshotUrl ||
                        (formData.projectScreenshot
                          ? URL.createObjectURL(formData.projectScreenshot)
                          : "")
                      }
                      alt="Project Screenshot"
                      className="mx-auto mb-4 max-w-full max-h-60 object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-gray-500">
                    Choose a file or drag & drop it here
                  </p>
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
                  onClick={() =>
                    document.getElementById("projectScreenshot")?.click()
                  }
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
                {loading
                  ? "Saving..."
                  : projectId
                  ? "Update Project"
                  : "Add Project"}
              </button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AddProjectPage;
