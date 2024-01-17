import React from 'react'
// import styles from './signup.module.css';
import NavBasic from '@ui/navBasic/navBasic';
import Head from '@ui/signIn&signUpHead/head';
import SignUpForm from '../ui/form/signupForm';
import SignIAndSignUpTemplate from '../ui/Template/signInAndSignUp/signInAndSignUpTemplate';


const SignupPage: React.FC = () => {

  return (
    <>
      <NavBasic />
      <SignIAndSignUpTemplate
        Head = {
          <Head
            heading= "Getting Started"
            subHeading= "Create an account to continue"
          />
        }

        Form = { <SignUpForm /> }
      />

    </>
  )
}

export default SignupPage
