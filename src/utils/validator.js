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