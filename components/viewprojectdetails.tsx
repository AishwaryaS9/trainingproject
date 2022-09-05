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
import styles from "../styles/viewprojectdetails.module.css";
import Image from 'next/image'
import CloseButton from '../public/closebutton.png'


const viewprojectdetails = ({ openViewModal, handleCloseViewModal }: any) => {
    const data = {
        id: "1",
        name: "Alvera",
        client: "Alvera Ducarne",
        projecttype: "Katz",
        projectresponsible: "Vinder",
        startdate: "01 Aug 2022",
        enddate: "24 Sep 2022",
        projectstatus: "Running",
        monthlystatus: "Behind schedule",
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
                <Box className={styles.projectmodalcontainer}>

                    <IconButton
                        className={styles.closebutton}
                        onClick={handleCloseViewModal}
                    >

                        <Image src={CloseButton} />
                    </IconButton>
                    <Typography className={styles.subtitle} variant="h6" component="h2" sx={{ fontSize: 22, marginTop: "15px" }}>
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
                                    <Typography className={styles.projectid}>
                                        PROJECT ID
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
                                {/* <Box className={styles.gridbox}                          */}
                                {/* sx={{ display: "flex", justifyContent: "space-between" }}> */}
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
                                <Typography className={styles.subtitle}>CLIENT</Typography>
                                <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.client}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box className={styles.title}>
                                    <Typography className={styles.subtitle}>
                                        PROJECT TYPE
                                    </Typography>
                                    <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.projecttype}</Typography>
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
                                        PROJECT RESPONSIBLE
                                    </Typography>
                                    <Typography sx={{ fontWeight: 600 }} className={styles.field}>
                                        {data.projectresponsible}
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
                                <Typography className={styles.subtitle}>START DATE</Typography>
                                <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.startdate}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box className={styles.title}>
                                    <Typography className={styles.subtitle}>END DATE</Typography>
                                    <Typography sx={{ fontWeight: 600 }} className={styles.field}>{data.enddate}</Typography>
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
                                        PROJECT STATUS
                                    </Typography>
                                    <Typography sx={{ fontWeight: 600 }}
                                        className={styles.field}
                                        style={{
                                            color: data.projectstatus === "Running" ? "#33BC28" : "#E02424",
                                        }}
                                    >
                                        {data.projectstatus}
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
                                <Typography className={styles.subtitle}>
                                    MONTHLY STATUS
                                </Typography>
                                <Typography sx={{ fontWeight: 600 }}
                                    className={styles.field}
                                    style={{
                                        color:
                                            data.monthlystatus === "Behind schedule"
                                                ? "#E02424"
                                                : "#33BC28",
                                    }}
                                >
                                    {data.monthlystatus}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Modal>
    );
};

export default viewprojectdetails;