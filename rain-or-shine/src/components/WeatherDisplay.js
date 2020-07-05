import React, {useState, useEffect} from 'react'
import apiConfig from '../apiKeys'
import DailyCard from './DailyCard'
import DegreeToggle from './DegreeToggle'

const WeatherDisplay = () => {

    const [completeData, setCompleteData] = useState([])

    let [dailyData, setDailyData] = useState([])

    const [degreeType, setDegreeType] = useState('fahrenheit')

    useEffect(() => {
        const weatherURL =`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.weatherKey}`
    
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
            let dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
            setDailyData(dailyData)
      
        })
    }
    )

    const renderDailyCard = () => {
        return dailyData.map((reading, index) => 
        <DailyCard
            degreeType = {degreeType}
            reading = {reading}
            key = {index}

        />)
    }

    const updateDegreeType = () => {
        setDegreeType(degreeType)
    }   


    return (
        <div>
             <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast</h1>
      <h5 className="display-5 text-muted">New York, US</h5>
        <div className="row justify-content-center"></div>
            <DegreeToggle 
                updateDegreeType = {updateDegreeType}
            />
            {renderDailyCard()}
        </div>
        </div>
    )

}

export default WeatherDisplay;
