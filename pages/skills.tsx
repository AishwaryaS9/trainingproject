import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/searchbar'
import SkillsList from '../components/skillslist'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/skills.module.css'
import AddSkillsModal from '../components/addskillmodal'
import Navbar from '../components/navbar'


const skills = () => {
     //add skills
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
                    title={"Skills"}
                    button={"Add Skill"} />
                <AddSkillsModal
                    openAddModal={openAddModal}
                    handleCloseAddModal={handleCloseAddModal}
                />
                <SkillsList />
                {/* <AdminUsersList/> */}
            </div>

        </>
    )
}

export default skills