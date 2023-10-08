import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import LocationInput from './LocationInput';
import './App.css'; // Import the CSS file


function App() {
  const [weatherData, setWeatherData] = useState<any>(null);


const fetchWeatherData = async (location: string) => {
  try {
    // Make an API request to fetch weather data based on the location input
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=15127a9d8630424499d35751232909&q=${location}`);
    const data = await response.json();

    if (response.ok) {
      // If the response status is OK (200), set the weather data
      setWeatherData(data);
    } else {
      // If the response status is not OK, handle the error
      if (data.error && data.error.message === "No matching location found.") {
        // Handle the case when no matching location is found
        setWeatherData(null); // Clear the weather data
        alert("Location not found. Please enter a valid location.");
      } else {
        // Handle other error cases
        console.error('Error fetching weather data:', data.error.message);
        alert('An error occurred while fetching weather data.');
      }
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('An error occurred while fetching weather data.');
  }
};


return (
  <div className="App">
    <div className="container">
      <h1>My Weather App</h1>
      <LocationInput onSubmit={fetchWeatherData} />
      {weatherData ? (
        <div className="weather-card">
          <WeatherCard location={weatherData.location} current={weatherData.current} />
        </div>
      ) : (
        <p>No weather data available. Enter a location and click "Get Weather."</p>
      )}
    </div>
  </div>
);

}

export default App;