import React from 'react'
import { useSelector } from 'react-redux';
import styles from './formStyle.module.css'
import EmailInput from './module/signUp/emailInput';
import PasswordInput from './module/signUp/passwordInput';
import RememberMeInput from './module/signIn/rememberMeInput';
import SignInButton from './module/signIn/signInButton';

const SignInForm: React.FC = () => {

  // Access the state from the store
  const emailState = useSelector((state: any) => state.signInState.email);  // signInState = name from store.tsx= reducer{}
  const passwordState = useSelector((state: any) => state.signInState.password);
  const rememberMeState = useSelector((state: any) => state.signInState.rememberMe);
  const isFormValidState = useSelector((state: any) => state.signInState.isFormValid);

  return (
    <>
      <form action="#" method='post'>
        {/* email */}
        <EmailInput />

        {/* password */}
        <PasswordInput />

        {/* remember me */}
        <RememberMeInput />

        {/* sign in button */}
        <SignInButton />

        <div className={styles.inputSection}></div>
        <p className={styles.alreadyHaveAcc}>
          Don't have an account yet?
          <a href="/signup" className={styles.signInButton}> Sign Up</a>
        </p>


      </form>

      <br/>
      <br/>
      <br/>

      TEST PHASE 
      {`Email State: ___ ${emailState}`} <br/>
      {`password State: ___ ${passwordState}`} <br/>
      {`rememberme State: ___ ${rememberMeState}`} <br/>
      {`form valid State: ___ ${isFormValidState}`} <br/>
    </>
  )
}

export default SignInForm;