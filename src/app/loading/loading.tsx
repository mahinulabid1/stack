import React from 'react';
import styles from './loading.module.css'

const Loading:React.FC = () => {
  return(
    <>
      <span className={styles.loader}></span>
    </>
  )
}

export default Loading;