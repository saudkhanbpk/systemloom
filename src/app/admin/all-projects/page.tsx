"use client"
import OurProjectsGrid from '@/components/admin/AllProjects'
import Header from '@/components/admin/Header'
import AdminLayout from '@/components/shared/AdminLayout'
import React, { useState } from 'react'

const Page: React.FC = () => {
  // Optional: State for managing the search term if you want Header to filter AllServices
  const [searchTerm, setSearchTerm] = useState<string>("")

  return (
    <AdminLayout>
      <div>
        {/* If search functionality is needed, pass onSearch as a prop */}
        <Header onSearch={setSearchTerm} buttonType="project" />
        <OurProjectsGrid searchTerm={searchTerm}  />
      </div>
    </AdminLayout>
  )
}

export default Page
