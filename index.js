const characters =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&'

const passwordLength = document.getElementById('length-el')
const inputs = document.querySelectorAll(
  '#result-a, #result-b, #result-c, #result-d'
)
function generateString(length) {
  let password = ''
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return password
}

function createPassword() {
  let length = passwordLength.value

  // firstPassword.value = result
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = generateString(length)
  }
}
