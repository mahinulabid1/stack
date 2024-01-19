import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import formValidate from '@additionalFunction/formValidation';
import styles from '@ui/form/formStyle.module.css'
import {
  setEmail,
  setIsFormValid,
} from '@store/signUpSlice';


const EmailInput: React.FC = () => {
  const dispatch = useDispatch();

  const emailErrDisplayState = useSelector((state: any) => state.signUpState.emailErrDisplay);
  const emailState = useSelector((state: any) => state.signUpState.email);
  const nameState = useSelector((state: any) => state.signUpState.name);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
 

  useEffect(() => {
    formValidate.signUp({
      emailState,
      nameState,
      passStrengthState,
      termsAndConditionState,
      setIsFormValid,
      dispatch
    });
  }, [emailState])

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer}>
          <img src="./emailIcon.svg" alt="email icon" />

          <input
            className={styles.formInput}
            type="text"
            placeholder='Your Email'
            name='useremail'
            onChange={(event) => {
              dispatch(setEmail(event.target.value));
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