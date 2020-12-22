export function phoneNumberFormatter (phoneNumber) {
    if(phoneNumber.startsWith('0')) {
      return formatPhoneNumberWithCountryCode('234', phoneNumber)
    }else{
      return phoneNumber
    }
}