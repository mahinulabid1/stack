import React from 'react'
import styles from './sidebar.module.css'
import { UserNavLeftSide } from '@app/ui/userNav/userNav'

const Sidebar: React.FC = () => {
  return (
    <>
      <aside className={`${styles.sidebarContainer}`}>
        
          <UserNavLeftSide />

          <h4 className={`${styles.navHeading}`}>Pages</h4>

          <button className={`${styles.button} dFlex dAlignItemsCenter`}>
            <img src="./dashboardIcon.svg" alt="dashboard icon" />
            <span>Dashboard</span>
          </button>

          <button className={`${styles.button} ${styles.activeButton} dFlex dAlignItemsCenter`}>
            <img src="./userIcon.svg" alt="user Icon" />
            <span>Users</span>
          </button>

          <button className={`${styles.button} dFlex dAlignItemsCenter`}>
            <img src="./salesIcon.svg" alt="sales icon" />
            <span>Sales</span>
          </button>

      </aside>
    </>
  )
}

export default Sidebar;