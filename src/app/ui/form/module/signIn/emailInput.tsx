import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formValidate from '@additionalFunction/formValidation';
import styles from '@ui/form/formStyle.module.css'
import {
  setEmail,
  setIsFormValid,
} from '@store/signInSlice';


const EmailInput: React.FC = () => {

  const dispatch = useDispatch();

  const emailErrDisplayState = useSelector((state: any) => state.signInState.emailErrDisplay);
  const emailState = useSelector((state: any) => state.signInState.email);  
  const passwordState = useSelector((state: any) => state.signInState.password);

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

              formValidate.signIn({
                emailState,
                passwordState,
                setIsFormValid,
                dispatch
              })
            }}
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