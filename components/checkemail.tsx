import React from 'react'
import styles from '../styles/checkemail.module.css'
import vector from '../public/vector.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Checkemail = ({ setModule }: any) => {
  const router = useRouter();
  return (
    <>
      <div className="container">
       <div className={styles.prevbtn}>
        <Image className={styles.vector} alt='logo' src={vector} />
      </div>
     {/* <a className={styles.backbtn} onClick={() => router.back()}>Back</a> */}
     <a className={styles.backbtn} onClick={() => setModule(0)}/>
      </div>
 
    <div className="d-flex justify-content-center">
      <div className="col-md-7">
        <div className="card-body">
          <h3 className={styles.h3_title}>Check your email</h3>
          <p className={styles.subtitle}>We sent a password reset link to <p className='fw-bold'>bingwen@hotmail.com</p></p>
          <div className={styles.resend}>
            <p className='term'>Didn't receive the email?<a className='linkText' onClick={() => setModule(2)}> Click to resend</a></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkemail