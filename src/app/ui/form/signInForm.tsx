import React from 'react'
import styles from './formStyle.module.css'

const SignInForm: React.FC = () => {
  return (
    <>
      <form action="#" method='post'>
        {/* email */}
        <div className={styles.inputContainer} key={'01'}>
          <img src="./emailIcon.svg" alt="" />
          <input className={styles.formInput} type="text" placeholder='Your Email' name='useremail' />
        </div>

        {/* password */}
        <div className={styles.inputContainer} key={'03'}>
          <img src="./lockIcon.svg" alt="" />
          <input className={styles.formInput} type="password" placeholder='Your Name' name='name' />

          <img src="./eye.svg" alt="" />

        </div>

        <div className={styles.inputContainer} key={'04'}>
          <input type="checkbox" name='terms&condition' />
          <label htmlFor='terms&condition'>Remember Me</label>
        </div>

        <div className={styles.inputContainer} key={'04'}>
          <input type='submit' value='Sign Up' />
        </div>

        <p className={styles.alreadyHaveAcc}>
          Don't have an account yet?
          <a href="/signup" className={styles.signInButton}> Sign Up</a>
        </p>
      </form>
    </>
  )
}

export default SignInForm;