import React from 'react';
import Head from '@ui/signIn&signUpHead/head'
import SignInForm from '../ui/form/signInForm';
import NavBasic from '@ui/navBasic/navBasic';
// import styles from "./signIn.module.css";
import SignIAndSignUpTemplate from '../ui/Template/signInAndSignUp/signInAndSignUpTemplate';


const SignInPage : React.FC = () => {
  return (
    <>
      <NavBasic />
      <SignIAndSignUpTemplate 
        Head={
          <Head 
            heading = 'Sign In'
            subHeading= 'Welcome back, you’ve been missed!'
          />
        }

        Form = { <SignInForm /> }
      />
    </>
  )
}

export default SignInPage;