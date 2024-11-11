"use client";
import { backend_url } from '@/newLayout';
import { RootState } from '@/redux/store';
import axios from 'axios';
import React, { useState,  ChangeEvent, FormEvent } from 'react';
import { useSearchParams } from "next/navigation";
import { toast } from 'react-toastify';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  stateOrProvince: string;
  postalOrZipCode: string;
  gender: string;
  applyingForPosition: string;
  experience: string;
  professionalUrl: string;
  resume: File | null;
  motivationLetter: File | null;
}

const JobApplicationForm: React.FC = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");  
  console.log(jobId);
  
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    stateOrProvince: '',
    postalOrZipCode: '',
    gender: '',
    applyingForPosition: '',
    experience: '',
    professionalUrl: '',
    resume: null,
    motivationLetter: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
        [`${name}OriginalName`]: file.name, // Add original file name here
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!jobId) {
      toast.error("Job ID is missing.");
      return;
    }
  
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value as Blob | string);
      }
    });
  
    // Append the original file names
    if (formData.resume) {
      formDataToSend.append("resumeOriginalName", formData.resume.name);
    }
    if (formData.motivationLetter) {
      formDataToSend.append("motivationLetterOriginalName", formData.motivationLetter.name);
    }
  
    setLoading(true); 
    try {
      const res = await axios.post(`${backend_url}/api/v1/application/apply/${jobId}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          address: '',
          city: '',
          stateOrProvince: '',
          postalOrZipCode: '',
          gender: '',
          applyingForPosition: '',
          experience: '',
          professionalUrl: '',
          resume: null,
          motivationLetter: null,
        })
      }
    } catch (error: any) {
      console.error(error);
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        city: '',
        stateOrProvince: '',
        postalOrZipCode: '',
        gender: '',
        applyingForPosition: '',
        experience: '',
        professionalUrl: '',
        resume: null,
        motivationLetter: null,
      })
    } finally {
      setLoading(false)
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl bg-white  rounded-lg p-8 sm:p-12 md:p-16 lg:p-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-12 ">Job Application Form</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">State/Province:</label>
              <input
                type="text"
                name="stateOrProvince"
                value={formData.stateOrProvince}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Postal/Zip Code:</label>
              <input
                type="text"
                name="postalOrZipCode"
                value={formData.postalOrZipCode}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Gender:</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Position Applying For:</label>
              <input
                type="text"
                name="applyingForPosition"
                value={formData.applyingForPosition}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Experience:</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Professional URL:</label>
              <input
                type="text"
                name="professionalUrl"
                value={formData.professionalUrl}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Resume (PDF/Word):</label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Motivation Letter (PDF/Word):</label>
              <input
                type="file"
                name="motivationLetter"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6 ">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
              
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
