import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLoginMutation } from '@store/apiSlice';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

import EmailInput from './module/signIn/emailInput';
import PasswordInput from './module/signIn/passwordInput';
import RememberMeInput from './module/signIn/rememberMeInput';
import SignInButton from './module/signIn/signInButton';
import styles from './formStyle.module.css'
import Loading from '@app/loading/loading';
import { setMessage } from '@store/loadingSlice';
import { setIsFormValid } from '@/store/signUpSlice';

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookie, setCookie] = useCookies(['token', 'username']);
  const [loadingDisplay, setLoadingDisplay] = useState<string>('dNone');
  const [signInBtnText, setSignInBtnText] = useState<string>('Sign In')
  const [errorDisplay, setErrorDisplay] = useState<string>('dNone')

  // Access the state from the store
  const emailState = useSelector((state: any) => state.signInState.email);  // signInState = name from store.tsx= reducer{}
  const passwordState = useSelector((state: any) => state.signInState.password);
  const rememberMeState = useSelector((state: any) => state.signInState.rememberMe);
  const isFormValidState = useSelector((state: any) => state.signInState.isFormValid);
  const loadingMessageState = useSelector((state: any) => state.loadingState.message);

  const [login, { data: loginData, error: loginError, isLoading: isLoadingLogin }] = useLoginMutation();

  const submitClickHandler = ():void => {
    if (isFormValidState) {
      console.log(emailState)
      const data = {
        email: emailState, // reqres.in API not accepting any other username 'eve.holt@reqres.in'
        password: passwordState // reqres.in API  accepting all password 
      }

      setSignInBtnText("Authenticating")

      setTimeout(() => {
        login(data);
      }, 500)
    }
  }


  // if "login" successful, set token cookie and redirect to dashboard
  useEffect(() => {
    if (loginError) {
      // show user and password wrong
      // reverse signin button text
      setSignInBtnText("Sign In")
      setErrorDisplay('');
      setIsFormValid(false);
    }
    else if (loginData) {

      setCookie('token', loginData.token);
      setCookie('username', emailState); // this "eve.holt@reqres.in" gets decoded into "eve.holt%40reqres.in". 
      // make loadingScreen visible
      dispatch(setMessage('Authentication Successful. Loading user dashboard.'))
      setLoadingDisplay('');

      setTimeout(() => {
        // redirect to admin
        navigate('/useradmin')
      }, 1500)
    }
  }, [loginData, loginError, isLoadingLogin])


  // restrict loggedin user from revisiting signIn
  useEffect(() => {
    if (cookie.token) {
      navigate('/useradmin')
    }
  }, [])


  // user clicked sign in - 
  // change sign in text to "authenticating"
  // if authentication successful make loading screen visible >> redirect to admin
  // if user name and password are wrong  >> change authenticating to sign up >> show error message


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
        <SignInButton buttonMessage={signInBtnText} clickHandler={submitClickHandler}/>

        

        <div className={styles.inputSection}>
          <p className={`${errorDisplay}`}>Incorrect email & password</p>
        </div>

        <p className={styles.alreadyHaveAcc}>
          Don't have an account yet?
          <a href="/signup" className={styles.signInButton}> Sign Up</a>
        </p>

        
      </form>

      <div className={loadingDisplay}>
        <Loading message={loadingMessageState} />
      </div>


      <br />
      <br />
      <br />

      TEST PHASE
      {`Email State: ___ ${emailState}`} <br />
      {`password State: ___ ${passwordState}`} <br />
      {`rememberme State: ___ ${rememberMeState}`} <br />
      {`form valid State: ___ ${isFormValidState}`} <br />
      {/* {decodeURI(usernameCookie.username)} <br/> */}
      {/* {usernameCookie.username} */}
    </>
  )
}

export default SignInForm;