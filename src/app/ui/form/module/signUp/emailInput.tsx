import React, { useEffect } from 'react'
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import formValidate from '@additionalFunction/formValidation';
import {
  setEmail,
  setName,
  setPassword,
  setTermsAndCondition,
  setPassStrength,
  setIsFormValid,

  setEmailErrDisplay,
  setNameErrDisplay,
  setPasswordErrDisplay,
  setTermsAndConditionErrDisplay
} from '@store/signUpSlice';

const EmailInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const emailErrDisplayState = useSelector((state: any) => state.signUpState.emailErrDisplay); // signUpState = name from store.tsx= reducer{}
  const emailState = useSelector((state: any) => state.signUpState.email);  // signUpState = name from store.tsx= reducer{}
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
      <div className={styles.inputSection} key={'01'}>
        <div className={styles.inputContainer}>
          <img src="./emailIcon.svg" alt="" />

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