import React, { useState } from 'react'
import styles from '../styles/projectslist.module.css'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import 'bootstrap/dist/css/bootstrap.min.css';

import { DataGrid, GridToolbar, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import ProjectData from '../Project_data.json';
import { IconButton, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import ViewProjectDetails from "../components/viewprojectdetails";
import ProjectsUpdateUtilization from '../components/projectsupdateutilization'


const projectslist = () => {

  //view project
  const [openViewModal, setOpenViewModal] = useState<Boolean>(false);
  const handleOpenViewModal = () => setOpenViewModal(true);
  const handleCloseViewModal = () => setOpenViewModal(false);


  //view utilization
  const [openUpdateModal, setOpenUpdateModal] = useState<Boolean>(false);
  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);



  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menu = Boolean(anchorEl);
  const menuClose = () => setAnchorEl(null);
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [projectData, setProjectData] = useState<any[]>(ProjectData);





  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', headerAlign: "left", minWidth: 106, flex: 1, align: "left" },
    { field: 'name', headerName: 'Name', headerAlign: "left", minWidth: 91, flex: 1, align: "left" },
    { field: 'client', headerName: 'Client', headerAlign: "left", minWidth: 108, flex: 1, align: "left" },
    { field: 'projecttype', headerName: 'Project Type', headerAlign: "left", minWidth: 126, flex: 1, align: "left" },
    { field: 'projectresponsible', headerName: 'Project Responsible', headerAlign: "left", minWidth: 175, flex: 1, align: "left" },
    { field: 'startdate', headerName: 'Start Date', headerAlign: "left", minWidth: 109, flex: 1, align: "left" },
    { field: 'enddate', headerName: 'End Date', headerAlign: "left", minWidth: 102, flex: 1, align: "left" },
    {
      field: 'projectstatus', headerName: 'Project Status',
      renderCell: (params) => {
        return (
          <Typography
            fontSize="small"
            color={params.row.projectstatus === "Running" ? "#33BC28" : "#E02424"}
          >
            {params.row.projectstatus}
          </Typography>
        );
      },
      sortable: true, headerAlign: "left", minWidth: 136, flex: 1, align: "left"
    },
    {
      field: 'monthlystatus', headerName: 'Monthly Status',
      renderCell: (params) => {
        return (
          <Typography
            fontSize="small"
            color={
              params.row.monthlystatus === "Behind schedule" ? "#E02424" : "#33BC28"
            }
          >
            {params.row.monthlystatus}
          </Typography>
        );
      },
      sortable: true, headerAlign: "left", minWidth: 143, flex: 1, align: "left"
    },
    {
      field: "options",
      headerName: "Options",
      width: 120,
      renderCell: () => {
        return (
          <div>
            <IconButton aria-label="option" onClick={handleMenu}>
              <MoreVertIcon />
            </IconButton>
          </div>
        );
      },
      sortable: false,
      filterable: false,
    },
    // { field: 'options', headerName: 'Options',headerAlign: "left",minWidth: 54, flex: 1,align: "left", type: 'singleSelect', valueOptions:[ 'View','Edit', 'Active/Inactive', 'Update Utilization'], editable: true,
    // renderCell: (params)=> <MoreVertIcon/> },
  ];


  return (
    <div className={styles.projectcontainer}>
      <ViewProjectDetails
        openViewModal={openViewModal}
        handleCloseViewModal={handleCloseViewModal}
      />

      <ProjectsUpdateUtilization
        openUpdateModal={openUpdateModal}
        handleCloseUpdateModal={handleCloseUpdateModal}
      />


      <Menu
        anchorEl={anchorEl}
        open={menu}
        onClose={menuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className={styles.menuitem}
          onClick={handleOpenViewModal}
        >
          View
        </MenuItem>
        <MenuItem
          onClick={menuClose}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={menuClose}
        >
          Active / Inactive
        </MenuItem>
        <MenuItem
          onClick={handleOpenUpdateModal}
        >
          Update Utilization
        </MenuItem>
      </Menu>

      <DataGrid
        autoHeight={true}
        headerHeight={40}
        className={styles.datagrid}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        rows={projectData}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        sx={{
          border: "none",
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F3F4F6",
            height: "20px",
            color: "#4B5563",
            fontWeight: "600",
          },
          "& .MuiDataGrid-footerContainer": {
            justifyContent: "flex-start",
            height: "12px",
          },
          "& .MuiTablePagination-toolbar": {
            flexFlow: "row-reverse",
          },
          "& .MuiTablePagination-toolbar .MuiTablePagination-actions": {

            marginTop: "20px",
            marginBottom: "2rem",


          },
          "& .MuiTablePagination-displayedRows: before": {
            content: `"Show  "`,

          },
        }}
      />


    </div>
  );
}

export default projectslist