export function checkPhoneIsValid (phone) {
  if (phone.startsWith('+91') && phone.length === 13) {
    return true
  }
  if (phone.startsWith('91') && phone.length === 12) {
      return true
    }
  if (phone.length === 10) {
    return true
  }
  return false
}

export function checkPasswordIsValid (password) {
  return password.length >= 4
}

export function checkPasswordIsMatch (password, confirmPassword) {
  return password === confirmPassword
}

export function checkEmailIsValid (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}