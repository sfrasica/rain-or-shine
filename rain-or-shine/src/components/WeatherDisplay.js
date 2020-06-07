import React, {useState, useEffect} from 'react'
import apiConfig from '../apiKeys'

const WeatherDisplay = () => {



    useEffect(() => {
        const weatherURL =`http://api.openweathermap.org/data/2.5/weather?zip=10002,us&appid=${apiConfig.weatherKey}`

        fetch(weatherURL)
        .then(res => res.json())
        .then(data => console.log("Data List Loaded", data.main))
    }
    )
   


    return (
        <div>
           <h1>I will display the weather</h1>
        </div>
    )

}

export default WeatherDisplay;
