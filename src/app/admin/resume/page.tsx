"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTrash } from "react-icons/fa";
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import AdminLayout from '@/components/shared/AdminLayout';
import axios from 'axios';
import { backend_url } from '@/newLayout';
import { toast } from 'react-toastify';

// Type definition for Resume data
interface Resume {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  jobField: string;
  professionalUrl: string;
  resume: string;
  originalFileName: string;
}

const Page = () => {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [resumes, setResumes] = useState<Resume[]>([]);

  // Fetch resumes from API
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/resume/allResume`);
        if (res.data.success) {
          setResumes(res.data.resumes);
        }
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes(); // Call the function to fetch data when the component mounts
  }, []);

  // Filtering resumes based on search term
  const filteredData = resumes.filter((item) =>
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.jobField.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.professionalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.originalFileName ? item.originalFileName.toLowerCase() : '').includes(searchTerm.toLowerCase())) // Fallback value
  );
  

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`${backend_url}/api/v1/resume/delete/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        // Optionally, update the state to remove the deleted resume from the UI
        setResumes(resumes.filter((resume) => resume._id !== id));
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-4">
          {/* Search Input */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Resume List</h1>
            <div className="relative flex items-center w-full max-w-xs">
              <input
                type="text"
                placeholder="Search resume..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border-2 border-black rounded-md focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Email</th>
                  <th className="border p-2 text-left">Phone</th>
                  <th className="border p-2 text-left">Field</th>
                  <th className="border p-2 text-left">Professional URL</th>
                  <th className="border p-2 text-left">Resume</th>
                  <th className="border p-1 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row) => (
                  <tr key={row._id}>
                    <td className="border p-2 text-nowrap">{row.name}</td>
                    <td className="border p-2 text-nowrap">{row.email}</td>
                    <td className="border p-2 text-nowrap">{row.phoneNumber}</td>
                    <td className="border p-2 text-nowrap">{row.jobField}</td>
                    <td className="border p-2">{row.professionalUrl}</td>
                    <td className="border p-2 text-nowrap">
                      <a href={row.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {row.originalFileName}
                      </a>
                    </td>
                    <td className="border p-1 text-center">
                      <button onClick={() => handleDelete(row._id)}>
                        <FaTrash className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default Page;
