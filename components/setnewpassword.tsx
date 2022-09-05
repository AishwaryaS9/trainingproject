import React, { useEffect, useState } from 'react'
import styles from '../styles/setnewpassword.module.css'
import Icon from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import vector from '../public/vector.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Setnewpassword = ({ setModule }: any) => {

    const [password, setPassword] = useState({
        firstPassword: '',
        secondPassword: ''
    })

    const [validLength, setValidLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [match, setMatch] = useState(false);
    const [requiredLength, setRequiredLength] = useState(8)

    const inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const { value, name } = event.target;
        setPassword({
            ...password,
            [name]: value
        })
    }

    useEffect(() => {
        setValidLength(password.firstPassword.length >= requiredLength ? true : false);
        setUpperCase(password.firstPassword.toLowerCase() !== password.firstPassword);
        setLowerCase(password.firstPassword.toUpperCase() !== password.firstPassword);
        setHasNumber(/\d/.test(password.firstPassword));
        setMatch(!!password.firstPassword && password.firstPassword === password.secondPassword)
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password.firstPassword));

    }, [password, requiredLength]);


   
    /******************** */
    const router = useRouter();

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const [icontype, setIconType] = useState('password');
    const [eyeicon, setEyeicon] = useState(eyeOff);
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

    const handleEyetoggle = () => {
        if (type === 'password') {
            setEyeicon(eye);
            setIconType('text');
        }
        else {
            setEyeicon(eyeOff);
            setIconType('password');
        }
    }

    

    return (

        <>
            <div className="container">
                <div className={styles.prevbtn}>
                    <Image className={styles.vector} alt='logo' src={vector} />
                </div>
                {/* <a className={styles.backbtn} onClick={() => router.push('/checkemail')}>Back</a> */}
                <a className={styles.backbtn} onClick={() => setModule(1)}>Back</a>
            </div>


            <div className={styles.card}>
                <div className={styles.cardbody}>
                    <h5 className={styles.card_title}>Set new password</h5>
                    <p className={styles.card_text}>Your new password must be different from previous used password.</p>

                    <form action="" className={styles.newpassword}>
                        <div className={styles.newpassword}>
                            <label className={styles.passwordtext} htmlFor="exampleInputPassword1">Password</label>
                            <input type={type} placeholder="" className={styles.newpasswordinput} onChange={inputChange} name="firstPassword" />

                            <span onClick={handleToggle} className={styles.visibilityIcon}>
                                <Icon icon={icon} size={22} />
                            </span>
                            {validLength ?<p className={styles.validation}>Minimum 8 characters with atleast one number.</p>: <p className={styles.validation}>Minimum 8 characters with atleast one number.</p>}
                            {/* <p className={styles.validation}>Minimum 8 characters with atleast one number.</p> */}
                        </div>

                        <div className={styles.confirmpassword}>
                            <label className={styles.confirmpasswordtext} htmlFor="exampleInputPassword1">Password</label>
                            <input type={icontype} placeholder="" className={styles.confirmpasswordinput} onChange={inputChange} name="secondPassword" />
                        
                            <span onClick={handleEyetoggle} className={styles.visibilityEyeIcon}>
                                <Icon icon={eyeicon} size={22} />
                            </span>

                            {(!match) ?  <p className={styles.verify}>Both password must match.</p> :  <p className={styles.verify}>Both password must match.</p>}
                            {/* <p className={styles.verify}>Both password must match.</p> */}
                        </div>

                        <button className={styles.resetbtn} onClick={() => setModule(3)}>Reset password</button>
                        <a href="/" className={styles.linkText}>Cancel</a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Setnewpassword