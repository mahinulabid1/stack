import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import styles from './formStyle.module.css'
import PassStrengthIndicator from './passStrengthIndicator';
import EmailInput from './module/signUp/emailInput';
import NameInput from './module/signUp/nameInput';
import PasswordInput from './module/signUp/passwordInput';
import TermsAndCondition from './module/signUp/termsAndCondition';
import SignUpButton from './module/signUp/signUpButton';

import {
  useCreateNewUserMutation,
  useLoginMutation
} from '@store/apiSlice';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [cookie, setCookie] = useCookies(['token', 'username']);

  // Access the state from the store
  const emailState = useSelector((state: any) => state.signUpState.email);  // signUpState = name from store.tsx= reducer{}
  const nameState = useSelector((state: any) => state.signUpState.name);
  const passwordState = useSelector((state: any) => state.signUpState.password);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
  const isFormValidState = useSelector((state: any) => state.signUpState.isFormValid);

  const [createNewUser, { data: newUserData, error: newUserError, isLoading: isLoadingNewUser }] = useCreateNewUserMutation();  //data:newUserData , this is not complex destruction. I'm simply renaming the variable. "data" give it a new name "newUserData". That's what it means
  const [login, { data: loginData, error: loginError, isLoading: isLoadingLogin }] = useLoginMutation();

  // if form is valid, perform - create new user
  useEffect(() => {
    console.log('validating!')
    if (isFormValidState) {
      let data: any = {
        email: emailState,
        password: passwordState,
        name: nameState
      }

      createNewUser(data);
    }
  }, [isFormValidState])


  // if "create new user" is successful, perform "login" query
  useEffect(() => {
    if (newUserError) {
      console.log(newUserError);
    }
    else if (isLoadingNewUser) {
      console.log("Processing new user data!")
    }
    else if (newUserData) {
      // perform login query and redirect to dashboard
      const data = {
        email: 'eve.holt@reqres.in', // reqres.in API not accepting any other username
        password: passwordState // reqres.in API  accepting all password 
      }
      login(data);
    }
  }, [newUserData, newUserError, isLoadingNewUser])

  // if "login" successful, set token cookie and redirect to dashboard
  useEffect(() => {
    if (loginError) {
      console.log(loginError)
    }
    else if (isLoadingLogin) {
      console.log('Authenticating User!');
    }
    else if (loginData) {
      console.log("login complete!")
      console.log(loginData.token);
      setCookie('token', loginData.token);
      setCookie('username', 'eve.holt@reqres.in');

      // redirect to dashboard
      navigate('/useradmin');
    }
  }, [loginData, loginError, isLoadingLogin])


  // restrict loggedin user from revisiting signIn
  useEffect(() => {
    if (cookie.token) {
      navigate('/useradmin')
    }
  }, [])


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




      TEST PHASE <br /> <br />
      {`name state:___ ${nameState}`} , <br />
      {`email state:___ ${emailState}`}, <br />
      {`password State:___ ${passwordState}`}, <br />
      {`terms and condition:___ ${termsAndConditionState}`}, <br />
      {`password Strength:___ ${passStrengthState}`}, <br />
      {`is the form valid:___ ${isFormValidState}`} <br />
    </>
  )
}

export default SignUpForm;