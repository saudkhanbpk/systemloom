import { backend_url } from "@/newLayout";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface User {
  id: string;
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
  resume: string;
  motivationLetter: string;
  originalResumeName: string;
  originalMotivationLetterName: string;
  createdAt: string; // Add createdAt field for date formatting
}

interface UserTableProps {
  users: User[];
}

const ApplicantsTable: React.FC<UserTableProps> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const applicantsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(users.length / applicantsPerPage);

  // Get current page applicants
  const indexOfLastApplicant = currentPage * applicantsPerPage;
  const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage;
  const currentApplicants = users.slice(indexOfFirstApplicant, indexOfLastApplicant);

  const handleSeeDetail = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString(); // Format date as per your requirement
  };

  const handleDelete = async (id:string) => {
    try {
      const res = await axios(`${backend_url}/api/v1/application/delete/${id}` )
      if (res.data.success){
        toast.success(res.data.message)
      }
    } catch (error:any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message
      toast.error(errorMessage)
    }
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-200 shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Phone Number</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Resume</th>
            <th className="px-4 py-2 text-left">Motivation Letter</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentApplicants.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="px-4 py-2">{user.firstName}</td>
              <td className="px-4 py-2">{user.lastName}</td>
              <td className="px-4 py-2">{user.phoneNumber}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                {user.resume ? (
                  <a
                    href={user.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.originalResumeName || "View Resume"}
                  </a>
                ) : (
                  <span className="text-gray-500">No Resume Available</span>
                )}
              </td>
              <td className="px-4 py-2">
                {user.motivationLetter ? (
                  <a
                    href={user.motivationLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.originalMotivationLetterName || "View Motivation Letter"}
                  </a>
                ) : (
                  <span className="text-gray-500">No Motivation Letter Available</span>
                )}
              </td>
              <td className="px-4 py-2">{formatDate(user.createdAt)}</td>
              <td className="px-4 py-2">
                <div className="flex space-x-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleSeeDetail(user)}
                    aria-label="See Detail"
                  >
                    <FaEye size={18} />
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700" aria-label="Delete">
                    <FaTrash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? "bg-gray-200 text-gray-500" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages ? "bg-gray-200 text-gray-500" : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal for User Details */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
            <h2 className="text-lg font-semibold mb-4">User Details</h2>
            <p><strong>First Name:</strong> {selectedUser.firstName}</p>
            <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
            <p><strong>Phone Number:</strong> {selectedUser.phoneNumber}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Address:</strong> {selectedUser.address}, {selectedUser.city}, {selectedUser.stateOrProvince}, {selectedUser.postalOrZipCode}</p>
            <p><strong>Gender:</strong> {selectedUser.gender}</p>
            <p><strong>Position Applied:</strong> {selectedUser.applyingForPosition}</p>
            <p><strong>Experience:</strong> {selectedUser.experience}</p>
            <p>
              <strong>Professional URL:</strong>{" "}
              <a
                href={selectedUser.professionalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {selectedUser.professionalUrl}
              </a>
            </p>
            <p><strong>Motivation Letter:</strong>
              {selectedUser.motivationLetter ? (
                <a
                  href={selectedUser.motivationLetter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {selectedUser.originalMotivationLetterName || "View Motivation Letter"}
                </a>
              ) : (
                <span className="text-gray-500">No Motivation Letter Available</span>
              )}
            </p>
            <p><strong>Resume:</strong>
              {selectedUser.resume ? (
                <a
                  href={selectedUser.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {selectedUser.originalResumeName || "View Resume"}
                </a>
              ) : (
                <span className="text-gray-500">No Resume Available</span>
              )}
            </p>
            <p><strong>Date:</strong> {formatDate(selectedUser.createdAt)}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantsTable;
