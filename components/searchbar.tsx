import React, {useState} from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "../styles/searchbar.module.css";
import AddIcon from "@mui/icons-material/Add";

interface pageHeaderType {
    handleOpenModal: () => void;
    title: string;
    button: string;
  }
const searchbar = ({ handleOpenModal, title, button }: pageHeaderType) => {
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);


  return (
    <>
      <div className={styles.searchbarheader}>
        <div className={styles.headerlayout}>
          <div className={styles.rightcontent}>
            <h3 className={styles.headertitle}>{title}</h3>

            <input type='text' className={styles.search}
              placeholder='Search' value={search}
              onChange={(e: any) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.leftcontent}>
            <button className={styles.addbutton} onClick={handleOpenModal}>+{button}</button>

            </div>
            </div>
            </div>
    </>
  )
}

export default searchbar