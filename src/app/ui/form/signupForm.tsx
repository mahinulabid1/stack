import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import styles from './formStyle.module.css'
import PassStrengthIndicator from './passStrengthIndicator';
import EmailInput from './module/signUp/emailInput';
import NameInput from './module/signUp/nameInput';
import PasswordInput from './module/signUp/passwordInput';
import TermsAndCondition from './module/signUp/termsAndCondition';
import SignUpButton from './module/signUp/signUpButton';
import Loading from '@app/loading/loading';
import {
  useCreateNewUserMutation,
  useLoginMutation
} from '@store/apiSlice';


import { setMessage } from '@store/loadingSlice';


const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cookie, setCookie] = useCookies<string>(['token', 'username']);
  const [loadingDisplay, setLoadingDisplay] = useState<string>('dNone');


  const emailState = useSelector((state: any) => state.signUpState.email); 
  const nameState = useSelector((state: any) => state.signUpState.name);
  const passwordState = useSelector((state: any) => state.signUpState.password);

  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
  const isFormValidState = useSelector((state: any) => state.signUpState.isFormValid);
  const loadingMessageState = useSelector((state: any) => state.loadingState.message);

  //initialize RTK QUERY 
  const [createNewUser, { data: newUserData, error: newUserError, isLoading: isLoadingNewUser }] = useCreateNewUserMutation();  
  const [login, { data: loginData, error: loginError, isLoading: isLoadingLogin }] = useLoginMutation();


  const signUpClickHandler = (): void => {
    console.log('validating!')
    if (isFormValidState) {
      let data: any = {
        email: emailState,
        password: passwordState,
        name: nameState
      }

      dispatch(setMessage('Hold On! Attempting to create new user.'))
      setLoadingDisplay('')

      setTimeout(() => {
        createNewUser(data);
      }, 1000)
    }
  }




  // if "create new user" is successful, perform "login" query
  useEffect(() => {
    if (newUserError) {
      console.log(newUserError);
      // redirect to error page
      dispatch(setMessage('There is an error while performing operation!'))
    }
    else if (isLoadingNewUser) {
      console.log("Processing new user data!")
      dispatch(setMessage('Creating New User...'))
    }
    else if (newUserData) {

      const data = {
        email: 'eve.holt@reqres.in', 
        password: passwordState 
      }
      login(data);
      dispatch(setMessage('Successfully created new user! Loading user administration'))
    }
  }, [newUserData, newUserError, isLoadingNewUser])




  // if "login" successful, set token cookie and redirect to dashboard
  useEffect(() => {
    if (loginError) {
      console.log(loginError)
    }
    else if (loginData) {
      setCookie('token', loginData.token);
      setCookie('username', 'eve.holt@reqres.in');

      setTimeout(() => {
        navigate('/useradmin');
      }, 1000)

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
        <SignUpButton clickHandler={signUpClickHandler}/>

        {/* already have an acccount? */}
        <div className={styles.inputSection}>
          <p className={styles.alreadyHaveAcc}>
            Already have an account?
            <a href="/signin" className={styles.signInButton}> Sign In</a>
          </p>
        </div>

      </form>

      <div className={loadingDisplay}>
        <Loading message={loadingMessageState} />
      </div>

    </>
  )
}

export default SignUpForm;