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
  import styles from "../styles/viewadmindetails.module.css";
  import Image from 'next/image'
  import CloseButton from '../public/closebutton.png'
  
  const Viewadmindetails = ({ openViewModal, handleCloseViewModal }: any) => {
    const data = {
      id: "1",
      Name: "Hewet MacKartan",
      Email: "hmackartan0@ifeng.com",
      Phone: "791-159-0615",
      Roles: "Admin",
      Status: "Active",
  
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
          <Box className={styles.adminmodalcontainer}>
            <IconButton
              className={styles.closebutton}
              onClick={handleCloseViewModal}
            >
              <Image src={CloseButton} />
            </IconButton>
            <Typography className={styles.viewdetails} variant="h6" component="h2" sx={{ fontSize: 22 }}>
              View Details
            </Typography>
            <Divider/>
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
                      USER ID
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 600 }}
                      className={styles.field}>{data.id}
  
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
                <Box className={styles.gridbox}>
                  {/* <Box className={styles.gridbox}  */}
                  {/* sx={{ display: "flex", justifyContent: "space-between" }}> */}
                  <Box className={styles.subtitle}>
                    <Typography className={styles.subtitle}>NAME</Typography>
                    <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.Name}</Typography>
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
                  <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.Email}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box className={styles.title}>
                    <Typography className={styles.subtitle}>
                      PHONE
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.Phone}</Typography>
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
                      ROLES
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }} className={styles.field}>
                      {data.Roles}
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
                  <Typography className={styles.subtitle}>STATUS</Typography>
                  <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.Status}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
  
  
    )
  }
  
  export default Viewadmindetails