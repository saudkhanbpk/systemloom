"use client"
import OurProjectsGrid from '@/components/admin/AllProjects'
import Header from '@/components/admin/Header'
import AdminLayout from '@/components/shared/AdminLayout'
import React, { useState } from 'react'

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  return (
    <AdminLayout>
      <div>
        <Header onSearch={setSearchTerm} buttonType="project" />
        <OurProjectsGrid searchTerm={searchTerm}  />
      </div>
    </AdminLayout>
  )
}

export default Page
