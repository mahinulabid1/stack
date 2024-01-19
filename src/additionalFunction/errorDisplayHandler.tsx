/**
 * this file handles when and which error to be displayed in form
 * path : '@ui/form/signInForm.tsx' , '@ui/form/signUpForm.tsx'
 */
import isValidEmail from '@additionalFunction/emailFormatValidation';

type SignUpArg = {
  dispatch:any;
  emailState: string;
  nameState: string;
  passStrengthState: number;
  termsAndConditionState: boolean;
  setEmailErrDisplay: any;
  setPasswordErrDisplay: any;
  setTermsAndConditionErrDisplay: any;
  setNameErrDisplay: any;
}

type SignInArg = {
  dispatch: any
  emailState: string
  passwordState: string
  setEmailErrDisplay: any
  setPasswordErrDisplay: any
}

const handler = {

  signUp: (arg: SignUpArg): void => {

    const emailValid: boolean = isValidEmail(arg.emailState);
    const trimName = arg.nameState.trim();

    if (emailValid) {
      arg.dispatch(arg.setEmailErrDisplay('dNone')) 
    } 
    
    else {
      arg.dispatch(arg.setEmailErrDisplay('')) 
    }

    if (arg.passStrengthState > 3) {
      arg.dispatch(arg.setPasswordErrDisplay('dNone')) 
    } 
    else {
      arg.dispatch(arg.setPasswordErrDisplay('')) 
    }

    if (arg.termsAndConditionState) {
      arg.dispatch(arg.setTermsAndConditionErrDisplay('dNone')) 
    } 
    else {
      arg.dispatch(arg.setTermsAndConditionErrDisplay('')) 
    }

    if (trimName !== '') {
      arg.dispatch(arg.setNameErrDisplay('dNone')) 
    } 
    else {
      arg.dispatch(arg.setNameErrDisplay('')) 
    }
  },

  signIn: (arg: SignInArg) => {

    const emailValid: boolean = isValidEmail(arg.emailState);
    if (emailValid) {
      arg.dispatch(arg.setEmailErrDisplay('dNone')) 
    } 
    else {
      arg.dispatch(arg.setEmailErrDisplay('')) 
    }

    if (arg.passwordState !== '') {
      arg.dispatch(arg.setPasswordErrDisplay('dNone')) 
    } 
    else {
      arg.dispatch(arg.setPasswordErrDisplay('')) 
    }
  }
}

const errorDisplayHandler: any = {
  // more will be added
  handler
}

export default errorDisplayHandler;