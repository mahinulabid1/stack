import React, {useEffect} from 'react'
import styles from '@ui/form/formStyle.module.css'
import { useSelector, useDispatch } from 'react-redux';
import checkPasswordStrength from '@additionalFunction/checkPasswordStrength'
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



const PasswordInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const passwordErrDisplayState = useSelector((state: any) => state.signUpState.passwordErrDisplay);// signUpState = name from store.tsx= reducer{}
  const emailErrDisplayState = useSelector((state: any) => state.signUpState.emailErrDisplay); // signUpState = name from store.tsx= reducer{}
  const emailState = useSelector((state: any) => state.signUpState.email);  // signUpState = name from store.tsx= reducer{}
  const nameState = useSelector((state: any) => state.signUpState.name);
  const passwordState = useSelector((state: any) => state.signUpState.password);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
  const isFormValidState = useSelector((state: any) => state.signUpState.isFormValid);

  const passStrengthOperation = (password: string) => {
    const passStrength: number = checkPasswordStrength(password);
    dispatch(setPassStrength(passStrength));
  }

  useEffect(() =>{
    formValidate.signUp({
      emailState,
      nameState,
      passStrengthState,
      termsAndConditionState,
      setIsFormValid,
      dispatch
    });
  }, [passwordState])


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