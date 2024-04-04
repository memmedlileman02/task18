// https://fakestoreapi.com/
// https://openweathermap.org/current#name

// JSON

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 10);
// console.log(3);

// let res = fetch("./data.json");

// console.log(data);

// const getData = async () => {
// let res = await fetch("./data.json");
// let data = await res.json();
// console.log(data.name);
// };
// getData();

// fetch("./data.json").then((res) =>
//   res.json().then((data) => {
//     console.log(data.name);
//   })
// );

// GET
// POST
// PUT
// PATCH
// DELETE

// fetch("https://fakestoreapi.com/products").then((res) =>
//   res.json().then((data) => {
//     data.map((product) => console.log(`${product.title} || ${product.price}`))
//   })
// );

// let city = prompt("City name: ");
// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c68d682d2c17bc75b8cb5d892598e11&units=metric&lang=az`
// ).then((res) =>
//   res.json().then((data) => {
//     console.log(data);
//     console.log(
//       `${city} Tempraturu: ${data.main.temp} °C ${data.weather[0].description}`
//     );
//   })
// );


// fetch("https://api.themoviedb.org/3/movie/550?api_key=5e57e9eddcfed717ee77e7abbf191148").then((res) =>
fetch("https://api.themoviedb.org/3/movie/popular?api_key=5e57e9eddcfed717ee77e7abbf191148").then((res) =>
    res.json().then((data) => {
        // console.log(data);
        data.results.map((movie) => console.log(`${movie.title} `))
    })
);