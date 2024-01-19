import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import errorDisplayHandler from "@additionalFunction/errorDisplayHandler";
import styles from '@ui/form/formStyle.module.css'
import {
  setEmailErrDisplay,
  setNameErrDisplay,
  setPasswordErrDisplay,
  setTermsAndConditionErrDisplay
} from '@store/signUpSlice';

interface ComponentProps {
  clickHandler : any
}

const SignUpButton: React.FC<ComponentProps> = ({clickHandler}) => {

  const dispatch = useDispatch();

  const emailState = useSelector((state: any) => state.signUpState.email);
  const nameState = useSelector((state: any) => state.signUpState.name);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputSection}>
          <button
            className={styles.submitButton}
            onClick={(e) => {
              clickHandler();

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