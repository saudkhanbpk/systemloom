"use client";

import ApplicantsTable from "@/components/admin/ApplicantsTable";
import AdminLayout from "@/components/shared/AdminLayout";
import useGetAllApplicants from "@/hooks/useGetAllApplicants";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";




const ApplicantsPage = () => {
  // Fetch applicants
  useGetAllApplicants();

  // Get applicants from Redux store
  const applicants = useSelector((store: RootState) => store.applicants.applicants);
  // console.log("applicants", applicants);

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered applicants based on search term
  const filteredApplicants = applicants.filter((applicant) =>
    `${applicant.firstName} ${applicant.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">

        {/* Search Bar */}
        <div className="flex justify-between item-center mb-4">
        <h1 className="text-2xl font-bold mb-6">Applicant List</h1>

          <div className="relative flex item-center w-full max-w-xs">
            <input
              type="text"
              placeholder="Search applicants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Applicants Table */}
        <ApplicantsTable users={filteredApplicants} />
      </div>
    </AdminLayout>
  );
};

export default ApplicantsPage;
