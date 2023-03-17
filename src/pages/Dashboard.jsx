import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import WeatherCard from '../components/WeatherCard'

export default function Dashboard({ user }) {
    const [weatherData, setWeatherData] = useState(
        {
            temperature: 0,
            humidity: 0,
            windSpeed: 0,
            weatherSymbol: 0,
        }
    )

    useEffect(() => {
        fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${user.location.Long}/lat/${user.location.Lat}/data.json`)
            .then(response => response.json())
            .then(data =>  console.log(data)+setWeatherData({

                temperature: data.timeSeries[0].parameters[10].values[0],
                humidity: data.timeSeries[0].parameters[15].values[0],
                windSpeed: data.timeSeries[0].parameters[14].values[0],
                weatherSymbol: data.timeSeries[0].parameters[18].values[0]
            }))
            
    }, [])
    
    if (!weatherData) {
        return <Spinner animation="border" />;
    }

    return (
        <Container>
            <WeatherCard user={user} weatherData={weatherData} />
        </Container>
    )
}
