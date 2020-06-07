import React, {useState, useEffect} from 'react'
import apiConfig from '../apiKeys'
import DailyCard from './DailyCard'

const WeatherDisplay = () => {

    const [completeData, setCompleteData] = useState([])

    let [dailyData, setDailyData] = useState([])

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
            reading = {reading}
            key = {index}

        />)
    }
   


    return (
        <div>
            {renderDailyCard()}
        </div>
    )

}

export default WeatherDisplay;
