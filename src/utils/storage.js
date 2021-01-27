export function saveData(saveAs, data) {
    localStorage.setItem(saveAs, data)
}

export function retrieveStoredData(data) {
    return localStorage.getItem(data)
}

export function deleteStoredData(data) {
    localStorage.removeItem(data)
}

export function getAccessToken () {
    const userInfo = JSON.parse(retrieveStoredData('userInfo'))
    let { accessToken, type } = userInfo
    accessToken  = accessToken ? accessToken : null
    type = type ? type : 'Bearer'
    return accessToken ? `${type} ${accessToken}` : null 
}
