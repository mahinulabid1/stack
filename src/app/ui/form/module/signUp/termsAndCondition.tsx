import React from 'react'
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setTermsAndCondition } from '@store/signUpSlice';



const TermsAndCondition: React.FC = () => {

  const dispatch = useDispatch();

  // Access the state from the store
  const termsAndConditionErrDisplayState = useSelector((state: any) => state.signUpState.termsAndConditionErrDisplay);


  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'04'}>
          <input
            type="checkbox"
            name='terms&condition'
            onChange={event => dispatch(setTermsAndCondition(event.target.checked))}
          />
          <label htmlFor='terms&condition'>I agree to the Terms & Conditions</label>
        </div>
        <p className={styles.errorMessage + ` ${termsAndConditionErrDisplayState}`}>You must agree to terms and conditions </p>
      </div>
    </>
  )
}

export default TermsAndCondition;