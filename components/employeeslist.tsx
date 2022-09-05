import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from '../styles/employeeslist.module.css'
import employeesdata from '../employeesdata.json';

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import ViewEmployeeDetails from '../components/viewemployeedetails'
import EmployeesUpdateUtilization from '../components/employeesupdateutilization'



const employeeslist = () => {
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


  const [employeeListData, setEmployeeListData] = useState<any[]>(employeesdata);



  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Employee ID', headerAlign: "left", minWidth: 124, flex: 1, align: "left" },
    { field: 'name', headerName: 'Name', headerAlign: "left", minWidth: 91, flex: 1, align: "left" },
    { field: 'email', headerName: 'Email', headerAlign: "left", minWidth: 219, flex: 1, align: "left" },
    {
      field: 'projectname', headerName: 'Project Name',
      renderCell: (params) => {
        return (
          <Typography
            border="1px solid #262626"
            borderRadius="8px"
            padding="1px 1px"
            paddingLeft="6px"
            paddingRight="6px"

          >
            {params.row.projectname}
          </Typography>
        );
      },
      headerAlign: "left", minWidth: 234, flex: 1, align: "left"
    },
    {
      field: 'skills', headerName: 'Skills',
      renderCell: (params) => {
        return (
          <Typography
            border="1px solid #262626"
            borderRadius="8px"
            padding="1px 1px"
            paddingLeft="6px"
            paddingRight="6px"

          >
            {params.row.skills}
          </Typography>
        );
      },

      sortable: true, headerAlign: "left", minWidth: 192, flex: 1, align: "left"
    },
    { field: 'employeetype', headerName: 'Employee Type', sortable: true, headerAlign: "left", minWidth: 144, flex: 1, align: "left" },
    { field: 'joiningdate', headerName: 'Joining Date', sortable: true, headerAlign: "left", minWidth: 125, flex: 1, align: "left" },
    { field: 'salary', headerName: 'Salary', sortable: true, headerAlign: "left", minWidth: 94, flex: 1, align: "left" },
    { field: 'utilization', headerName: 'Utilization', sortable: true, headerAlign: "left", minWidth: 109, flex: 1, align: "left" },
    { field: 'revenueopportunity', headerName: 'Revenue Opportunity', sortable: true, headerAlign: "left", minWidth: 185, flex: 1, align: "left" },
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
  ];

  return (

    <div className={styles.container}>
      <ViewEmployeeDetails openViewModal={openViewModal}
        handleCloseViewModal={handleCloseViewModal}
      />

<EmployeesUpdateUtilization
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
        <MenuItem
          onClick={handleOpenViewModal}
          sx={{ color: "#111928", fontFamily: "Inter", fontSize: "14px" }}
        >
          View
        </MenuItem>
        <MenuItem
          onClick={menuClose}
          sx={{ color: "#111928", fontFamily: "Inter", fontSize: "14px" }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={menuClose}
          sx={{ color: "#111928", fontFamily: "Inter", fontSize: "14px" }}
        >
          Active / Inactive
        </MenuItem>
        <MenuItem
          onClick={handleOpenUpdateModal}
          sx={{ color: "#111928", fontFamily: "Inter", fontSize: "14px" }}
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
        rows={employeeListData}
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
  )
}

export default employeeslist