import React from 'react'
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
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



const NameInput: React.FC = () => {

  //connect to redux store
  const dispatch = useDispatch();

  // Step 2: Access the state from the store
  const emailState = useSelector((state: any) => state.signUpState.email);  // signUpState = name from store.tsx= reducer{}
  const nameState = useSelector((state: any) => state.signUpState.name);
  const passwordState = useSelector((state: any) => state.signUpState.password);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
  const isFormValidState = useSelector((state: any) => state.signUpState.isFormValid);

  const emailErrDisplayState = useSelector((state: any) => state.signUpState.emailErrDisplay);
  const nameErrDisplayState = useSelector((state: any) => state.signUpState.nameErrDisplay);
  const passwordErrDisplayState = useSelector((state: any) => state.signUpState.passwordErrDisplay);
  const termsAndConditionErrDisplayState = useSelector((state: any) => state.signUpState.termsAndConditionErrDisplay);


  return (
    <>
      <div className={styles.inputSection} key={'02'}>
        <div className={styles.inputContainer}>
          <img src="./smileyIcon.svg" alt="" />
          <input
            className={styles.formInput}
            type="text"
            placeholder='Your Name'
            name='name'
            onChange={event => dispatch(setName(event.target.value))}
          />
        </div>

        <p className={styles.errorMessage + ` ${nameErrDisplayState}`}>Please enter your full name! </p>
      </div>
    </>
  )
}

export default NameInput;