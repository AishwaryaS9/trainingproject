import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/searchbar'
import EmployeeType from '../components/employeetypelist'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddEmployeeTypeModal from '../components/addemployeetypemodal'
import Navbar from '../components/navbar'

const employeetype = () => {
    //add employeetype
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
                    title={"Employee Type"}
                    button={"Add Employee Type"} />
                <AddEmployeeTypeModal
                    openAddModal={openAddModal}
                    handleCloseAddModal={handleCloseAddModal}
                />
                <EmployeeType />
            </div>

        </>
    )
}

export default employeetype