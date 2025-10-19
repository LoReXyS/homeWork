// const book = '{"name":"how to play dota?","author":"miponegeroy","yearOfPublication":2025,"genre" :"science fiction"}';
// // const book = {
// //   name: 'how to play dota?',
// //   author: 'miponegeroy',
// //   yearOfPublication: 2025,
// //   genre: 'science fiction',
// // };
// const checkBook = JSON.parse(book)
// console.log("checkbook", checkBook);
const age = document.querySelector('.ageInpt')
const name = document.querySelector('.nameInpt')
const button = document.querySelector('.button')
const list = [];
button.addEventListener("click", (e) => {
    e.preventDefault()

    const getValueAge = age.value
    const getValueName = name.value
    const person = { "name": getValueName, "age": getValueAge, };
    list.push(person)
    age.value('')
    name.value('')
    localStorage.setItem('list', JSON.stringify(list))
});
