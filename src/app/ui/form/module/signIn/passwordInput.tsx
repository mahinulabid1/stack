import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import formValidate from '@additionalFunction/formValidation';
import styles from '@ui/form/formStyle.module.css'
import { 
  setPassword,
  setIsFormValid,
} from '@store/signInSlice';


const PasswordInput: React.FC = () => {
  const dispatch = useDispatch();

  const [passwordInputType, setPaswordInputType ] = useState<string>('password')

  const passwordErrDisplayState = useSelector((state: any) => state.signInState.passwordErrDisplay);
  const emailState = useSelector((state: any) => state.signInState.email);
  const passwordState = useSelector((state: any) => state.signInState.password);

  const changePasswordInputType = ():void => {
    if(passwordInputType === 'password') {
      setPaswordInputType('text');
    }
    else {
      setPaswordInputType('password')
    }
  }

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'03'}>
          <img src="./lockIcon.svg" alt="" />
          <input
            className={styles.formInput}
            type={passwordInputType}
            placeholder='Enter password' name='password'
            onChange={(event) => {
              dispatch(setPassword(event.target.value))
              formValidate.signIn({
                emailState,
                passwordState,
                setIsFormValid,
                dispatch
              })
            }}
          />

          <img 
            src="./eye.svg" 
            alt="see password" 
            onClick = {()=>{
              changePasswordInputType();
            }}
          />

        </div>

        <p className={styles.errorMessage + ` ${passwordErrDisplayState}`}>
          Please enter password 
        </p>

      </div>
    </>
  )
}

export default PasswordInput;