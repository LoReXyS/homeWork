// Fetch studnets
// const fetchStudents = async () => {
//   const api = 'http://localhost:3000/students'
//   const response = await fetch(api)
//   const users = await response.json()
//   return users
// }
// fetchStudents().then(users => console.log(users))
// id
// const fetchStudentsId = async (id) => {
//   const api = `http://localhost:3000/students/${id}`
//   const response = await fetch(api)
//   const user = await response.json()
//   return user
// }
// fetchStudentsId(1).then(user => console.log(user))
//post method
// const api = 'http://localhost:3000/students'

// const postToAddStudent = {
//   'id': 4,
//   'name': 'Alice Brown',
//   'age': 22,
//   'email': 'aliceBrown48@gmail.com',
//   'phone': '555-3456'
// }
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(postToAddStudent)
// }
// const addStudent = async () => {
//   const response = await fetch(api, options)
//   const newStudent = await response.json()
//   return newStudent
// }
// addStudent().then(newStudent => console.log(newStudent))
// fetch(api).then(res => res.json()).then(students => console.log(students))
// update ids
// const api = 'http://localhost:3000/students'
// const postUpdated = {
//   id: 4,
//   name: 'Jane Smith',
//   age: 26,
//   email: 'janeSmith26@gmail.com'
// }
// const options = {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(postUpdated)
// }
// const updateStudent = async () => {
//   const response = await fetch(`${api}/${postUpdated.id}`, options)
//   const updatedStudent = await response.json()
//   return updatedStudent
// }
// updateStudent().then(updatedStudent => console.log(updatedStudent))
// Творчі завдання
// delete
// const api = 'http://localhost:3000/students'
// const idToDelete = 4
// const options = {
//   method: 'DELETE'
// }
// const deleteStudent = async () => {
//   const response = await fetch(`${api}/${idToDelete}`, options)
//   return response.status
// }
// deleteStudent().then(status => console.log(status))
// get
// const api = 'http://localhost:3000/students'
// const getStudentsByAge = 21
// const fetchStudentsByAge = async () => {
//   const response = await fetch(`${api}/${getStudentsByAge}`)
//   const students = await response.json()
//   return students
// }
// fetchStudentsByAge().then(students => console.log(students))
// get
// const api = 'http://localhost:3000/students'
// const getStudentsByName = 'Jane Smith'
// const fetchStudentsByName = async () => {
//   const response = await fetch(`${api}/${getStudentsByName}`)
//   const students = await response.json()
//   return students
// }
// fetchStudentsByName().then(students => console.log(students))
// get email
// const api = 'http://localhost:3000/students'
// const getStudentsByEmail = 'jane.smith@example.com'
// const fetchStudentsByEmail = async () => {
//   const response = await fetch(`${api}?email=${getStudentsByEmail}`)
//   const students = await response.json()
//   return students
// }
// fetchStudentsByEmail().then(students => console.log(students))
//get
// const api = 'http://localhost:3000/students'
// const phoneToSearch = '555-1234'
// const fetchStudentsByPhone = async () => {
//   const response = await fetch(`${api}?phone=${phoneToSearch}`)
//   const students = await response.json()
//   return students
// }
// fetchStudentsByPhone().then(students => console.log(students))
// console.log('for tests');
// Суперворчі завдання
// const first20 =
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//       const first20 = posts.slice(0, 20);
//       console.log(first20);
//     });
// const first40 =
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//       const first40 = posts.slice(20, 40);
//       console.log(first40);
//     });
// const first60 =
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//       const first60 = posts.slice(40, 60);
//       console.log(first60);
//     });
// const first80 =
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//       const first80 = posts.slice(60, 80);
//       console.log(first80);
//     });
// const first100 =
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//       const first100 = posts.slice(80, 100);
//       console.log(first100);
//     });
