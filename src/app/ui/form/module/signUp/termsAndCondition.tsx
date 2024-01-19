import React, {useEffect} from 'react'
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



const TermsAndCondition: React.FC = () => {

  const dispatch = useDispatch();

  // Access the state from the store
  const termsAndConditionErrDisplayState = useSelector((state: any) => state.signUpState.termsAndConditionErrDisplay);
  const emailErrDisplayState = useSelector((state: any) => state.signUpState.emailErrDisplay); // signUpState = name from store.tsx= reducer{}
  const emailState = useSelector((state: any) => state.signUpState.email);  // signUpState = name from store.tsx= reducer{}
  const nameState = useSelector((state: any) => state.signUpState.name);
  const passwordState = useSelector((state: any) => state.signUpState.password);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
  const isFormValidState = useSelector((state: any) => state.signUpState.isFormValid);

  useEffect(() =>{
    formValidate.signUp({
      emailState,
      nameState,
      passStrengthState,
      termsAndConditionState,
      setIsFormValid,
      dispatch
    });
  }, [termsAndConditionState])

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'04'}>
          <input
            type="checkbox"
            name='terms&condition'
            onChange={event => {
              dispatch(setTermsAndCondition(event.target.checked))
            }}
          />
          <label htmlFor='terms&condition'>I agree to the Terms & Conditions</label>
        </div>
        
        <p className={styles.errorMessage + ` ${termsAndConditionErrDisplayState}`}>
          You must agree to terms and conditions 
        </p>
      </div>
    </>
  )
}

export default TermsAndCondition;