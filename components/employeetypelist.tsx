import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from '../styles/employeetypelist.module.css'
import EmployeesTypeData from '../employeestypedata.json';

import MoreVertIcon from "@mui/icons-material/MoreVert";

import ProjectTypeData from '../projecttypedata.json';
import { IconButton, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import ViewEmployeeTypeDetails from "../components/Viewemployeetypedetails";



const Employeetypelist = () => {

  const [openViewModal, setOpenViewModal] = useState<Boolean>(false);
  const handleOpenViewModal = () => setOpenViewModal(true);
  const handleCloseViewModal = () => setOpenViewModal(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menu = Boolean(anchorEl);
  const menuClose = () => setAnchorEl(null);
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [employeetypedata, setEmployeetypedata] = useState<any[]>(EmployeesTypeData);
  console.log(employeetypedata);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', headerAlign: "left", minWidth: 91, flex: 1, align: "left" },
    { field: 'description', headerName: 'Description', headerAlign: "left", minWidth: 450, flex: 1, align: "left" },
    { field: 'status', headerName: 'Status', type: 'number', headerAlign: "left", minWidth: 84, flex: 1, align: "left", },
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
    <div className={styles.employeetypecontainer}>
      <ViewEmployeeTypeDetails
        openViewModal={openViewModal}
        handleCloseViewModal={handleCloseViewModal}
      />
      <Menu className={styles.menuitem}
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
        >View
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
          Archieve
        </MenuItem>
        <MenuItem
          onClick={menuClose}
          sx={{ color: "#111928", fontFamily: "Inter", fontSize: "14px" }}
        >
          Delete
        </MenuItem>

      </Menu>

      <DataGrid
        autoHeight={true}
        headerHeight={40}
        className={styles.datagrid}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        rows={employeetypedata}
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

export default Employeetypelist