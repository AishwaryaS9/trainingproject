import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/searchbar'
import ProjectTypeList from '../components/projecttypelist'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProjectTypeModal from '../components/addprojecttypemodal'
import Navbar from '../components/navbar'

const projecttype = () => {
      //add projecttype
      const [openAddModal, setOpenAddModal] = useState(false);
      const handleOpenAddModal = () => setOpenAddModal(true);
      const handleCloseAddModal = () => setOpenAddModal(false);
    return (
        <>

            <div>
                <Sidebar />
            </div>

            <div>
                <Navbar/>
                <SearchBar handleOpenModal={handleOpenAddModal}
                    title={"Project Type"}
                    button={"Add Project Type"} />
                <AddProjectTypeModal
                    openAddModal={openAddModal}
                    handleCloseAddModal={handleCloseAddModal}
                />
                <ProjectTypeList />
            </div>

        </>
    )
}

export default projecttype