/**
 * this is navigation after a user successfully logs in
 */

import React from 'react'
import styles from './userNav.module.css'

const UserNavRightSide: React.FC = () => {
  return (
    <>
      <div className={`${styles.userNavContainer} ${styles.userRightNavContainer} dFlex dSpaceBetween dAlignItemsCenter`}>
        <div>

          <div className={styles.searchBarContainer}> 
            <input type='text' placeholder='search' />
            <img src="./searchIcon.svg" alt="Search" />
          </div>
          
        </div> 

        <div className="dFlex dAlignItemsCenter">

          <button className={styles.notificationButton}>
            <img src="./notificationBellIcon.png" alt="Notification Bell" />
          </button>
          

          <button className={styles.userImageContainer}>
            <img src="./userImageIcon.png" alt="userImage" />
          </button>
          
        </div>
      </div>
    </>
  )
}


const UserNavLeftSide:React.FC = () => {
  return (
    <>
      <a className={`dFlex dAlignItemsCenter ${styles.logoContainer}`} href="/">
        <img src="./logoIcon.svg" alt="logo" />
        <h1>Stack</h1>
      </a>
    </>
  )
}

export  {UserNavRightSide , UserNavLeftSide};