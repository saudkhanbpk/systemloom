import React, { useState } from 'react';
import Image from 'next/image';
import CommonButton from '../common/Button';
import { FC } from 'react';
import CareerSectionImage from '../../../public/assets/careerImages/Rectangle 402.png';
import axios from 'axios';
import { backend_url } from '@/newLayout';
import { toast } from 'react-toastify';

const CareerHeroSection: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    jobField: '',
    professionalUrl: '',
    resume: null as File | null, // Explicitly define resume as File or null
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === 'file' && files) {
      setFormData({ ...formData, [name]: files[0] }); // Access the first file from the FileList
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData to handle file upload
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('jobField', formData.jobField);
    formDataToSend.append('professionalUrl', formData.professionalUrl);
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    setLoading(true); // Start loading indicator
    

    try {
      // Send the form data to the backend
      const res = await axios.post(`${backend_url}/api/v1/resume/send`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file upload
        },
      });
console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message)
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          jobField: '',
          professionalUrl: '',
          resume: null,
        });
      }
    } catch (error:any) {
      console.log(error);
      toast.error(error.response.data.message)
      
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div className={`${isDialogOpen ? 'blurred' : ''}`}>
      <div className="relative bg-black text-white h-[644px]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="mb-8 md:mb-12 p-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Be Who You Are. Do What You Love
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Are you at your best in an atmosphere of trust, knowhow, freedom and support,
              alongside talented and creative people just like you? That's our working style.
            </p>
            <CommonButton
              className="bg-[#9A00FF] hover:bg-purple-700 text-white px-6 py-3 rounded-[12px] transition-colors w-[228px] h-[48px]"
              title="Send your resume"
              handleClick={handleDialogOpen}
            />
          </div>
          <div className="relative">
            <div className="absolute lg:left-[308px] lg:-top-20 md:left-0 md:top-0 top-5 overflow-hidden w-full md:w-auto">
              <Image
                src={CareerSectionImage}
                alt="Team collaboration"
                className="w-full h-full rounded-[24px] md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-md p-4 sm:p-6 z-50"
          onClick={handleDialogClose}
        >
          <div
            className="text-white p-6 sm:w-[400px] md:w-[600px] max-w-full relative z-50 h-fit w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing dialog
          >
            <h2 className="text-2xl font-semibold mb-4">Submit Your Resume</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg bg-gray-800 text-white outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg bg-gray-800 text-white outline-none"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Phone</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg bg-gray-800 text-white outline-none"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Field</label>
                <input
                  type="text"
                  name="jobField"
                  value={formData.jobField}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg bg-gray-800 text-white outline-none"
                  placeholder="Your field"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Professional URL</label>
                <input
                  type="url"
                  name="professionalUrl"
                  value={formData.professionalUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg bg-gray-800 text-white outline-none"
                  placeholder="LinkedIn or other professional link"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={handleDialogClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#9A00FF] hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerHeroSection;
