import React from 'react'
import logo from '../public/Group 19794.png'
import styles from '../styles/splashscreen.module.css'
import Image from 'next/image'


export default function splashscreen() {
  return (
    <div id="axis" className={styles.splash}>
      <Image className={styles.logo} alt='logo' src={logo} />
    </div>
  )
}
