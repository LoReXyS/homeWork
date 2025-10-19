// POST
// const postToAdd = {
// 	author: 'Mango',
// 	body: 'CRUD is awesome',
// }

// const options = {
// 	method: 'POST',
// 	body: JSON.stringify(postToAdd),
// 	headers: {
// 		'Content-Type': 'application/json; charset=UTF-8',
// 	},
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
// 	.then(response => response.json())
// 	.then(post => console.log(post))
// 	.catch(error => console.log(error))

// GET
// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then(response => response.json())
// 	.then(posts => console.log(posts))
// 	.catch(error => console.log(error))

// PUT and PATCH

// const postToUpdate = {
// 	id: 1,
// 	body: 'CRUD is really awesome',
// }

// const options = {
// 	method: 'PATCH',
// 	body: JSON.stringify(postToUpdate),
// 	headers: {
// 		'Content-Type': 'application/json; charset=UTF-8',
// 	},
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
// 	.then(response => response.json())
// 	.then(post => console.log(post))
// 	.catch(error => console.log('ERROR' + error))

// DELETE

// const postIdToDelete = 1

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
// 	method: 'DELETE',
// })
// 	.then(() => console.log('Post deleted'))
// 	.catch(error => console.log('Error:', error))
