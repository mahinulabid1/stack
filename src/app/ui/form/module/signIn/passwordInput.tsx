import React from 'react';
import styles from '@ui/form/formStyle.module.css'
import { useDispatch, useSelector } from 'react-redux';
import formValidate from '@additionalFunction/formValidation';
import { 
  setPassword,
  setIsFormValid,
} from '@store/signInSlice';


const PasswordInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  const passwordErrDisplayState = useSelector((state: any) => state.signInState.passwordErrDisplay);
  const emailState = useSelector((state: any) => state.signInState.email);  // signInState = name from store.tsx= reducer{}
  const passwordState = useSelector((state: any) => state.signInState.password);

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'03'}>
          <img src="./lockIcon.svg" alt="" />
          <input
            className={styles.formInput}
            type="password"
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
{/* git add src/app/ui/form/module/ && git commit -m 'refactor validation and other function, add loading bar' */}
          <img src="./eye.svg" alt="" />

        </div>
        <p className={styles.errorMessage + ` ${passwordErrDisplayState}`}>Please enter password </p>
      </div>
    </>
  )
}

export default PasswordInput;