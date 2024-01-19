import React from 'react'
import styles from './userAdmin.module.css'
import Sidebar from './module/sidebar/sidebar'
import UserSection from './user/userSection'

const UserAdmin:React.FC = () => {
  return (
    <>
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