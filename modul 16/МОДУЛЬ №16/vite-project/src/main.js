// //додатквові

// //Творчі завдання
// // 1
// const btn = document.querySelector('.btn');
// const div = document.querySelector('.div');
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "title",
// });


// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const urlWithParams = `${apiUrl}?${searchParams.toString()}`;
//     fetch(urlWithParams)
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json)
//             json.forEach(element => {
//                 div.innerHTML += `<p>${element.title}</p>`;
//             });
//         });
// });
// .Суперворчі завдання
// 1
// const btn = document.querySelector('.btn');
// const input = document.querySelector('.input');
// const key = '3A97965E3A8F42685514CDE3FED149A2'
// const searchParams = new URLSearchParams({
//   apiKey: key,
//   // https://developer.marvel.com/documentation/authorization
//   // https://medium.com/@antwoinegriggs.30/how-to-obtain-a-marvel-api-key-b257ade4deb6
// });
// const apiUrl = `// https://gateway.marvel.com/docs/public/${searchParams}`



// const publicKey = '3A97965E3A8F42685514CDE3FED149A2';
// const privateKey = 'E922BDE5B4519808D8694C733495119A50683CB4';
// const apiBaseURL = "https://gateway.marvel.com/v1/public";

// // Creates a URL for searching Marvel API for comics with titles starting with a given search term
// function createURL() {
//   // Get the current timestamp
//   const ts = Date.now();

//   // Create a new URLSearchParams object and set the necessary query parameters
//   const params = new URLSearchParams({
//     ts: ts,
//     apikey: publicKey,
//     hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
//   });
//   // Construct the endpoint URL for searching comics with the query parameters
//   const endpoint = `${apiBaseURL}/characters?`; // Notice the question mark to start the query parameters.

//   // Combine the endpoint URL with the query parameters to form the complete API request URL
//   const url = endpoint + params;

//   // Return the complete API request URL

//   return url;
// }
// console.log(createURL());
// const url = createURL()
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the API response here
//     console.log(data)
//   })
//   .catch(error => {
//     // Handle any errors that occur during the API request
//     console.error(error)
//   })
// btn.addEventListener('click', (e) => {
//   e.preventDefault();

//   fetch(apiUrl).then((response) => response.json()).then((json) => {
//     console.log(json)
//   });
//   console.log(apiUrl);

// });
// const publicKey = '3A97965E3A8F42685514CDE3FED149A2';
// const privateKey = 'E922BDE5B4519808D8694C733495119A50683CB4';
// const apiBaseURL = "https://gateway.marvel.com/v1/public";

// function createURL() {
//   const ts = Date.now().toString();
//   const hash = md5(ts + privateKey + publicKey);

//   const params = new URLSearchParams({
//     ts,
//     apikey: publicKey,
//     hash
//   });

//   return `${apiBaseURL}/characters?${params}`;
// }

// const url = createURL();
// console.log(url);

// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))

// const apiUrl = 'https://default-application_10974019';
// const key = '504520602dmsh73c7b60499ac7c7p1c3862jsn5f95897bba2a'
// fetch(apiUrl).then((response) => response.json()).then((json) => {
//   console.log(json)
// });
// const key = '3b5af184'
// const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=3b5af184'
// fetch(api).then((response) => response.json()).then((json) => {
//   console.log(json)
// });



const btn = document.querySelector('.btn');
const apiUrl = 'https://imdb.iamidiotareyoutoo.com/search?q=Spiderman';


// const searchParams = new URLSearchParams({
//     _limit: 5,
//     // _sort: "title",
// });
fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => { console.log(json) });
