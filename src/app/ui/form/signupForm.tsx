import React from 'react'
import {Link} from 'react-router-dom'
import styles from './formStyle.module.css'

const SignUpForm: React.FC = () => {
  return (
    <>
      <form action="#" method='post'>
        {/* email */}
        <div className={styles.inputContainer} key={'01'}>
          <img src="./emailIcon.svg" alt="" />
          <input className={styles.formInput} type="text" placeholder='Your Email' name='useremail' />
        </div>

        {/* Your Full Name */}
        <div className={styles.inputContainer} key={'02'}>
          <img src="./smileyIcon.svg" alt="" />
          <input className={styles.formInput} type="text" placeholder='Your Name' name='name' />
        </div>

        {/* password */}
        <div className={styles.inputContainer} key={'03'}>
          <img src="./lockIcon.svg" alt="" />
          <input className={styles.formInput} type="password" placeholder='Your Name' name='name' />

          <img src="./eye.svg" alt="" />

        </div>

        {/* password strength indicator */}
        <div className={styles.passStrengthContainer + " dFlex dSpaceBetween"}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.inputContainer} key={'04'}>
          <input type="checkbox" name='terms&condition' />
          <label htmlFor='terms&condition'>I agree to the Terms & Conditions</label>
        </div>

        <div className={styles.inputContainer} key={'04'}>
          <input type='submit' value='Sign Up' />
        </div>

        <p className={styles.alreadyHaveAcc}>
          Already have an account?
          <a href="/signin" className={styles.signInButton}> Sign In</a>
        </p>
      </form>
    </>
  )
}

export default SignUpForm;