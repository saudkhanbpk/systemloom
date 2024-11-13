import Link from 'next/link';
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdAdd } from 'react-icons/io'

// Define the prop type
interface HeaderProps {
  onSearch: (term: string) => void; // Function to handle search term changes
  buttonType: 'job' | 'project'; // Determine the type of button to display
}

const Header: React.FC<HeaderProps> = ({ onSearch, buttonType }) => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch(term) // Pass search term to parent component
  }

  return (
    <div className=''>
      <header className="flex flex-col mt-6 sm:mt-0 max-w-6xl md:flex-row justify-between items-center space-y-4 md:space-y-0  md:ml-11 ">
        <div className="flex items-center ">
           {/* Conditionally render Add Job or Add Project button */}
           <Link
            href={buttonType === 'job' ? '/admin/all-jobs/addjob' : '/admin/all-projects/addproject'} // Dynamic link
            passHref
          >
            <button
              aria-label={buttonType === 'job' ? "Add Job" : "Add Project"}
              className="flex items-center px-4 py-2 bg-[#4433e0] text-white rounded-lg shadow-sm hover:bg-[#6a79ff]"
            >
              <IoMdAdd className="mr-2" /> {buttonType === 'job' ? 'Add Job' : 'Add Project'}
            </button>
          </Link>
        </div>
        <div className="relative border rounded-md w-[300px] md:w-auto">
          <input
            className=" px-4 py-2 w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            type="text"
            aria-label="Search Jobs"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <CiSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </header>
    </div>
  )
}

export default Header
