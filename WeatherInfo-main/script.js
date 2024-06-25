const apiKey = "5fdd6b0755a0a8afa899afa99a75d62a"; // Your unique API key from OpenWeatherMap
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Base URL for the OpenWeatherMap API with query parameters for units (metric) and city name

const city = document.getElementById("city-name"); // Reference to the input field for city name
const search = document.getElementById("search-btn"); // Reference to the search button
const situationImg = document.getElementById("condition"); // Reference to the image element for displaying weather condition icon

const condition = document.getElementById("condition"); // Another reference to the condition image element (not necessary if situationImg is already defined)

// Function to fetch and display weather information based on the city name input
let weatherInfo = () => {
    // Fetch data from OpenWeatherMap API using the city name and API key
    fetch(apiUrl + city.value + `&appid=${apiKey}`)
    .then((data) => data.json()) // Convert the response to JSON format
    .then((item) => {
        // Convert UNIX timestamp for sunrise to a human-readable time format
        let rise = item.sys.sunrise; // Extract sunrise time from the response
        var rise_date = new Date(rise * 1000); // Convert the UNIX timestamp to a Date object
        var r_hours = rise_date.getHours(); // Get hours from the Date object
        var r_minutes = rise_date.getMinutes(); // Get minutes from the Date object
        if (r_minutes.toString().length == 1 || r_minutes.toString().length == 0) {
            r_minutes = "0" + r_minutes; // Add leading zero to minutes if necessary
        }
        var r_seconds = rise_date.getSeconds(); // Get seconds from the Date object
        if (r_seconds.toString().length == 1 || r_seconds.toString().length == 0) {
            r_seconds = "0" + r_seconds; // Add leading zero to seconds if necessary
        }
        var sunriseTime = r_hours + ':' + r_minutes + ":" + r_seconds; // Format the time string
        document.getElementById("rise").innerHTML = ": " + sunriseTime; // Update the DOM element with the formatted sunrise time

        // Convert UNIX timestamp for sunset to a human-readable time format
        let set = item.sys.sunset; // Extract sunset time from the response
        var set_date = new Date(set * 1000); // Convert the UNIX timestamp to a Date object
        var s_hours = set_date.getHours(); // Get hours from the Date object
        var s_minutes = set_date.getMinutes(); // Get minutes from the Date object
        if (s_minutes.toString().length == 1 || s_minutes.toString().length == 0) {
            s_minutes = "0" + s_minutes; // Add leading zero to minutes if necessary
        }
        var s_seconds = set_date.getSeconds(); // Get seconds from the Date object
        if (s_seconds.toString().length == 1 || s_seconds.toString().length == 0) {
            s_seconds = "0" + s_seconds; // Add leading zero to seconds if necessary
        }
        var sunsetTime = s_hours + ':' + s_minutes + ":" + s_seconds; // Format the time string
        document.getElementById("set").innerHTML = ": " + sunsetTime; // Update the DOM element with the formatted sunset time

        // Update DOM elements with fetched weather information
        document.querySelector(".city").innerHTML = item.name; // Update city name
        document.querySelector(".temp").innerHTML = Math.round(item.main.temp) + "°c"; // Update temperature
        document.querySelector(".humidity").innerHTML = item.main.humidity + "%"; // Update humidity
        document.querySelector(".wind").innerHTML = item.wind.speed + " km/h"; // Update wind speed
        
        // Change weather icon based on the main weather condition
        if (item.weather[0].main == 'Clouds') {
            situationImg.src = "images/clouds.png"; // Set icon for cloudy weather
        } else if (item.weather[0].main == 'Clear') {
            situationImg.src = "images/clear.png"; // Set icon for clear weather
        } else if (item.weather[0].main == 'Rain') {
            situationImg.src = "images/rain.png"; // Set icon for rainy weather
        } else if (item.weather[0].main == 'Drizzle') {
            situationImg.src = "images/drizzle.png"; // Set icon for drizzly weather
        } else if (item.weather[0].main == 'Mist') {
            situationImg.src = "images/mist.png"; // Set icon for misty weather
        }

        // Display the weather information section
        document.querySelector(".weather").style.display = "block"; // Make the weather info section visible
        document.getElementById("cond").innerHTML = ": " + item.weather[0].main; // Update the weather condition text
    });
}

// Add an event listener to the search button to trigger the weatherInfo function when clicked
search.addEventListener("click", weatherInfo); // Call the weatherInfo function when the search button is clicked
