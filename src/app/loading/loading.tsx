import React from 'react';
import styles from './loading.module.css'

interface ComponentProps {
  message: string
}

const Loading: React.FC<ComponentProps> = ({message}) => {
  return (
    <>
      <div className={`${styles.loaderContainer}`}>

        <div className={styles.divCenter}>
          <span className={styles.loader}></span>
          <p className={styles.message}>{message}</p>
        </div>

      </div>

    </>
  )
}

export default Loading;