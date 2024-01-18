import React from 'react'
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import errorDisplayHandler from "@additionalFunction/errorDisplayHandler";
import formValidate from '@additionalFunction/formValidation';
import {
  setIsFormValid,

  setEmailErrDisplay,
  setNameErrDisplay,
  setPasswordErrDisplay,
  setTermsAndConditionErrDisplay
} from '@store/signUpSlice';



const SignUpButton: React.FC = () => {

  //connect to redux store
  const dispatch = useDispatch();

  // Step 2: Access the state from the store
  const emailState = useSelector((state: any) => state.signUpState.email);  // signUpState = name from store.tsx= reducer{}
  const nameState = useSelector((state: any) => state.signUpState.name);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputSection} key={'04'}>
          <button
            className={styles.submitButton}
            onClick={(e) => {
              // formValidation();
              formValidate.signUp({
                emailState,
                nameState,
                passStrengthState,
                termsAndConditionState,
                setIsFormValid,
                dispatch
              })

              errorDisplayHandler.handler.signUp({
                dispatch,
                emailState,
                nameState,
                passStrengthState,
                termsAndConditionState,
                setEmailErrDisplay,
                setPasswordErrDisplay,
                setTermsAndConditionErrDisplay,
                setNameErrDisplay,
              });
              e.preventDefault();
            }}
          >

            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

export default SignUpButton;