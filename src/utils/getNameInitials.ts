export const getNameInitials = (name: string) => {
  const splittedName = name.split(' ')
  const firstInitial = splittedName[0][0]
  const lastInitial = splittedName[splittedName.length - 1][0]

  const firstInitialUpperCase = firstInitial.toUpperCase()
  const lastInitialUpperCase = lastInitial.toUpperCase()

  const initialsArray = [firstInitialUpperCase, lastInitialUpperCase]

  return initialsArray.join('')
}
