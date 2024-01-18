import React from 'react'
import styles from '@ui/form/formStyle.module.css'
import { useSelector, useDispatch } from 'react-redux';
import checkPasswordStrength from '@additionalFunction/checkPasswordStrength'
import {
  setPassword,
  setPassStrength,
} from '@store/signUpSlice';



const PasswordInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const passwordErrDisplayState = useSelector((state: any) => state.signUpState.passwordErrDisplay);// signUpState = name from store.tsx= reducer{}

  const passStrengthOperation = (password: string) => {
    const passStrength: number = checkPasswordStrength(password);
    dispatch(setPassStrength(passStrength));
  }


  return (
    <>
      <div className={styles.inputSection} key={'03'}>
        <div className={styles.inputContainer}>
          <img src="./lockIcon.svg" alt="" />
          <input
            className={styles.formInput}
            type="password"
            placeholder='Your Password'
            name='name'
            onChange={(event) => {
              dispatch(setPassword(event.target.value));
              passStrengthOperation(event.target.value);
            }}
          />

          <img src="./eye.svg" alt="" />

        </div>

        <p className={styles.errorMessage + ` ${passwordErrDisplayState}`}>Please enter a strong Password! </p>
      </div>
    </>
  )
}

export default PasswordInput;