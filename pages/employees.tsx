import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/searchbar'
import EmployeesList from '../components/employeeslist'
import Navbar from '../components/navbar'

import styles from '../styles/employees.module.css'
import AddEmployeeModal from '../components/addemployeemodal'
import 'bootstrap/dist/css/bootstrap.min.css';

const employees = () => {
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

export default employees