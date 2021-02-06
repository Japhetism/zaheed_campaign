export function stripHyphenFromString (str) {
    return str.replace(/-/g, '')
}

export function stripCountryCode (phone) {
    if (phone.startsWith('+91') && phone.length === 13) {
      return phone.substr(3)
    }
    if (phone.startsWith('91') && phone.length === 12) {
        return phone.substr(2)
    }
    return phone;
  }