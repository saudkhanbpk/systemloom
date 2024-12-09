"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminLayout from "@/components/shared/AdminLayout";
import { backend_url } from "@/newLayout";
import axios from "axios";
import React, { useState, useEffect } from "react";

// Define the type for a subscriber
interface Subscriber {
  email: string;
}

const AllSubscriber = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(""); // To hold error messages

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/getAllSubscribers`);
        console.log("API response:", res); // Log the full response

        // Check if the response is successful
        if (res.data.success) {
          const data = res.data.subscribers.filter((subscriber: Subscriber) =>
            isValidEmail(subscriber.email)
          ); // Filter out invalid emails
          setSubscribers(data);
          setFilteredSubscribers(data);
          setErrorMessage(""); // Clear any previous error messages
        } else {
          setErrorMessage(res.data.message || "Failed to fetch subscribers");
        }
      } catch (error) {
        console.error("Error fetching subscribers:", error);
        setErrorMessage("An error occurred while fetching subscribers");
      }
    };

    fetchSubscribers();
  }, []);

  // Filter subscribers based on the search query
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (event.target.value.trim() === "") {
      setFilteredSubscribers(subscribers);
    } else {
      const filtered = subscribers.filter((subscriber) =>
        subscriber.email.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredSubscribers(filtered);
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4 md:mb-0">
              All Subscribers: {filteredSubscribers.length}
            </h1>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by email"
              className="px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg">
              {errorMessage}
            </div>
          )}

          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber, index) => (
                  <tr
                    key={index}
                    className={`border-t hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{subscriber.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AllSubscriber;
