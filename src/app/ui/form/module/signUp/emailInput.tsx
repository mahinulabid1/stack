import React from 'react'
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '@store/signUpSlice';

const EmailInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const emailErrDisplayState = useSelector((state: any) => state.signUpState.emailErrDisplay); // signUpState = name from store.tsx= reducer{}

  return (
    <>
      <div className={styles.inputSection} key={'01'}>
        <div className={styles.inputContainer}>
          <img src="./emailIcon.svg" alt="" />

          <input
            className={styles.formInput}
            type="text"
            placeholder='Your Email'
            name='useremail'
            onChange={(event) => { dispatch(setEmail(event.target.value)) }}
          />

        </div>

        <p className={styles.errorMessage + ` ${emailErrDisplayState}`}>
          Please enter a valid email address! 
        </p>
      </div>
    </>
  )
}

export default EmailInput;