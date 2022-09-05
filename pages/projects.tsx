import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/searchbar'
import ProjectsList from '../components/projectslist'
import styles from '../styles/projects.module.css'
import AddProjectModal from '../components/addprojectmodal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar'


const projects = () => {
    //add project
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setOpenAddModal(false);
    return (
        <>
            <div className={styles.sidebar} >
                <Sidebar />
            </div>
            <div>
                <Navbar/>
                <SearchBar handleOpenModal={handleOpenAddModal}
                    title={"Projects"}
                    button={"Add Project"} />
                <AddProjectModal
                    openAddModal={openAddModal}
                    handleCloseAddModal={handleCloseAddModal}
                />
                <ProjectsList />
                {/* <AdminUsersList/> */}
            </div>

        </>
    )
}

export default projects