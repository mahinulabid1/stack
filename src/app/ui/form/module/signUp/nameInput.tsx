import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import formValidate from '@additionalFunction/formValidation';
import styles from '@ui/form/formStyle.module.css'
import {
  setName,
  setIsFormValid,
} from '@store/signUpSlice';



const NameInput: React.FC = () => {

  const dispatch = useDispatch();

  const emailState = useSelector((state: any) => state.signUpState.email); 
  const nameState = useSelector((state: any) => state.signUpState.name);
  const termsAndConditionState = useSelector((state: any) => state.signUpState.termsAndCondition);
  const passStrengthState = useSelector((state: any) => state.signUpState.passStrength);
  const nameErrDisplayState = useSelector((state: any) => state.signUpState.nameErrDisplay);


  useEffect(() => {
    formValidate.signUp({
      emailState,
      nameState,
      passStrengthState,
      termsAndConditionState,
      setIsFormValid,
      dispatch
    });
  }, [nameState])

  return (
    <>
      <div className = {styles.inputSection}>
        <div className={styles.inputContainer}>
          <img src="./smileyIcon.svg" alt="name icon" />
          <input
            className={styles.formInput}
            type="text"
            placeholder='Your Name'
            name='name'

            onChange={event => {
              dispatch(setName(event.target.value));
            }}
          />

        </div>

        <p className={styles.errorMessage + ` ${nameErrDisplayState}`}>
          Please enter your full name! 
        </p>

      </div>
    </>
  )
}

export default NameInput;