"use client";
import AdminLayout from '@/components/shared/AdminLayout';
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  title: string;
  description: string;
  jobType: string;
  location: string;
  skills: string;
  experience: string;
  salary: number;
  category: string;
  employmentType: string;
  qualifications: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    jobType: '',
    location: '',
    skills: '',
    experience: '',
    salary: 0,
    category: '',
    employmentType: '',
    qualifications: ''
  });

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  // Handle cancel
  const handleCancel = () => {
    // Reset the form or handle cancel action
    setFormData({
      title: '',
      description: '',
      jobType: '',
      location: '',
      skills: '',
      experience: '',
      salary: 0,
      category: '',
      employmentType: '',
      qualifications: ''
    });
  };

  return (
    <AdminLayout>
<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add New Position</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-12">
          <label className="block text-gray-700 text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-9">
          <label className="block text-gray-700 text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Row 1: jobType and location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 2: experience and salary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Experience Level</option>
              <option value="0-2 years">0-2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 3: category and employmentType */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Design">Design</option>
              <option value="Human Resources">Human Resources</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Employment Type</label>
            <input
              type="text"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">Qualifications</label>
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between">
          <Link href="/admin/all-jobs">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          </Link>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Post Now
          </button>
        </div>
      </form>
    </div>
    </AdminLayout>
    
  );
};

export default Page;
