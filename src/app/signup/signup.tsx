import React from 'react'
import NavBasic from '@ui/navBasic/navBasic';
import Head from '@ui/signIn&signUpHead/head';
import SignUpForm from '@ui/form/signupForm';
import SignIAndSignUpTemplate from '@ui/Template/signInAndSignUp/signInAndSignUpTemplate';
import HelmetComponent from '../helmet';


const SignupPage: React.FC = () => {

  return (
    <>
      <HelmetComponent title="Stack - Sign Up" />
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
