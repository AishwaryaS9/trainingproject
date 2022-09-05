import React, { useState } from 'react'
// import {useHistory} from 'react-router-dom'



import Image from 'next/image'
import Link from 'next/link';
import cancel from '../public/cancel-24px 1.png'
import cancelbtn from '../public/close-24px (1) 3.png'
import logo from '../public/Group 19794.png'
import Icon from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Login.module.css'
import axios from 'axios';

const Login = (props: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [ErrorMsg, setErrorMsg] = useState("");

    //console.log({ email, password })



    const handleEmail = (e: any) => {
        setSuccessMsg('');
        setErrorMsg('');

        setEmailError('');
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setSuccessMsg('');
        setErrorMsg('');

        setPasswordError('');
        setPassword(e.target.value)
    }

    const handleApi = async () => {
        console.log({ email, password })
        await axios.post('https://health27.herokuapp.com/users/sign_in', {
            //    "user":{
            //     "email":email,
            //     "password":password
            //    }

            email: email,
            password: password
        }).then(result => {
            if (email !== '') {
                //Check other condition
                const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (emailRegex.test(email)) {
                    setEmailError('');

                    if (email === email) {
                        setEmailError('');
                        if (password === password) {
                            //Success Message
                            //setSuccessMsg('You are successfully logged in');

                            router.push('/adminusers')

                        }
                        else {
                            // setPasswordError('Password does not match with the email address');
                            setErrorMsg('Invalid Email or Password');

                        }
                    }
                    else {
                        // setEmailError('Email does not match with our database');
                        setErrorMsg('Invalid Email or Password');
                    }
                }
                else {
                    // setEmailError('Invalid Email');
                    setErrorMsg('Invalid Email or Password');
                }
            }
            else {
                // setEmailError("Email Required");
                setErrorMsg('Invalid Email or Password');
            }


            //checking if password is empty
            if (password !== '') {

                setErrorMsg('Invalid Email or Password');
            }
            else {
                // setPasswordError("Password Required");
                setErrorMsg('Invalid Email or Password');
            }

            console.log(result.data)
            // alert('success')
            //router.push('/adminusers')
        })
            .catch(error => {
                // alert('service error')
                setErrorMsg('Invalid Email or Password');
                console.log(error)
            })
    }



    /************************ */

    const [show, setShow] = useState(false);


    const router = useRouter();

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }


    return (

        <>
            <div>
                <div className={styles.leftcontent}>
                    <div className={styles.logo}>
                        <Image className={styles.logo} alt='logo' src={logo} />
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3 className={styles.login_title}>Log In</h3>
                                </div>

                                {/* <form className="form" > */}
                                {/* {successMsg&&  */}

                                {ErrorMsg &&

                                    <div className={styles.alert}>
                                        <div className={styles.cancelbutton}>

                                            <Image src={cancelbtn} onClick={() => setShow(!show)} />

                                        </div>


                                        <div className={styles.alertcontainer}>

                                            <Image src={cancel} className={styles.cancel} />

                                            <p className={styles.errormsg}>{ErrorMsg}</p>
                                        </div>
                                    </div>
                                }

                                <div className="form-group">
                                    <label className={styles.emailtext} htmlFor="exampleInputEmail1">Email </label>
                                    <input type="email"

                                        value={email} onChange={handleEmail}
                                        className={styles.emailinput}
                                        // name="email"
                                        id="email"
                                        aria-describedby="emailHelp" />
                                    {emailError && <div className="error-msg">{emailError}</div>}

                                </div>

                                <div className="form-group">
                                    <label className={styles.passwordtext} htmlFor="exampleInputPassword1">Password</label>
                                    <input type={type}
                                        className={styles.passwordinput}
                                        value={password} onChange={handlePassword}
                                        // name="password"
                                        id="password" />
                                    {passwordError && <div className="error-msg">{passwordError}</div>}


                                    <span onClick={handleToggle} className={styles.visibilityIcon}>
                                        <Icon icon={icon} size={22} />
                                    </span>

                                    <p className={styles.validation}>Minimum 8 characters with atleast 1 number</p>

                                </div>
                                <div className="d-grid gap-2">
                                    {/* <button className={styles.btnlogin} type="button" onClick={() => router.push('/adminusers')}>Log in</button> */}
                                    <button className={styles.btnlogin} type='submit' onClick={handleApi}
                                    >Log in
                                    </button>
                                    <div className={styles.policy}>
                                        <p className='term'>By signing you agree to Health <a href="/" className='linkText'>Terms of service</a> and <br /><a href="/" className='linkText'>Privacy policy.</a></p>
                                    </div>

                                    <Link href="/forgotpassword"><a className={styles.linkText}>Forgot your password?</a></Link>
                                </div>
                                {/* </form> */}


                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>


    )
}

export default Login
