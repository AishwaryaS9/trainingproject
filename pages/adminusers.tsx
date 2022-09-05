import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/searchbar'
import AdminUsersTable from '../components/adminuserslist'
import AddUserModal from '../components/addusermodal'
import Navbar from '../components/navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

const adminusers = () => {

  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <SearchBar handleOpenModal={handleOpenAddModal}
          title={"Admin Users"}
          button={"Add User"} />
        <AddUserModal
          openAddModal={openAddModal}
          handleCloseAddModal={handleCloseAddModal}
        />
        <AdminUsersTable />
      </div>
    </>
  )
}

export default adminusers