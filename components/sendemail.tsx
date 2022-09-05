import React from 'react'
import styles from '../styles/sendemail.module.css'

const Sendemail = ({ setModule }: any) => {
  return (
    <>
<div className="d-flex justify-content-center">
                <div className="col-md-7">
                    <div className="card-body">
                        <h3 className={styles.h3_title}>Forgot Password</h3>
                        <p className={styles.subtitle}>Enter your email address, and we'll send you an email with all the instructions.</p>
                        <form>
                            <div className="form-group">
                                <label className={styles.emailtext} htmlFor="exampleInputEmail1">Email </label>
                                <input type="email" className={styles.emailinput} aria-describedby="emailHelp" placeholder="" />
                            </div>

                            <button className={styles.btnforgotpassword} type="submit" onClick={() => setModule(1)}>Send me instructions</button>

                            <a className={styles.linkText}>Cancel</a>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Sendemail