export function saveData(saveAs, data) {
    localStorage.setItem(saveAs, data)
}

export function retrieveStoredData(data) {
    return localStorage.getItem(data)
}

export function deleteStoredData(data) {
    localStorage.removeItem(data)
}
