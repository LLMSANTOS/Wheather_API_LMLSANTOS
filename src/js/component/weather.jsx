import React, {useEffect, useState} from "react";

const Weather = () => {

// set the variables
const [temperature, setTemperature] = useState(" ");
const [windSpeed, setWindSpeed] = useState(" ");
const [description, setDescription] = useState(" ");
const [city, setCity] = useState (" ");

useEffect (() => {
    getCityWeatherFromApi();
    
},[]);

// function to retrive weather data
const getCityWeatherFromApi = () => {

    fetch("https://goweather.herokuapp.com/weather/" + city)
    .then(response => {
        if (!response.ok) {
           throw Error(response.statusText);
        }
        // Read the response as json.
         return response.json();
    })
    .then(responseAsJson => {
        // Checking inside the API
        console.log("Temperature",responseAsJson.temperature);
        setTemperature(responseAsJson.temperature);
        console.log("Wind Speed",responseAsJson.wind);
        setWindSpeed(responseAsJson.wind);
        console.log("Description",responseAsJson.description);
        setDescription(responseAsJson.description);
    })
    .catch(error => {
        console.log('There is a problem: \n', error);
    });
}

    return (
        <div className="container">
            <div>
                <input 
                    defaultValue={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="insert a city..."            
                />     
            </div>
            
            <p>{city}</p>
            <div className="weatherData">
                <div className="temp">Temperature: {temperature}</div>
                <div ClassName="wind">Wind Speed: {windSpeed}</div>
                <div className="description">Description: {description}</div>
            </div>
            

            <div>
                <button className="btn" type="submit" onClick={()=> {
                    if(city === " "){
                        alert ("Please insert a city!...")
                    } else 
                        getCityWeatherFromApi();
                    
                    }}>Get City Data
                </button>
            </div>
        </div>
    );
}

export default Weather;
