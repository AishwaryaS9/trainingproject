import React, {useState} from 'react'
import styles from '../styles/forgotpassword.module.css'
import SendEmail from '../components/sendemail';
import CheckEmail from '../components/checkemail';
import SetPassword from '../components/setnewpassword'
import ResetPassword from '../components/passwordreset'

import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link';
import { useRouter } from 'next/router'
import vector from '../public/vector.png'
import Image from 'next/image';

function forgotpassword  ()  {
  const router = useRouter();
    const [module, setModule] = useState(0);

  return (
    <>
    <div>
      <div className="container">
       <div className={styles.prevbtn}>
        <Image className={styles.vector} alt='logo' src={vector} />
      </div>
     <a className={styles.backbtn} onClick={() => router.push('/Login')}>Back</a>
      </div>
     {module === 0 ? <SendEmail setModule={setModule} /> : null}
    {module === 1 ? <CheckEmail setModule={setModule} /> : null}
      {module === 2 ? <SetPassword  setModule={setModule}/> : null}
      {module === 3 ? <ResetPassword />:null} 

      </div>

    </>
  )
}

export default forgotpassword