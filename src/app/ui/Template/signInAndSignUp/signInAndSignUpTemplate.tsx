import React from 'react';
import styles from './style.module.css';

interface ComponentProps {
  Head  : any,
  Form : any
}

const SignIAndSignUpTemplate: React.FC<ComponentProps> = ({Head, Form}) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.centerContainer}>
          
          {Head}
          {Form}

        </div>
      </section>
    </>
  )
}

export default SignIAndSignUpTemplate;