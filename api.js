<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
</head>
<body>
    <h1>Weather Information</h1>
    <!-- Input field to enter city name -->
    <input type="text" id="city-name" placeholder="Enter city name">
    <!-- Button to trigger weather search -->
    <button id="search-btn">Search</button>

    <!-- Div to display weather information, initially hidden -->
    <div class="weather" style="display: none;">
        <p class="city"></p>
        <p class="temp"></p>
        <p class="condition"></p>
    </div>

    <script>
        // Your unique API key from OpenWeatherMap
        const apiKey = "5fdd6b0755a0a8afa899afa99a75d62a"; // Replace with your OpenWeatherMap API key
        // Base URL for the OpenWeatherMap API with query parameters for units (metric) and city name
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        // Get references to the input field, search button, and weather display div
        const cityInput = document.getElementById("city-name");
        const searchBtn = document.getElementById("search-btn");
        const weatherDiv = document.querySelector(".weather");

        // Function to fetch and display weather information
        let fetchWeather = () => {
            const cityName = cityInput.value; // Get the city name from the input field
            // Fetch data from OpenWeatherMap API using the city name and API key
            fetch(apiUrl + cityName + `&appid=${apiKey}`)
                .then(response => response.json()) // Convert the response to JSON format
                .then(data => {
                    console.log(data); // Log the full response for debugging
                    
                    // Extract and display weather information
                    document.querySelector(".city").textContent = "City: " + data.name;
                    document.querySelector(".temp").textContent = "Temperature: " + Math.round(data.main.temp) + "°C";
                    document.querySelector(".condition").textContent = "Condition: " + data.weather[0].main;

                    weatherDiv.style.display = "block"; // Show the weather information
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                });
        }

        // Add an event listener to the search button to trigger the fetchWeather function when clicked
        searchBtn.addEventListener("click", fetchWeather);
    </script>
</body>
</html>
