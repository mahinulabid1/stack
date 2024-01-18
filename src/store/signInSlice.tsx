import {createSlice} from '@reduxjs/toolkit';

interface TypeSignIn {
  email : string
  password: string
  rememberMe: boolean
  isFormValid: boolean
  emailErrDisplay: string
  passwordErrDisplay: string
}

const initialState: TypeSignIn = {
  email: '',
  password: '',
  rememberMe: false,
  isFormValid: false,
  
  emailErrDisplay: 'dNone',
  passwordErrDisplay: 'dNone'
}

const signInSlice = createSlice({
  name: 'signInSlice', // doesn't matter what the name is
  initialState,
  reducers: {
    setEmail : (state, action) => {
      state.email = action.payload
    },
    setPassword : (state, action) => {
      state.password = action.payload;
    },
    setRememberMe : ( state, action ) => {
      state.rememberMe = action.payload;
    },
    setIsFormValid : (state, action ) => {
      state.isFormValid = action.payload;
    },
    setEmailErrDisplay: (state, action) => {
      state.emailErrDisplay = action.payload
    },
    setPasswordErrDisplay: (state, action) => {
      state.passwordErrDisplay = action.payload
    }
  }
})

export const {
  setEmail,
  setPassword,
  setRememberMe,
  setIsFormValid,
  setEmailErrDisplay,
  setPasswordErrDisplay
} = signInSlice.actions;

export default signInSlice.reducer;