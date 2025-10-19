// const btn = document.querySelector('.btn')
// const txt = document.querySelector('.txt')
// const txt2 = document.querySelector('.txt2')
// const txt3 = document.querySelector('.txt3')
// let hours = 1;
// let minutes = 0;
// let seconds = 0;
// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   setTimeout(() => {
//     seconds--
//     if (seconds < 0) {
//       minutes--
//       seconds = 59
//     }


//     txt.textContent = seconds
//     txt2.textContent = minutes
//     txt3.textContent = hours
//   }, 1000)

// })
const btn = document.querySelector('.active')
const div = document.querySelector('.div')
let seconds = 30;

let colors = ['green', 'red', 'purple', 'yelow', 'blue']

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(seconds);
    setTimeout(() => {
        seconds--
        if (seconds == 10) {
            for (let i = 0; i < seconds; i++) {
                div.style.backgroundColor = colors[i];
            }
        }


    }, 1000)
})
