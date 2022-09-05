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
import styles from "../styles/viewemployeetypedetails.module.css";
import Image from 'next/image'
import CloseButton from '../public/closebutton.png'

const Viewemployeetypedetails = ({ openViewModal, handleCloseViewModal }: any) => {

    const data = {
        id: 1,
        name: "Sidney",
        description: "Minor laceration of unsp innominate or subclav art, subs",
    }

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
                <Box className={styles.employeetypecontainer}>
                    <IconButton
                        className={styles.closebutton}
                        onClick={handleCloseViewModal}
                    >
                        <Image src={CloseButton} />
                    </IconButton>

                    <Typography className={styles.viewdetails} variant="h6" component="h2" sx={{ fontSize: 22 }}>
                        View Details
                    </Typography>
                    <Divider sx={{ height: "20px", marginRight: "20px" }} />
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
                                        SKILL NAME
                                    </Typography>
                                    <Typography
                                        sx={{ fontWeight: 600, width: "160px" }}
                                        className={styles.field}>{data.id}

                                    </Typography>
                                </Box>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{ height: "50px", marginLeft: "40px" }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className={styles.gridbox}>
                                {/* <Box className={styles.gridbox}   */}
                                {/* sx={{ display: "flex", justifyContent: "space-between" }}> */}
                                <Box className={styles.subtitle}>
                                    <Typography className={styles.subtitle} sx={{ marginLeft: "40px" }}>STATUS</Typography>
                                    <Typography sx={{ fontWeight: 600, marginLeft: "40px" }} className={styles.field}>{data.name}</Typography>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid className={styles.grid}>
                            <Grid item xs={4}>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box className={styles.title}>
                                        <Typography className={styles.subtitle}>
                                            DESCRIPTION
                                        </Typography>
                                        <Typography sx={{ fontWeight: 600, width: "450px" }} className={styles.field}>{data.description}</Typography>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>



        </Modal>

    )
}

export default Viewemployeetypedetails