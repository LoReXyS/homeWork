// taksThree
const input1 = document.querySelector('.inputTaskThree1')
const input2 = document.querySelector('.inputTaskThree2')
const button = document.querySelector('.buttonTaskThree')
const button2 = document.querySelector('.deleteTaskThree')
const buttonReplace = document.querySelector('.buttonReplaceTaskThree')
const inputChek = document.querySelector('.inputChek')
const buttonLogin = document.querySelector('.buttonLogin')


button.addEventListener('click', (e) => {
  e.preventDefault()


  const getValue1 = input1.value
  const getValue2 = input2.value

  const list = getValue2

  input1.value = ''
  input2.value = ''
  localStorage.setItem(getValue1, JSON.stringify(getValue2))


})

buttonReplace.addEventListener('click', (e) => {
  e.preventDefault()
  input1.value = ''
  input2.value = ''
  localStorage.clear()
})

buttonLogin.addEventListener('ckick', (e) => {
  e.preventDefault()
  inputChek.value = ''

  console.log(localStorage.getItem('Danya'));

})
