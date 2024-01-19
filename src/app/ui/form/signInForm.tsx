import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import styles from './formStyle.module.css'
import { CookiesProvider, useCookies } from "react-cookie";
import EmailInput from './module/signIn/emailInput';
import PasswordInput from './module/signIn/passwordInput';
import RememberMeInput from './module/signIn/rememberMeInput';
import SignInButton from './module/signIn/signInButton';

import { 
  useGetUserInfoQuery ,
  useCreateNewUserMutation,
  useLoginMutation
} from '@store/apiSlice';

const SignInForm: React.FC = () => {

  const [tokenCookie, setTokenCokie, removeTokenCookie] = useCookies(['token']);
  const [usernameCookie, setUsernameCookie, removeUsernameCookie] = useCookies(['username'])

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
      // perform login query and redirect to dashboard
      const data = {
        email : 'eve.holt@reqres.in', // reqres.in API not accepting any other username
        password: passwordState // reqres.in API  accepting all password 
      }
      console.log(data);
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
      console.log(loginData.token);
      setTokenCokie('token', loginData.token);
      setUsernameCookie('username', 'eve.holt@reqres.in'); // this "eve.holt@reqres.in" gets decoded into "eve.holt%40reqres.in". 

      // redirect to dashboard
    }
  }, [loginData, loginError, isLoadingLogin])

  console.log(usernameCookie)

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
      {decodeURI(usernameCookie.username)} <br/>
      {usernameCookie.username}
    </>
  )
}

export default SignInForm;