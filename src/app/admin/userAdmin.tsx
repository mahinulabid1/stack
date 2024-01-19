import React, {useEffect} from 'react'
import styles from './userAdmin.module.css'
import { useNavigate } from 'react-router-dom';
import Sidebar from './module/sidebar/sidebar'
import UserSection from './user/userSection'
import { useCookies } from "react-cookie";
import HelmetComponent from '../helmet';


const UserAdmin:React.FC = () => {

  // route protection
  const navigate = useNavigate(); // get the navigate object
  const [tokenCookie] = useCookies<string>(['token']);

  useEffect(()=>{
    if(!tokenCookie.token) {
      navigate('/signIn');
    }
  }, [])


  return (
    <>
      <HelmetComponent title="Stack - Admin"/>
      <div className={`dFlex ${styles.bodyContainer}`}>
        {/* sidebar */}
        <Sidebar />

        {/* admin data component container */}
        {/* different section( dashboard, user, sales ) will be rendered based in redux global state */}
        <UserSection />


      </div>
    </>
  )
}

export default UserAdmin;