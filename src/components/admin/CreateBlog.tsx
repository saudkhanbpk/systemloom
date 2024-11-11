import React, { useState , createContext , useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import { backend_url } from '@/newLayout';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
const CreateBlogForm = () => {
  const router = useRouter()
  // const AdminContext = createContext(null);
  const [storyContent, setStoryContent] = useState("");
  const [altDescription, setAltDescription] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState<File | null>(null); // State to store image file
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State to store image preview
  const handleEditorChange = (content: string) => {
    setStoryContent(content);
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleTagAdd = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput(""); // Clear the input field after adding
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTagAdd();
    }
  };

  // Image Upload Handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);

      // Create a preview of the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", storyContent);
    formData.append("altDescription", altDescription);
    formData.append("tags", JSON.stringify(tags));
    formData.append("description", description);
    formData.append("title", title);

    // Append the image to form data if available
    if (image) {
      formData.append("image", image);
    }
    try {
      // Create new job if no jobId
      const res = await axios.post(`${backend_url}/api/v1/blogs/create`, formData, {
        withCredentials: true,
      });
    
      // Check if the request was successful
      if (res.status == 200) {
        toast.success("Blog posted successfully!");
        router.push("/admin/all-blogs");
      } else {
        alert(`Error: ${res.statusText}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
    
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        {/* Image Upload Section */}
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

          {/* Preview selected image */}
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Image Preview" className="w-32 h-32 object-cover mx-auto" />
            </div>
          )}
        </div>

        {/* Alt Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Alt Description</label>
          <input
            type="text"
            placeholder="Enter image alt"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={altDescription}
            onChange={(e) => setAltDescription(e.target.value)}
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter Blog Title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Enter a brief description here..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* TinyMCE Editor */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Write your story</label>
          <Editor
            apiKey="muhvdqcz9lqg5jgayj93eeyismpcu19zu9u38c6rnuz7l98n"
            value={storyContent}
            init={{
              height: 400,
              plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table"],
              toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | link",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={handleEditorChange}
          />
        </div>

        {/* Tags Section */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tags</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full flex items-center">
                {tag}
                <IoIosCloseCircle
                  className="ml-2 cursor-pointer text-blue-600"
                  onClick={() => handleTagRemove(tag)}
                />
              </span>
            ))}
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Tags"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tagInput}
              onChange={handleTagInputChange}
              onKeyDown={handleKeyPress}
            />
            <button
              type="button"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 sm:block hidden"
              onClick={handleTagAdd}
            >
              <IoIosAddCircle />
            </button>
          </div>

          {/* Mobile Add Button */}
          <div className="sm:hidden mt-2">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
              onClick={handleTagAdd}
            >
              Add Tag
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
