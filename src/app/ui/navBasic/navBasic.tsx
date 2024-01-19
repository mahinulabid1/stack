import React from 'react'
import styles from './navBasic.module.css'

const NavBasic: React.FC = () => {
  return (
    <>
      <nav className = {`${styles.navContainer} dFlex dSpaceBetween dAlignItemsCenter`}>
        <a className={`${styles.logoLink}  dFlex`} href='/'>
          <img src="./logoIcon.svg" alt="logo" />
          <h1>Stack</h1>
        </a>

        <div>
          <button className={`${styles.languageBtn} dFlex dAlignItemsCenter dSpaceBetween`}>
            <span>English(UK)</span>
            <img src="./downIcon.svg" alt="" />
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBasic;