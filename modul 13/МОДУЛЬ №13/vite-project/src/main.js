// let promise = new Promise(function (resolve, reject) {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
// });
// promise.then(alert);



// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms)
//   })
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));
// function seyv(ms) {
//   return new Promise(resolve => { setTimeout(resolve, ms) })
// }
// seyv(2000).then(() => { alert("Проміс виконано") })

// const array = [4, 6, 8, 10, 11]
// // for (let i = 2; i <= array.le; i++) {
// //   if (i % 2 == 0) {
// //     alert(i);
// //   }
// // }
// function someFunction(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let arrayFind = array.find(array => array % 2 !== 0)
//       if (arrayFind !== undefined) {
//         reject("Є непарні числа");
//       } else {
//         resolve("Усі числа парні");
//       }
//       console.log(arrayFind);
//     }, ms)
//   })
// }
// someFunction(1000).then((result) => {
//   console.log(result);

// }).catch((error) => {
//   console.log(error);
// })
// const btn = document.querySelector('.btn')
// const images = ['./src/img/1f54acbbecdfb5b248d42ace992b699b.jpg']
// const img = document.querySelector('.img')
// function someFunction(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (images.length > 0) {
//                 img.src = images[0];
//                 resolve("successful");
//             } else {
//                 reject("image array is empty");
//             }
//         }, ms)
//     })
// }
// btn.addEventListener('click', someFunction)

// let firstNumber = prompt('Введіть перше число')
// let secondNumber = prompt('Введіть друге число')
// Суперворчі завдання
const rundomNumber = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let array = [1, 4, 6];
let urNumber = rundomNumber(10);

console.log(urNumber);


function urPromise(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.includes(urNumber)) {
                resolve(console.log('винонано проміс'));
            } else {
                reject(console.log('не виконано проміс'));
            }
        }, ms)
    })
}
urPromise(1000)
