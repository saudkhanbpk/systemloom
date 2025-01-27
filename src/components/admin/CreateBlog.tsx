import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { backend_url } from "@/newLayout";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const CreateBlogForm = () => {
  const searchParams = useSearchParams();
  const blogId = searchParams.get("blogId");
  const slug = searchParams.get("slug");
  const router = useRouter();

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [formData, setFormData] = useState({
    storyContent: "",
    altDescription: "",
    title: "",
    slug: "",
    description: "",
    tags: [] as string[],
    tagInput: "",
    image: null as File | null,
    imagePreview: null as string | null,
  });

  const handleEditorChange = (content: string) => {
    setFormData((prevData) => ({ ...prevData, storyContent: content }));
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, tagInput: e.target.value }));
  };

  const handleTagAdd = () => {
    if (formData.tagInput.trim() && !formData.tags.includes(formData.tagInput.trim())) {
      setFormData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, formData.tagInput.trim()],
        tagInput: "",
      }));
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTagAdd();
    }
  };

  // Image Upload Handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, image: selectedImage }));

      // Create a preview of the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = generateSlug(title);
    setFormData((prevData) => ({
      ...prevData,
      title,
      slug,
    }));
  };

  useEffect(() => {
    if (slug) {
      setIsEditMode(true);
      const fetchBlogData = async () => {
        setLoading(true); 
        try {
          const res = await axios.get(`${backend_url}/api/v1/blogs/get/${slug}`);
          if (res.data.success) {
            setFormData({
              storyContent: res.data.blog.content,
              altDescription: res.data.blog.image.altDescription,
              title: res.data.blog.title,
              slug: res.data.blog.slug,
              description: res.data.blog.description,
              tags: res.data.blog.tags,
              tagInput: "",
              image: null,
              imagePreview: res.data.blog.image.imageUrl || null,
            });
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to load blog data");
        } finally {
          setLoading(false);
        }
      };
      fetchBlogData();
    } else {
      setIsEditMode(false);
    }
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { storyContent, altDescription, tags, description, title, slug, image } = formData;

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("content", storyContent);
    formDataToSubmit.append("altDescription", altDescription);
    formDataToSubmit.append("tags", JSON.stringify(tags));
    formDataToSubmit.append("description", description);
    formDataToSubmit.append("title", title);
    formDataToSubmit.append("slug", slug);

    if (image) {
      formDataToSubmit.append("image", image);
    }

    setLoading(true); // Set loading to true when submitting data
    try {
      let res;
      if (isEditMode) {
        res = await axios.put(`${backend_url}/api/v1/blogs/update/${slug}`, formDataToSubmit, {
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } else {
        res = await axios.post(`${backend_url}/api/v1/blogs/create`, formDataToSubmit, {
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
      }

      router.push("/admin/all-blogs");
    } catch (error: any) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg mt-20 shadow-md">
      <form onSubmit={handleSubmit}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 z-10">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-12 h-12"></div>
          </div>
        )}
        <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg mb-6">
          <label htmlFor="imageUpload">
            <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500">Click to upload or drag and drop</p>
            <p className="text-gray-400">SVG, PNG, JPG or GIF</p>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          {formData.imagePreview && (
            <div className="mt-4">
              <img
                src={formData.imagePreview}
                alt="Image Preview"
                className="w-32 h-32 object-cover mx-auto"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Alt Description</label>
          <input
            type="text"
            placeholder="Enter image alt"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.altDescription}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, altDescription: e.target.value }))}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter Blog Title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={handleTitleChange}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Enter a brief description here..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.description}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))}
          ></textarea>
        </div>

        {/* TinyMCE Editor */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Write your story</label>
          <Editor
            apiKey="muhvdqcz9lqg5jgayj93eeyismpcu19zu9u38c6rnuz7l98n"
            value={formData.storyContent}
            init={{
              height: 400,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | link",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={handleEditorChange}
          />
        </div>

        {/* Tags Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center"
              >
                {tag}
                <IoIosCloseCircle
                  onClick={() => handleTagRemove(tag)}
                  className="ml-2 cursor-pointer"
                />
              </span>
            ))}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Add tags"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                value={formData.tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleKeyPress}
              />
              <IoIosAddCircle
                size={32}
                onClick={handleTagAdd}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-purple-600"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-4 text-center">
  <button
    type="submit"
    className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 focus:outline-none relative"
    disabled={loading}
  >
    {loading ? (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="spinner-border animate-spin border-t-4 border-white rounded-full w-6 h-6"></div>
      </div>
    ) : (
      <span>{slug ? "Update Blog" : "Create Blog"}</span>
    )}
  </button>
</div>

      </form>
    </div>
  );
};

export default CreateBlogForm;
