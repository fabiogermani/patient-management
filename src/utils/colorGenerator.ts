export const generateColor = () => {
  // Número aleatório de 0 a 9
  let flag = false
  while (!flag) {
    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber !== 0) {
      flag = true
      return String(randomNumber) as
        | '1'
        | '2'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
    }
  }
}
