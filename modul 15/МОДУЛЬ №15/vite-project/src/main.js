// додаткові
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
// fetch(apiUrl).then(response => response.json()).then(data => console.log(`Success:`, data))
// const apiUrl = 'https://api.github.com/users'
// fetch(apiUrl).then(response => response.json()).then(information => console.log(`Some information:`, information))
// const apiUrl = 'https://restcountries.com/v3.1/all'
// fetch(apiUrl).then(response => response.json()).then(data => console.log(data))
//3. Творчі завдання
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=`kyiv`&appid=`0bc02751d07d238273aa9f357d139606`'
// fetch(apiUrl).then(response => response.json()).then(data => console.log(data))
// // 0bc02751d07d238273aa9f357d139606
// // 4.Суперворчі завдання
// const apiUrl = ' http://www.omdbapi.com/?apikey={API_KEY}&t={movie_title}'
// fetch(apiUrl).then(response => response.json()).then(data => console.log(data))
// додаткове
// Отримати дані про фільм за допомогою OMDB API Опис:
// Використайте публічне API OMDB для отримання даних про фільм.
// Зробіть GET - запит за адресою
// , де {API_KEY} -
//  ваш ключ API OMDB, а {movie_title} -
//  назва фільму. Перегляньте отримані дані щодо фільму.
const apiUrl = 'http://www.omdbapi.com/?apikey=414f8709&';
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
