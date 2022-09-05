import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/Searchbar'
import SkillsList from '../components/Skillslist'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/skills.module.css'
import AddSkillsModal from '../components/Addskillmodal'
import Navbar from '../components/Navbar'


const Skills = () => {
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

export default Skills