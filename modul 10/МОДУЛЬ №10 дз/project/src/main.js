// 1
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log('the fiveth message');
//   }, i * 2000);
// }
// 2
// const div1 = document.querySelector('.div1');
// const div2 = document.querySelector('.div2');
// const colors = ['red', 'blue', 'green', 'orange', 'black'];

// let i = 0;

// setInterval(() => {
//   div1.style.backgroundColor = colors[i];
//   div2.style.backgroundColor = colors[i];
//   i = (i + 1) % colors.length;
// }, 2000);

// 4
// const btnPlus = document.querySelector('.buttonPlus')
// const btnMinus = document.querySelector('.buttonMinus')
// const txt = document.querySelector('.txt')
// const btnAccept = document.querySelector('.btnAccept')
// let number = 0
// txt.textContent = `your time is: ${number}`;
// btnPlus.addEventListener('click', (e) => {
//   e.preventDefault()

//   number++;

//   txt.textContent = `your time is: ${number}`;
// })
// btnMinus.addEventListener('click', (e) => {
//   e.preventDefault()

//   number--;

//   txt.textContent = `your time is: ${number}`;
// })
// btnAccept.addEventListener('click', (e) => {
//   e.preventDefault()
//   if (number < 0 || number == 0) {
//     alert('your number can`t be < 0 or = 0')
//     return
//   }
//   setTimeout(() => { alert(`u have set ${number} time`) }, number * 1000)

//   for (let i = 0; i < number; i++) { txt.textContent = `your time is: ${number}`; }
// })
// додаткові
// 2
// const btn = document.querySelector('.btn')
// const txt = document.querySelector('.txt')
// const stop = document.querySelector('.stop')
// let seconds = 0;
// let interval = null;

// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   interval = setInterval(() => {
//     seconds++
//     txt.textContent = seconds
//   }, 1000);
// })
// stop.addEventListener('click', (e) => {
//   e.preventDefault()
//   clearInterval(interval)
//   interval = null
//   txt.textContent = ''
// })
// const btn = document.querySelector('.btn')
// let colors = ['yelow', 'blue', 'green', 'white', 'purple']
// const div1 = document.querySelector('.div')
// // div1.style.backgroundColor = 'black'
// let i = 0;

// btn.addEventListener('click', (e) => {
//   e.preventDefault()


//   setInterval(() => {



//     i = (i + 1) % colors.length;
//     div1.style.backgroundColor = colors[i];
//   }, 1000)
// })
// const btn = document.querySelector('.btn')
// const txt = document.querySelector('.txt')
// let text = ['is chanched', 'some chanches', 'no any chanches', 'hm...',]
// let i = 0;
// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   setInterval(() => {

//     i = (i + 1) % text.length;
//     txt.textContent = text[i];
//   }, 1000)
// })
// const txt = document.querySelector('.txt')
// let urPrompt = prompt('text ur message')
// if (urPrompt) { console.log(urPrompt); }
// else if (urPrompt === null || NaN || false) {
//   console.log('пусто')
// }

// setTimeout(() => {
//   txt.textContent = urPrompt

// }, 1000)

// let theFirstPromt = parseInt(prompt('ur first number '))
// let theSecondPromt = parseInt(prompt('ur second number '))


// let i = theFirstPromt;



// let interval = setInterval(() => {
//   if (theFirstPromt === null || NaN || false) {
//     console.log('bruh the first number isn`t correct');
//     clearInterval(interval)
//     interval = null
//   }
//   if (theSecondPromt === null || NaN || false) {
//     console.log('bruh the second number isn`t correct');
//     clearInterval(interval)
//     interval = null
//   }

//   console.log(i);
//   i++
//   if (i > theSecondPromt) {
//     console.log('розрахунок закінчено');
//     clearInterval(interval)
//     interval = null
//   }

// }, 1000)

// let interval = setTimeout(() => {
//   if (theFirstPromt === null || NaN || false) {
//     console.log('bruh the first number isn`t correct');
//     clearInterval(interval)
//     interval = null
//   }
//   if (theSecondPromt === null || NaN || false) {
//     console.log('bruh the second number isn`t correct');
//     clearInterval(interval)
//     interval = null
//   }

//   console.log(i);
//   i++
//   if (i === theSecondPromt) {
//     console.log('розрахунок закінчено');
//     clearInterval(interval)
//     interval = null
//   }

// }, 1000)
// const divss = document.querySelector('.div1')
// const btn = document.querySelector('.btn')
// divss.style.backgroundColor = 'black'
// console.log(divss.style.backgroundColor);

// btn.addEventListener('click', (e) => {
//     e.preventDefault()

//     setTimeout(() => {
//         divss.style.backgroundColor = 'red'
//         let createdElementP = document.createElement('p')
//         createdElementP.textContent = 'змінено!'
//         divss.insertAdjacentElement("afterbegin", createdElementP)
//     }, 1000)
// })
// const btn = document.querySelector('.btn')
// const img = document.querySelector('.imgs')
// const arrayOfImgs = ['./src/imgs/2.jpg', './src/imgs/3.jpg', './src/imgs/4.jpg', './src/imgs/5.jpg', './src/imgs/6.jpg']

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     setTimeout(() => {

//         const randomIndex = Math.floor(Math.random() * arrayOfImgs.length)
//         img.src = arrayOfImgs[randomIndex]
//     }, 1000)


// })
// const btn = document.querySelector('.btn')
// const divs = document.querySelector('.div1')
// divs.style.width = '100px';
// divs.style.height = '100px';

// let someWidth = [200, 400, 150, 350]
// let someHeight = [200, 400, 150, 350]
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     setInterval(() => {
//         const randomIndexOfHeight = Math.floor(Math.random() * someHeight.length)
//         const randomIndexOfWidth = Math.floor(Math.random() * someWidth.length)
//         divs.style.width = someWidth[randomIndexOfWidth] + 'px';
//         divs.style.height = someHeight[randomIndexOfHeight] + 'px';
//         console.log(divs.style.width);
//         console.log(divs.style.height);
//     }, 1000)
// })
