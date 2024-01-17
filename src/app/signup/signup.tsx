import React from 'react'
import styles from './signup.module.css';
import NavBasic from '@ui/navBasic/navBasic';
import Head from '@ui/signIn&signUpHead/head';
import Form from '@/app/signup/form';

// type SignUpProps = {
//   anyProps: String
// }


// const SignupPage = ({ anyProps }: SignUpProps) => {
const SignupPage: React.FC = () => {

  return (
    <>
      <NavBasic />
      <section className={styles.section}>
        <div className={styles.centerContainer}>
          <Head 
            heading='Getting Started'
            subHeading = 'Create an account to continue!'
          />
          <Form />
          
        </div>
      </section>
    </>
  )
}

export default SignupPage
