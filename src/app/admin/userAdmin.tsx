import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import HelmetComponent from '../helmet';
import Sidebar from './module/sidebar/sidebar'
import UserSection from './user/userSection'
import styles from './userAdmin.module.css'


const UserAdmin: React.FC = () => {

  const navigate = useNavigate(); 
  const [cookie, setCookie, removeCookie] = useCookies<string>(['token', 'username']);

  // route protection
  useEffect(() => {
    if (!cookie.token) {
      navigate('/error/unwantedSignIn');
    }
  }, [])

  const signOutHandler = (): void => {
    removeCookie('token');
    removeCookie('username')
    navigate('/signIn');
  }

  if (cookie.token) {
    return (
      <>
        <HelmetComponent title="Stack - Admin" />

        <div className={`dFlex ${styles.bodyContainer}`}>

          {/* sidebar */}
          <Sidebar />

          {/* admin data component container */}
          {/* different section( dashboard, user, sales ) will be rendered based in redux global state */}
          <UserSection />

        </div>

        <div className={styles.devMode}>
          DEV MODE:
          <button onClick={signOutHandler}>
            Logout
          </button>
        </div>

      </>
    )
  }
}

export default UserAdmin;