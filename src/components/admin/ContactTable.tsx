import { FC, useState } from 'react';
import Image from 'next/image';
import { FaTrashAlt, FaEye } from 'react-icons/fa';

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: string;
}

interface ContactTableProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

const ContactTable: FC<ContactTableProps> = ({ contacts, onDelete, onView }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  // Calculate the total number of pages
  const totalPages = Math.ceil(contacts.length / rowsPerPage);

  // Get the contacts to be displayed on the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentContacts = contacts.slice(startIndex, startIndex + rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto border rounded-lg shadow-lg bg-white">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {/* <th className="p-4">Image</th> */}
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Message</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact) => (
            <tr key={contact._id} className="border-b border-gray-200 hover:bg-gray-50">
              {/* <td className="p-2">
                <Image
                  src="/default-avatar.jpg"
                  alt="Contact Image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </td> */}
              <td className="p-4 text-nowrap">{`${contact.firstName} ${contact.lastName}`}</td>
              <td className="p-4 text-nowrap">{contact.email}</td>
              <td className="p-4 text-nowrap">{contact.phoneNumber}</td>
              <td className="p-4 text-nowrap truncate max-w-xs">{contact.message}</td>
              <td className="p-4 flex space-x-3">
                <FaEye
                  className="text-purple-600 cursor-pointer hover:text-purple-700 transition-all"
                  onClick={() => onView(contact._id)}
                />
                <FaTrashAlt
                  className="text-red-600 cursor-pointer hover:text-red-700 transition-all"
                  onClick={() => onDelete(contact._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-100">
          <tr>
            <td colSpan={7} className="py-2 px-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-200 text-gray-500" : "bg-purple-600 text-white"}`}
                >
                  Previous
                </button>
                <span className="text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-500" : "bg-purple-600 text-white"}`}
                >
                  Next
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ContactTable;
