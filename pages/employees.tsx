import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/Searchbar'
import EmployeesList from '../components/Employeeslist'
import Navbar from '../components/Navbar'

import styles from '../styles/employees.module.css'
import AddEmployeeModal from '../components/Addemployeemodal'
import 'bootstrap/dist/css/bootstrap.min.css';

const Employees = () => {
    //add employees
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setOpenAddModal(false);
    return (
        <>
            <div className={styles.sidebar} >
                <Sidebar />
            </div>
            <div>
                <Navbar />
                <SearchBar handleOpenModal={handleOpenAddModal}
                    title={"Employees"}
                    button={"Add Employees"} />
                <AddEmployeeModal
                    openAddModal={openAddModal}
                    handleCloseAddModal={handleCloseAddModal}
                />

                <EmployeesList />
            </div>

        </>
    )
}

export default Employees