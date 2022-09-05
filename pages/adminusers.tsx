import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/Searchbar'
import AdminUsersTable from '../components/Adminuserslist'
import AddUserModal from '../components/Addusermodal'
import Navbar from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

const Adminusers = () => {

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

export default Adminusers