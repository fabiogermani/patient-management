export const capitalize = (string: string) => {
  const arr = string.split(' ')
  const capitalizedArr = arr.map((word) => {
    const capitalizedFirst = word.charAt(0).toUpperCase()
    const rest = word.slice(1).toLowerCase()
    return capitalizedFirst + rest
  })
  return capitalizedArr.join(' ')
}
