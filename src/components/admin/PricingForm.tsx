"use client";

import React, { useEffect, useState } from 'react';
import { FaRegEye, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backend_url } from '@/newLayout';

interface PricingItem {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  referenceLink: string;
  details: string;
  createdAt: string;
}

const PricingForm = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PricingItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [data, setData] = useState<PricingItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>(''); // State for real-time clock

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${backend_url}/api/v1/pricing/all/form-submissions`);
        if (res.data.success && Array.isArray(res.data.data)) {
          setData(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlerDelete = async (id: string) => {
    try {
      // Make the delete API call
      const res = await axios.delete(`${backend_url}/api/v1/pricing/delete/form-submissions/${id}`, {withCredentials:true});
      
      if (res.data.success) {
        // Remove the deleted item from the state
        setData((prevData) => prevData.filter(item => item._id !== id));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred while deleting");
    }
  };
  

  useEffect(() => {
    // Function to update the current time every second
    const interval = setInterval(() => {
      const time = new Date().toLocaleString(); // Get current date and time
      setCurrentTime(time);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const openModal = (item: PricingItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col text-center md:text-start mt-6 md:mt-2 justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Pricing List</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search customers..."
            className="border outline-none p-1 w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Phone Number</th>
              <th className="border p-2 text-left">Service</th>
              <th className="border p-2 text-left">Reference Link</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 text-nowrap">{item.name}</td>
                <td className="border p-2 text-nowrap">{item.email}</td>
                <td className="border p-2 text-nowrap">{item.phoneNumber}</td>
                <td className="border p-2 text-nowrap">{item.service}</td>
                <td className="border p-2">
                  <a href={item.referenceLink} target="_blank" rel="noopener noreferrer">
                    {item.referenceLink}
                  </a>
                </td>
                <td className="border p-2">
                  <button className="text-blue-500 mr-2" onClick={() => openModal(item)}>
                    <FaRegEye />
                  </button>
                  <button className="text-red-500" onClick={() => handlerDelete(item._id)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-5">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
        </span>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded ${currentPage === Math.ceil(filteredData.length / itemsPerPage) ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <p>
              <strong>Name:</strong> {selectedItem.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedItem.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {selectedItem.phoneNumber}
            </p>
            <p>
              <strong>Service:</strong> {selectedItem.service}
            </p>
            <p>
              <strong>Reference Link:</strong>{' '}
              <a href={selectedItem.referenceLink} target="_blank" rel="noopener noreferrer">
                {selectedItem.referenceLink}
              </a>
            </p>
            <p>
              <strong>Description:</strong> {selectedItem.details}
            </p>
            <p>
              <strong>Created At:</strong> {new Date(selectedItem.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Current Time:</strong> {currentTime}
            </p>
            <div className="mt-4 flex justify-end">
              <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingForm;
