import Handlebars, { log } from 'handlebars'

// const source = document.getElementById('entry-template').innerHTML
// const template = Handlebars.compile(source)

// const context = {
// 	title: 'My New Post',
// 	body: 'This is my first post!',
// }

// const html = template(context)
// document.getElementById('app').innerHTML = html

// const postList = [
// 	{ title: 'Post 1', description: 'Description of Post 1' },
// 	{ title: 'Post 2', description: 'Description of Post 2' },
// 	{ title: 'Post 3', description: 'Description of Post 3' },
// ]

// const context = {
// 	posts: postList.map(post => ({
// 		title: post.title,
// 		description: post.description,
// 	})),
// }

// const source = document.getElementById('posts-template').innerHTML
// const template = Handlebars.compile(source)

// const html = template(context)
// document.getElementById('app').innerHTML = html

// const dog = [
// 	{
// 		name: 'Mango',
// 		age: 3,
// 		isHappy: true,
// 	},
// 	{
// 		name: 'Mango',
// 		age: 3,
// 		isHappy: true,
// 	},
// ]

// const dogJSON = JSON.stringify(dog)
// console.log(dogJSON) // {"name":"Mango","age":3,"isHappy":true}
// console.log(typeof dogJSON)

// const parseJSON = JSON.parse(dogJSON)

// console.log(parseJSON)
// console.log(typeof parseJSON)

// const output = document.querySelector('#js-output')
// const input = document.querySelector('#js-input')
// const inputKey = document.querySelector('#js-key')
// const btn = document.querySelector('#js-btn')

// const updateView = () => {
// 	output.textContent = localStorage.getItem(inputKey.value) || ''
// }

// const handleClick = () => {
// 	localStorage.setItem(inputKey.value, input.value)
// 	updateView()
// 	input.value = ''
// 	inputKey.value = ''
// }

// updateView()

// btn.addEventListener('click', handleClick)

// const settings = {
// 	theme: 'dark',
// 	isAuthenticated: true,
// 	options: [1, 2, 3],
// }
// localStorage.setItem('settings', JSON.stringify(settings))

// const savedSettings = localStorage.getItem('settings')
// const parsedSettings = JSON.parse(savedSettings)

// console.log(savedSettings)

// console.log(parsedSettings)
// localStorage.removeItem('goit-js-module-12')
// localStorage.clear()

// const load = key => {
// 	try {
// 		const serializedState = localStorage.getItem(key)
// 		console.log(serializedState)

// 		return serializedState === null ? undefined : JSON.parse(serializedState)
// 	} catch (err) {
// 		console.error('Get state error: ', err)
// 	}
// }

// Приймає ключ `key` і значення `value`.
// const save = (key, value) => {
// 	try {
// 		const serializedState = JSON.stringify(value)
// 		localStorage.setItem(key, serializedState)
// 	} catch (err) {
// 		console.error('Set state error: ', err)
// 	}
// }

// save()
// load('Name')
// localStorage.clear()

const age = document.querySelector('.ageInpt')
const name = document.querySelector('.nameInpt')
const button = document.querySelector('.button')
const list = []
button.addEventListener('click', e => {
	e.preventDefault()
	const getValueAge = age.value
	const getValueName = name.value
	const person = { name: getValueAge, age: getValueName }
	list.push(person)
	console.log(list)
	age.value = ''
	name.value = ''
	localStorage.setItem('list', JSON.stringify(list))
})
