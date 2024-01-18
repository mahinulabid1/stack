import React from 'react';
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '@store/signInSlice';

const PasswordInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const passwordErrDisplayState = useSelector((state: any) => state.signInState.passwordErrDisplay);

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'03'}>
          <img src="./lockIcon.svg" alt="" />
          <input
            className={styles.formInput}
            type="password"
            placeholder='Your Name' name='name'
            onChange={(event) => {
              dispatch(setPassword(event.target.value))
            }}
          />

          <img src="./eye.svg" alt="" />

        </div>
        <p className={styles.errorMessage + ` ${passwordErrDisplayState}`}>Please enter password </p>
      </div>
    </>
  )
}

export default PasswordInput;