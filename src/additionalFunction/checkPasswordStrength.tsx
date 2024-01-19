function checkPasswordStrength(password: string): number {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasConsecutiveChars = !/(.)\1{2,}/.test(password);

  let strength = 0;

  // Minimum length
  if (password.length >= minLength) {
    strength++;
  }

  // Presence of uppercase and lowercase character
  if (hasUpperCase && hasLowerCase) {
    strength++;
  }

  // Presence of at least one digit
  if (hasDigit) {
    strength++;
  }

  // Presence of at least one special character
  if (hasSpecialChar) {
    strength++;
  }

  // Avoid consecutive characters
  if (hasConsecutiveChars) {
    strength++;
  }

  return strength;
}


export default checkPasswordStrength;