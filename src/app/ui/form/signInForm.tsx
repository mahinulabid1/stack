import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useLoginMutation } from '@store/apiSlice';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

import EmailInput from './module/signIn/emailInput';
import PasswordInput from './module/signIn/passwordInput';
import RememberMeInput from './module/signIn/rememberMeInput';
import SignInButton from './module/signIn/signInButton';
import styles from './formStyle.module.css'

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [cookie, setCookie ] = useCookies(['token', 'username']);

  // Access the state from the store
  const emailState = useSelector((state: any) => state.signInState.email);  // signInState = name from store.tsx= reducer{}
  const passwordState = useSelector((state: any) => state.signInState.password);
  const rememberMeState = useSelector((state: any) => state.signInState.rememberMe);
  const isFormValidState = useSelector((state: any) => state.signInState.isFormValid);

  const [login , {data:loginData, error:loginError, isLoading:isLoadingLogin}] = useLoginMutation();

  // if form is valid, perform - create new user
  useEffect(() => {
    console.log('validating!')
    if (isFormValidState) {
      const data = {
        email : 'eve.holt@reqres.in', // reqres.in API not accepting any other username
        password: passwordState // reqres.in API  accepting all password 
      }
      login(data);
    }
  }, [isFormValidState])


  // if "login" successful, set token cookie and redirect to dashboard
  useEffect(()=>{
    if(loginError){
      console.log(loginError)
    }
    else if(isLoadingLogin) {
      console.log('Authenticating User!');
    }
    else if(loginData) {
      console.log("login complete!")
      // console.log(loginData.token);
      setCookie('token', loginData.token);
      setCookie('username', 'eve.holt@reqres.in'); // this "eve.holt@reqres.in" gets decoded into "eve.holt%40reqres.in". 

      // redirect to admin
      navigate('/useradmin')
    }
  }, [loginData, loginError, isLoadingLogin])


  // restrict loggedin user from revisiting signIn
  useEffect(()=>{
    if(cookie.token){
      navigate('/useradmin')
    }
  }, [])


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
      {/* {decodeURI(usernameCookie.username)} <br/> */}
      {/* {usernameCookie.username} */}
    </>
  )
}

export default SignInForm;