import isValidEmail from '@additionalFunction/emailFormatValidation';

type SignUpArg = {
  emailState:string
  nameState: string
  passStrengthState: number
  termsAndConditionState: boolean
  setIsFormValid:any
  dispatch:any
}

type SignInArg = {
  emailState: string
  passwordState: string
  setIsFormValid : any
  dispatch: any
}

const formValidate = {
  signUp: (arg: SignUpArg):void => {

    const emailValid: boolean = isValidEmail(arg.emailState);
    const trimName: string = arg.nameState.trim();
    if (emailValid && trimName !== '' && arg.passStrengthState > 3 && arg.termsAndConditionState === true) {
      arg.dispatch(arg.setIsFormValid(true))
    } else {
      arg.dispatch(arg.setIsFormValid(false))
    }

  },

  signIn: (arg: SignInArg):void => {

    const emailValid: boolean = isValidEmail(arg.emailState);
    if (emailValid && arg.passwordState !== '' ) {
      arg.dispatch(arg.setIsFormValid(true))
    } else {
      arg.dispatch(arg.setIsFormValid(false))
    }
    
  }
}

export default formValidate;