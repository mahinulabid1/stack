import React, {useEffect} from 'react'
import styles from './errorPage.module.css'
import { useNavigate } from "react-router-dom";

interface ComponentProps {
  heading: string;
  redirectingTo: string
  route:string
}

const ErrorPage:React.FC<ComponentProps>= ({heading, redirectingTo, route}) => {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout (()=>{
      navigate(route)
    }, 3000)
  }, [])

  return(
    <>
      <h1 className={styles.errorHeading}> {heading} </h1>
      <p className={styles.redirectText}> 
      Redirecting To: <span className={styles.redirectTextSpan}>{redirectingTo}</span>
      </p>
    </>
  )
}

export default ErrorPage;