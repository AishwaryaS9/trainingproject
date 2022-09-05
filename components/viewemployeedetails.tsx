import {
  Backdrop,
  Box,
  Divider,
  Fade,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import styles from "../styles/viewemployeedetails.module.css";
import Image from 'next/image'
import CloseButton from '../public/closebutton.png'

const Viewemployeedetails = ({ openViewModal, handleCloseViewModal }: any) => {
  const data = {
    id: "1",
    name: "Hayyim",
    email: "rianson0@time.com",
    projectname: "lorem ipsum",
    skills: "lorem ipsum",
    contactno: "+1 (415)425-5588",
    employeetype: "lorem ipsum",
    joiningdate: "lorem ipsum",
    salary: "lorem ipsum",
    utilization: "lorem ipsum",
    revenueopportunity: "lorem ipsum",
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openViewModal}
      onClose={handleCloseViewModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openViewModal}>
        <Box className={styles.employeemodalcontainer}>
          <IconButton
            className={styles.closebutton}
            onClick={handleCloseViewModal}
          >
            <Image src={CloseButton} />
          </IconButton>

          <Typography className={styles.title} variant="h6" component="h2" sx={{ fontSize: 22 }}>
            View Details
          </Typography>
          <Divider />
          <Grid
            container
            rowSpacing={4}
            columnSpacing={4}
            className={styles.details}
          >
            <Grid item xs={4}>
              <Box className={styles.gridbox}>
                {/* sx={{ display: "flex", justifyContent: "space-between" }} */}
                <Box className={styles.subtitle}>
                  <Typography className={styles.subtitle}>
                    EMPLOYEE ID
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 600 }}
                    className={styles.field}>{data.id}

                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "50px", marginRight: "20px" }}
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box className={styles.gridbox}>
                <Box className={styles.subtitle}>
                  <Typography className={styles.subtitle}>NAME</Typography>
                  <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.name}</Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "50px", mr: "20px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={styles.title}>
                <Typography className={styles.subtitle}>EMAIL</Typography>
                <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.email}</Typography>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className={styles.title}>
                  <Typography className={styles.subtitle} sx={{ width: "450px" }}>
                    CONTACT NUMBER
                  </Typography>
                  <Typography sx={{ fontWeight: 600, width: "450px" }} className={styles.field}>{data.contactno}</Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "50px", mr: "20px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={4} >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className={styles.title}>
                  <Typography className={styles.subtitle} sx={{ width: "250" }}>
                    EMPLOYEE TYPE
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }} className={styles.field}>
                    {data.employeetype}
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "50px", mr: "20px" }}
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box className={styles.title}>
                <Typography className={styles.subtitle}>JOINING DATE</Typography>
                <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.joiningdate}</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className={styles.title}>
                  <Typography className={styles.subtitle}>SALARY</Typography>
                  <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.salary}</Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "50px", mr: "20px" }}
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className={styles.title}>
                  <Typography className={styles.subtitle}>
                    UTILIZATION
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.utilization}</Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "50px", mr: "20px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={styles.title}>
                <Typography className={styles.subtitle} sx={{ width: "450px" }}>
                  REVENUE OPPORTUNITY
                </Typography>
                <Typography sx={{ fontWeight: 600, width: "450px" }} className={styles.field}>{data.revenueopportunity}</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box className={styles.title}>
                  <Typography className={styles.subtitle}>SKILLS</Typography>
                  <Typography sx={{
                    fontWeight: 600, border: "1px solid #262626",
                    borderRadius: "8px", padding: "1px 1px", paddingLeft: "6px", paddingRight: "6px"
                  }} className={styles.field}>{data.skills}</Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "50px", mr: "20px" }}
                />
              </Box>
            </Grid>

            <Grid className={styles.grid}>
              <Grid item xs={4}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box className={styles.title}>
                    <Typography className={styles.subtitle}>PROJECT NAME</Typography>
                    <Typography sx={{
                    fontWeight: 600, border: "1px solid #262626",
                    borderRadius: "8px", padding: "1px 1px", paddingLeft: "6px", paddingRight: "6px"
                  }}  className={styles.field}>{data.projectname}</Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ height: "50px", mr: "20px" }}
                  />
                </Box>
              </Grid>
            </Grid>

          </Grid>

        </Box>
      </Fade>
    </Modal>


  );
};

export default Viewemployeedetails