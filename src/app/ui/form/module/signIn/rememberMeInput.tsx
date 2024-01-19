import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRememberMe } from '@store/signInSlice';
import styles from '@ui/form/formStyle.module.css'

const RememberMeInput: React.FC = () => {
  const dispatch = useDispatch();

  const rememberMeState = useSelector((state: any) => state.signInState.rememberMe);
  // Message: incomplete rememberMe functionality. [related to cookie expire time]

  return (
    <>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer} key={'04'}>
          <input
            type="checkbox"
            name='terms&condition'
            onChange={(event) => {
              dispatch(setRememberMe(event.target.checked))
            }}
          />

          <label htmlFor='terms&condition'>Remember Me</label>
        </div>
      </div>
    </>
  )
}

export default RememberMeInput;