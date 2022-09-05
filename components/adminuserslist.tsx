import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from '../styles/adminuserslist.module.css'
import adminuserdata from '../adminuserdata.json';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

import { Button } from 'react-bootstrap';
import ViewAdminDetails from "../components/viewadmindetails";

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
import Image from 'next/image';
import CheckCircleImage from '../public/check-circle(1).png';
import CancelImage from '../public/x-circle.png';
import CheckCircle from '../public/check-circle.png';

const adminuserlist = () => {
  //view project
  const [openViewModal, setOpenViewModal] = useState<Boolean>(false);
  const handleOpenViewModal = () => setOpenViewModal(true);
  const handleCloseViewModal = () => setOpenViewModal(false);

  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menu = Boolean(anchorEl);
  const menuClose = () => setAnchorEl(null);
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [tableData, setTableData] = useState<any[]>(adminuserdata);


  // const onRowsSelectionHandler = (ids: any[]) => {
  //   const selectedRowsData = ids.map((id) => tableData.find((tableData) => tableData.id === id));
  //   console.log(selectedRowsData);
  // };

  // const handleRowClick = () => {

  // }


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'User ID', headerAlign: "left", minWidth: 90, flex: 1, align: "left" },
    { field: 'Name', headerName: 'Name', headerAlign: "left", minWidth: 91, flex: 1, align: "left" },
    { field: 'Email', headerName: 'Email', minWidth: 219, flex: 1, align: "left" },
    { field: 'Phone', headerName: 'Phone', minWidth: 141, flex: 1, align: "left" },
    {
      field: 'Roles', headerName: 'Roles',
      renderCell: (params) => {
        return (
          <Typography
            border="1px solid #262626"
            borderRadius="8px"
            padding="1px 1px"
            paddingLeft="6px"
            paddingRight="6px"

          >
            {params.row.Roles}
          </Typography>
        );
      },
      sortable: true, minWidth: 89, flex: 1, align: "left"
    },
    {
      field: 'Status', headerName: 'Status',
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex" }}>
            {params.row.Status != "-" ? (
              params.row.Status === "Active" ? (
                <Image src={CheckCircleImage} />
              ) : params.row.Status === "Invite sent" ? (
                <Image src={CheckCircle} />
              ) : (
                <Image src={CancelImage} />
              )
            ) : null}
            <Typography fontSize="14px" fontWeight="500" paddingLeft={1}>
              {params.row.Status}
            </Typography>
          </Box>


        );
      },
      sortable: true, minWidth: 105, flex: 1, align: "left"
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

  ];

  return (
    <div className={styles.container}>
      <ViewAdminDetails
        openViewModal={openViewModal}
        handleCloseViewModal={handleCloseViewModal}
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
          Archive
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
        rows={tableData}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        sortingOrder={['desc', 'asc']}
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

export default adminuserlist