import React from 'react';
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
} from '@store/signInSlice';

const EmailInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const emailErrDisplayState = useSelector((state: any) => state.signInState.emailErrDisplay);

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'01'}>
          <img src="./emailIcon.svg" alt="" />

          <input
            className={styles.formInput}
            type="text"
            placeholder='Your Email'
            name='useremail'
            onChange={(event) => {
              dispatch(setEmail(event.target.value))
            }}
          />

        </div>
        <p className={styles.errorMessage + ` ${emailErrDisplayState}`}>Please enter a valid email address! </p>
      </div>
    </>
  )
}

export default EmailInput;