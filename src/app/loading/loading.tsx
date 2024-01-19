import React from 'react';
import styles from './loading.module.css'

interface ComponentProps {
  loadingMessage: string
}

const Loading: React.FC<ComponentProps> = ({loadingMessage}) => {
  return (
    <>
      <div className={`${styles.loaderContainer}`}>

        <div className={styles.divCenter}>
          <span className={styles.loader}></span>
          <p className={styles.message}>{loadingMessage}</p>
        </div>

      </div>

    </>
  )
}

export default Loading;