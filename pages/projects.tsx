import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/Searchbar'
import ProjectsList from '../components/Projectslist'
import styles from '../styles/projects.module.css'
import AddProjectModal from '../components/Addprojectmodal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'


const Projects = () => {
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

export default Projects