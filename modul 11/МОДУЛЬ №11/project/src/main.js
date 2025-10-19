
// const btn = document.querySelector('.btnAccept')
// const input2 = document.querySelector('.input2')
// const txt = document.querySelector('.txt')

// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   let seconds = input2.value

//   let interval = setInterval(() => {
//     let minutes = Math.trunc(seconds / 60)
//     let second = seconds % 60
//     if (second === 0 && minutes > 1) {
//       minutes--
//     }

//     console.log(`Залишилось:${minutes} ${second} секунд`)
//     if (seconds <= 0 && minutes === 0 && second < 0) {
//       clearInterval(interval)
//       console.log('Час вийшов!')
//     }
//     second--
//     seconds--
//   }, 1000)
// })


// const btn = document.querySelector('.btn')
// const bodys = document.querySelector('.body')
// const input = document.querySelector('.input')
// let colors = ['purple', 'green', 'red', 'yelow']
// body.style.backGroundColor = 'white'
// let someNumber = 0;
// let num = 0;
// btn.addEventListener('click', (e) => {
//   e.preventDefault()

//   let number = input.value;

//   let interval = setInterval(() => {
//     if (num === 5) {
//       bodys.style.backgroundColor = colors[someNumber]
//       someNumber++
//       num = 0
//     }


//     num++
//     number--
//   }, 1000)


// })

// const txt = document.querySelector('.txt')
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let interval = setInterval(() => {
//   seconds++
//   txt.textContent = `${hours} h ${minutes} m ${seconds} s`
//   if (seconds === 60) {
//     seconds = 0
//     minutes++
//   }
//   if (minutes === 60) {
//     minutes = 0
//     hours++
//   }
// }, 1000)
