import React from 'react'
import styles from "./signup.module.css";


// type SignUpProps = {
//   anyProps: String
// }


// const SignupPage = ({ anyProps }: SignUpProps) => {
const SignupPage: React.FC = () => {

  return (
    <>
      <section className={styles.section}>
        <div className={styles.centerContainer}>
          <h2 className={styles.heading}> Getting Started </h2>
          <h3 className={styles.subHeading}> Create an account to continue! </h3>

          <div className={'dFlex dSpaceBetween'}>
            <button className={styles.openAuthBtn + ' dFlex dAlignItemsCenter'}>
              <img src="./googleIcon.svg" alt="" />
              Sign Up with Google
            </button>

            <button className={styles.openAuthBtn + ' dFlex dAlignItemsCenter'}>
              <img className={styles.appleIcon} src="./appleIcon.svg" alt="" />
              Sign Up with Apple ID
            </button>
          </div>

          <span className={styles.or}>OR</span>

          <form action="#" method='post'>
            {/* email */}
            <div className={styles.inputContainer}>
              <img src="./emailIcon.svg" alt="" />
              <input className={styles.formInput} type="text" placeholder='Your Email' />
            </div>
            
          </form>
        </div>
      </section>
    </>
  )
}

export default SignupPage
