const apiKey = '33d3dcf89e85d3fa501ef745f4c0ddb9'; 
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchInput = document.querySelector('input');
const addButton = document.getElementById('add');
const weatherIcon = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

addButton.addEventListener('click', async () => {
    const cityName = searchInput.value;
    if (cityName) {
        try {
            const response = await fetch(`${baseUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            tempElement.textContent = `${data.main.temp}°C`;
            cityElement.textContent = data.name;
            humidityElement.textContent = `${data.main.humidity}%`;
            windElement.textContent = `${data.wind.speed} km/h`;
        } catch (error) {
            console.error(error);
        }
    }
});
