import React, { useState } from 'react'
import styles from '../styles/sidebar.module.css'
import { useRouter } from 'next/router'

import Admin_User from '../public/Group 19812.png'
import Projects_Icon from '../public/Group 19805.png'
import Employee_Icon from '../public/Group 19803.png'
import Settings_Icon from '../public/Group 19807.png'
import Image from 'next/image'
import LargeLogo from '../public/Group 19809.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ isopen, setisopen }: any) => {
  const router = useRouter();
  const [showsubmenu, setShowsubmenu] = useState(false)

  const submenuIconClick = () => setShowsubmenu(!showsubmenu);


  return (
    <>
      <div
        className={styles.sidebar} >
        <div className={styles.LargeLogo}>
          <Image src={LargeLogo} onClick={() => router.push('/')} />
        </div>
        <div className={styles.adminusers}>
          <Image className={styles.adminuser_icon} src={Admin_User} />
          <span className={styles.adminusertext} onClick={() => router.push('/Adminusers')}>Admin Users</span>
        </div>

        <div className={styles.projects}>
          <Image className={styles.projects_icon} src={Projects_Icon} />
          <span className={styles.projectstext} onClick={() => router.push('/Projects')}>Projects</span>
        </div>

        <div className={styles.employees}>
          <Image className={styles.employee_icon} src={Employee_Icon} />
          <span className={styles.employeetext} onClick={() => router.push('/Employees')}>Employees</span>
        </div>

        <div className={styles.settings}>
          <Image className={styles.settings_icon} src={Settings_Icon} />
          <span className={styles.settingstext} onClick={() => router.push('/')}>Settings
          </span>

          <ul className={styles.submenu} onClick={submenuIconClick}>

            <li className={styles.skills} onClick={() => router.push('/Skills')}>Skills</li>
            <li className={styles.projecttype} onClick={() => router.push('/Projecttype')}>Project Type</li>
            <li className={styles.employeetype} onClick={() => router.push('/Employeetype')}>Employee Type</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar