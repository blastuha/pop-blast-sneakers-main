const getStorageItems = (key) => {
  const data = localStorage.getItem(`${key}`)
  return data ? JSON.parse(data) : ''
}

export default getStorageItems
