import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/Searchbar'
import EmployeeType from '../components/Employeetypelist'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddEmployeeTypeModal from '../components/Addemployeetypemodal'
import Navbar from '../components/Navbar'

const Employeetype = () => {
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

export default Employeetype