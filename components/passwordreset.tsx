import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/passwordreset.module.css'

const Passwordreset = () => {
    const router = useRouter();
    return (
        <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card-body">
              <h3 className={styles.h3_title}>Password reset</h3>
              <p className={styles.subtitle}>Your password has been successfully reset. Click below to log in magically</p>
              <button className={styles.continuebtn} type="submit" onClick={() => router.push('/Login')}>Continue</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Passwordreset