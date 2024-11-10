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
    <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {/* <th className="p-4">
              <input type="checkbox" className="form-checkbox h-5 w-5" />
            </th> */}
            <th className="p-4">Image</th>
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
              {/* <td className="p-4">
                <input type="checkbox" className="form-checkbox h-5 w-5" />
              </td> */}
              <td className="p-2">
                <Image
                  src="/default-avatar.jpg"
                  alt="Contact Image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </td>
              <td className="p-4 text-nowrap">{`${contact.firstName} ${contact.lastName}`}</td>
              <td className="p-4 text-nowrap">{contact.email}</td>
              <td className="p-4 text-nowrap">{contact.phoneNumber}</td>
              <td className="p-4 text-nowrap truncate max-w-xs">{contact.message}</td>
              <td className="p-4  flex space-x-3">
                <FaEye
                  className="text-blue-500 cursor-pointer hover:text-blue-700 transition-all"
                  onClick={() => onView(contact._id) }
                />
                <FaTrashAlt
                  className="text-red-500 cursor-pointer hover:text-red-700 transition-all"
                  onClick={() => onDelete(contact._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4">
        <button
          className="px-4 py-2 bg-gray-100 text-gray-500 rounded hover:bg-gray-200"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-100 text-gray-500 rounded hover:bg-gray-200"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactTable;
