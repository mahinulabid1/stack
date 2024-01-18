import React from 'react';
import styles from '@ui/form/formStyle.module.css'
import { useDispatch } from 'react-redux';
import { setRememberMe } from '@store/signInSlice';

const RememberMeInput: React.FC = () => {
  const dispatch = useDispatch();

  // Access the state from the store
  // signInState = name from store.tsx= reducer{}
  // const rememberMeState = useSelector((state: any) => state.signInState.rememberMe);

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