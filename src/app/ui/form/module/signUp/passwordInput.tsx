import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import checkPasswordStrength from '@additionalFunction/checkPasswordStrength'
import formValidate from '@additionalFunction/formValidation';
import styles from '@ui/form/formStyle.module.css'
import {
  setPassword,
  setPassStrength,
  setIsFormValid,
} from '@store/signUpSlice';



const PasswordInput: React.FC = () => {
  const dispatch = useDispatch();

  const [passwordInputType, setPaswordInputType ] = useState<string>('password')

  const passwordErrDisplayState = useSelector((state: any) => state.signUpState.passwordErrDisplay);
  const emailState = useSelector((state: any) => state.signUpState.email);  
  const nameState = useSelector((state: any) => state.signUpState.name);
  const passwordState = useSelector((state: any) => state.signUpState.password);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);

  const passStrengthOperation = (password: string) => {
    const passStrength: number = checkPasswordStrength(password);
    dispatch(setPassStrength(passStrength));
  }

  const changePasswordInputType = ():void => {
    if(passwordInputType === 'password') {
      setPaswordInputType('text');
    }
    else {
      setPaswordInputType('password')
    }
  }

  useEffect(() =>{
    formValidate.signUp({
      emailState,
      nameState,
      passStrengthState,
      termsAndConditionState,
      setIsFormValid,
      dispatch
    });
  }, [passwordState])


  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer}>
          <img src="./lockIcon.svg" alt="lock icon" />
          <input
            className={styles.formInput}
            type={passwordInputType}
            placeholder='Your Password'
            name='name'
            onChange={(event) => {
              dispatch(setPassword(event.target.value));
              passStrengthOperation(event.target.value);
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

        <p className={styles.errorMessage + ` ${passwordErrDisplayState}`}>Please enter a strong Password! </p>
      </div>
    </>
  )
}

export default PasswordInput;