// const fetchFriends = async () => {
// 	const token = await fetch('my-api.com/me')
// 	const user = await fetch(`my-api.com/profile?token=${token}`)
// 	const friends = await fetch(`my-api.com/users/${user.id}/friends`)
// 	return friends
// }

// fetchFriends()
// 	.then(friends => console.log(friends))
// 	.catch(error => console.error(error))

// const fetchUsers = async () => {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/users')
// 	const users = await response.json()
// 	return users
// }

// fetchUsers().then(users => console.log(users))

// // Function declaration
// async function foo() {
// 	// ...
// }

// // Functional expression
// const foo = async function () {
// 	// ...
// }

// // Arrow function
// const foo = async () => {
// 	// ...
// }

// // Object method
// const user = {
// 	async foo() {
// 		// ...
// 	},
// }

// // Class method
// class User {
// 	async foo() {
// 		// ...
// 	}
// }

// const fetchUsers = async () => {
// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/users')
// 		const users = await response.json()
// 		return users
// 	} catch (error) {
// 		console.log(error.message)
// 	}
// }

// const users = fetchUsers()

// console.log(users)

// const fetchUsers = async () => {
// 	const baseUrl = 'https://jsonplaceholder.typicode.com'
// 	const userIds = [1, 2, 3]

// 	// 1. Створюємо масив промісів
// 	const arrayOfPromises = userIds.map(async userId => {
// 		const response = await fetch(`${baseUrl}/users/${userId}`)
// 		return response.json()
// 	})

// 	// 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
// 	const users = await Promise.all(arrayOfPromises)
// 	console.log(users)
// }

// fetchUsers()
