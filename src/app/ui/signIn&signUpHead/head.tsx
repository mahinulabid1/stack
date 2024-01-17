import React from 'react';
import OAuth from '@ui/oAuth/oAuth';
import styles from './head.module.css';

interface ComponentProps {
  heading : String,
  subHeading : String
}

const Head: React.FC<ComponentProps> = ({ heading, subHeading }) => {
  return (
    <>
      <h2 className={styles.heading}> {heading} </h2>
      <h3 className={styles.subHeading}> {subHeading} </h3>

      <OAuth />

      <span className={styles.or}>OR</span>
    </>
  )
}

export default Head;