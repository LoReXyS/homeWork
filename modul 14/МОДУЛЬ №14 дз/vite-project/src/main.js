// const promise1 = Promise.resolve(console.log('ur promise'));
// const promise2 = 16;
// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// });

// Promise.all([promise1, promise2, promise3]).then(() => {
//     console.log('yessss');
// });



// const somePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => { resolve(text) }, delay)
//     })
// }
// const promise1 = somePromise("promise 1", 1000)
// const promise2 = somePromise("promise 2", 3000)
// Promise.race([promise1, promise2,]).then(resolve => {
//     console.log('работає не бийте палкой пж');
// })


// const somePromise =
// new Promise((resolve, reject) => reject("error").cath(error => console.error(error))
// );
// Promise.reject("error").catch(error => console.error(error));
// new Promise(resolve => resolve("is done"))
//     .then(value => console.log(value));


// const errorMessage = 'Something went wrong';
// function rejectWithError(message) {
//     return Promise.reject(message)
// }

// rejectWithError(errorMessage)
//     .catch((error) => {
//         console.error(error);
//     });




// function delayedPromise(value, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, delay);
//     });

// }
// const promises = [
//     delayedPromise("Яблуко", 1000),
//     delayedPromise("Банан", 2000),
//     delayedPromise("Виноград", 1500),
//     delayedPromise("Полуниця", 2500),
//     delayedPromise("Ананас", 500),
// ];
// Promise.all(promises)
//     .then((results) => {
//         console.log("Всі проміси виконано:");
//         results.forEach((results, index) => {
//             console.log(`Проміс ${index + 1}: ${results}`);

//         })
//     })
function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}


const promises = [
    delayedPromise("Яблуко", 1000),
    delayedPromise("Банан", 2000),
    delayedPromise("Виноград", 1500),
    delayedPromise("Полуниця", 2500),
    delayedPromise("Ананас", 500),
];


Promise.race(promises)
    .then((firstResult) => {
        console.log(" Першим виконався проміс:", firstResult);
    });


Promise.all(promises)
    .then((allResults) => {
        console.log("Всі проміси виконано:");
        allResults.forEach((result, index) => {
            console.log(`Проміс ${index + 1}: ${result}`);
        });
    })
