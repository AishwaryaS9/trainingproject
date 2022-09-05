import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/Searchbar'
import ProjectTypeList from '../components/Projecttypelist'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProjectTypeModal from '../components/Addprojecttypemodal'
import Navbar from '../components/Navbar'

const Projecttype = () => {
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

export default Projecttype