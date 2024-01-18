import React from 'react'
import { useSelector } from 'react-redux';
import styles from './formStyle.module.css'
import PassStrengthIndicator from './passStrengthIndicator';
import EmailInput from './module/signUp/emailInput';
import NameInput from './module/signUp/nameInput';
import PasswordInput from './module/signUp/passwordInput';
import TermsAndCondition from './module/signUp/termsAndCondition';
import SignUpButton from './module/signUp/signUpButton';

const SignUpForm: React.FC = () => {

  // Access the state from the store
  const emailState = useSelector((state: any) => state.signUpState.email);  // signUpState = name from store.tsx= reducer{}
  const nameState = useSelector((state: any) => state.signUpState.name);
  const passwordState = useSelector((state: any) => state.signUpState.password);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
  const isFormValidState = useSelector((state: any) => state.signUpState.isFormValid);

  return (
    <>
      <form>
        {/* email */}
        <EmailInput />

        {/* Your Full Name */}
        <NameInput />

        {/* password */}
        <PasswordInput />


        {/* password strength indicator */}
        <div className={styles.inputSection}>
          <PassStrengthIndicator strength={passStrengthState} />
        </div>

        {/* terms and conditions */}
        <TermsAndCondition />

        {/* sign up button */}
        <SignUpButton />

        {/* already have an acccount? */}
        <div className={styles.inputSection}>
          <p className={styles.alreadyHaveAcc}>
            Already have an account?
            <a href="/signin" className={styles.signInButton}> Sign In</a>
          </p>
        </div>

      </form>




      TEST PHASE <br/> <br/>
      {`name state:___ ${nameState}`} , <br/>
      {`email state:___ ${emailState}`}, <br/>
      {`password State:___ ${passwordState}`}, <br/>
      {`terms and condition:___ ${termsAndConditionState}`}, <br/>
      {`password Strength:___ ${passStrengthState}`}, <br/>
      {`is the form valid:___ ${isFormValidState}`} <br/>
    </>
  )
}

export default SignUpForm;