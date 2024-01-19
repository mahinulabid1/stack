import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '@ui/form/formStyle.module.css'
import formValidate from '@additionalFunction/formValidation';
import {
  setTermsAndCondition,
  setIsFormValid,
} from '@store/signUpSlice';



const TermsAndCondition: React.FC = () => {

  const dispatch = useDispatch();

  const termsAndConditionErrDisplayState = useSelector((state: any) => state.signUpState.termsAndConditionErrDisplay);
  const emailState = useSelector((state: any) => state.signUpState.email);
  const nameState = useSelector((state: any) => state.signUpState.name);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);

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
        <div className={styles.inputContainer}>
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