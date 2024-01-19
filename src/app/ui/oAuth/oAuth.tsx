import React from "react"
import styles from './oAuth.module.css'

const OAuth: React.FC = () => {
  return (
    <>
      <div className={'dFlex dSpaceBetween'}>
        <button className={`${styles.openAuthBtn}  dFlex dAlignItemsCenter `}>
          <img src="./googleIcon.svg" alt="" />
          Sign Up with Google
        </button>

        <button className={`${styles.openAuthBtn } dFlex dAlignItemsCenter`}>
          <img className={styles.appleIcon} src="./appleIcon.svg" alt="" />
          Sign Up with Apple ID
        </button>
      </div>
    </>
  )
}

export default OAuth;