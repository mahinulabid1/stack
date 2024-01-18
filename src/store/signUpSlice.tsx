import { createSlice } from "@reduxjs/toolkit";

interface TypeSignUpState {
  email:string;
  name: string;
  password: string;
  termsAndCondition: boolean;
  passStrength: number;
  isFormValid: boolean;

  emailErrDisplay: string;
  nameErrDisplay: string;
  passwordErrDisplay: string;
  termsAndConditionErrDisplay: string;
}

const initialState:TypeSignUpState = {
  email: '',
  name: '',
  password: '', 
  termsAndCondition: false,
  passStrength: 0,
  isFormValid: false,

  emailErrDisplay: 'dNone',
  nameErrDisplay: 'dNone',
  passwordErrDisplay: 'dNone',
  termsAndConditionErrDisplay: 'dNone'
};

const signUpSlice = createSlice({
  name: 'signUpState', // it doesn't matter, its not used anywhere
  initialState,
  reducers: {
    //here will contain all the method it is like setState
    setEmail : (state, action) => {
      state.email = action.payload
    },

    setName : (state, action) => {
      state.name = action.payload
    }, 

    setPassword : (state, action) => {
      state.password = action.payload
    }, 

    setTermsAndCondition : (state, action) => {
      state.termsAndCondition = action.payload
    }, 

    setPassStrength : (state, action) => {
      state.passStrength = action.payload
    }, 

    setIsFormValid : (state, action) => {
      state.isFormValid = action.payload
    }, 

    // error display handler
    setEmailErrDisplay: (state, action ) =>{
      state.emailErrDisplay = action.payload
    } ,
    setNameErrDisplay: (state, action ) =>{
      state.nameErrDisplay = action.payload
    } ,
    setPasswordErrDisplay: (state, action ) =>{
      state.passwordErrDisplay = action.payload
    } ,
    setTermsAndConditionErrDisplay: (state, action ) =>{
      state.termsAndConditionErrDisplay = action.payload
    } 
  }
})

export const { 
  setEmail, 
  setName, 
  setPassword, 
  setTermsAndCondition, 
  setPassStrength, 
  setIsFormValid, 
  
  setEmailErrDisplay, 
  setNameErrDisplay, 
  setPasswordErrDisplay, 
  setTermsAndConditionErrDisplay } = signUpSlice.actions;

export default signUpSlice.reducer;