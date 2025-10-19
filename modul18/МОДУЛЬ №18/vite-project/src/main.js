// Get
// const api = `https://jsonplaceholder.typicode.com/posts`
// fetch(api)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })
// get 1
// const api = `https://jsonplaceholder.typicode.com/posts/1`
// fetch(api)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })
// Post
// const postToUpdate = {
//   id: 1,
//   body: 'CRUD is really awesome',
// }
// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// }
// fetch(`https://jsonplaceholder.typicode.com/posts`, options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   }
//   )
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })
//HTTP-метода PUT/PATCH
// const postUpdated = {
//   id: 4,
//   body: 'CRUD isnt really awesome!!!!!!!!!!!!',
// }
// const options = {
//   method: 'PATCH',
//   body: JSON.stringify(postUpdated),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// }
// fetch(`https://jsonplaceholder.typicode.com/posts/${postUpdated.id}`, options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })
// Delete
// const postIdToDelete = 1
// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('Post deleted'))
//   .catch((error) => console.log('Error:', error))
//Додаткові завдання
// const api = `http://localhost:3000/students`
// fetch(api)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })

//post
// let newStudent = {
//   id: 4,
//   name: 'Carl',
//   age: 25,
//   email: 'carlss@gmail.com',
//   phone: '123-456-7890',
// }
// const options = {
//   method: 'POST',
//   body: JSON.stringify(newStudent),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// }
// fetch(api, options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })
//id
// let options = {
//   id: 1,
// }
// fetch(api + '/' + options.id)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })
//put

// Творчі завдання



// let api = 'http://localhost:3000/students';

// fetch(api)
//   .then(response => response.json())
//   .then(data => console.log('Отримано:', data))
//   .catch(error => console.error('Помилка:', error));
// let options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Kakashka',
//     age: 35,
//     email: 'kakashkapidofaylMisha@gmail.com',
//     phone: '123-456-7890'
//   })
// };

// fetch(api, options)
//   .then(response => response.json())
//   .then(data => console.log('Додано:', data))
//   .catch(error => console.error('Помилка:', error));
// name
// let api = 'http://localhost:3000/students';
// let name = 'Kakashka';

// fetch(`${api}?name=${name}`)
//   .then(response => response.json())
//   .then(data => console.log('Знайдено:', data))
//   .catch(error => console.error('Помилка:', error));
//
// patch
// let api = 'http://localhost:3000/students';
// let postToUpdate = {
//   id: 5,
//   name: 'Ilya',
//   age: 41,
//   email: 'ilya2312@gmail.com'
// }
// let options = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(postToUpdate)
// };

// fetch('http://localhost:3000/students', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     id: 6,
//     name: 'Ilya',
//     age: 41,
//     email: 'ilya2312@gmail.com'
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log('Оновлено:', data))
//   .catch(error => console.error('Помилка:', error));
// Ддз
let api = 'http://localhost:3000/movies'

async function getMovie(movie) {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
}
getMovie()
async function addMovie(newMovie) {
  const options = {
    method: 'POST',
    body: JSON.stringify(newMovie),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }
  fetch(api, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
}
const newMovie = {
  id: 4,
  title: 'Doom',
  director: 'The doom sleyer',
  year: 2023,
}
addMovie(newMovie)
// async function updateMovie(id) {
//   const movieToUpdate = {
//     id: id,
//     title: 'Doom',
//     director: 'The doom guy',
//     year: 2024,
//   }
//   const options = {
//     method: 'PATCH',
//     body: JSON.stringify(movieToUpdate),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   }
//   fetch(`${api}/${id}`, options)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//     })
// }
// updateMovie(4)
// async function deleteMovie(id) {
//   fetch(`${api}/${id}`, {
//     method: 'DELETE',
//   })
//     .then(() => console.log('Movie deleted'))
//     .catch((error) => console.log('Error:', error))
// }
// deleteMovie(4)
