import React from 'react';
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import errorDisplayHandler from '@/additionalFunction/errorDisplayHandler';
import formValidate from '@additionalFunction/formValidation';
import {
  setIsFormValid,
  setEmailErrDisplay,
  setPasswordErrDisplay
} from '@store/signInSlice';

const SignInButton: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const emailState = useSelector((state: any) => state.signInState.email);  // signInState = name from store.tsx= reducer{}
  const passwordState = useSelector((state: any) => state.signInState.password);
  // const rememberMeState = useSelector((state: any) => state.signInState.rememberMe);

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'04'}>
          <button
            className={styles.submitButton}
            onClick={(e): void => {
              formValidate.signIn({
                emailState,
                passwordState,
                setIsFormValid,
                dispatch
              })

              errorDisplayHandler.handler.signIn({
                dispatch,
                emailState,
                passwordState,
                setEmailErrDisplay,
                setPasswordErrDisplay
              })
              e.preventDefault();
            }}
          >

            Sign In
          </button>
        </div>
      </div>
    </>
  )
}

export default SignInButton;