const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '6b0ddc85d3mshcee9ce9c7645cc2p19edc3jsn43a37bbaf8ea',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};
let option = { year: 'numeric', month: 'long', day: 'numeric' };
async function getWeather(city) {
    try {
        const response = await fetch(url + city, options);
        const result = await response.json();
        console.log(result);
        cityName.innerHTML = result.name;
        country.innerHTML = result.sys.country;
        date.innerHTML = (new Date(result.dt * 1000)).toLocaleDateString('en-GB', option);
        temp.innerHTML = Math.round(result.main.temp - 273.15);
        humidity.innerHTML = result.main.humidity;
        weather.innerHTML = result.weather[0].description;
        hi.innerHTML = Math.round(result.main.temp_max - 273.15);
        low.innerHTML = Math.round(result.main.temp_min - 273.15);
    } catch (error) {
        console.error(error);
    }
}

getWeather("jaipur");

submit.addEventListener("click", () => {
    getWeather(search.value);
});
search.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        getWeather(search.value);
    }
});