import React from 'react'
import styles from '../styles/navbar.module.css'
import { HiBell } from 'react-icons/hi'
import Avatar from '../public/Avatar.png'
import Image from 'next/image'


const navbar = () => {
  return (
    <>


      <div className={styles.navbar}>
     
        <div className={styles.icons}>
      
          <HiBell className={styles.notification_icon} />
          <Image src={Avatar} className={styles.avatar} />
         
          </div>
     

      </div>

    </>
  )
}

export default navbar