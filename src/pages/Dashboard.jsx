import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { currentDateTime } from '../utils/CurrentDateTime';
import ForecastCards from '../components/ForecastCards';
import WeatherCard from '../components/WeatherCard'

export default function Dashboard({ user, setAuth  }) {
  const [weatherData, setWeatherData] = useState(
    {
      temperature: 0,
      humidity: 0,
      windSpeed: 0,
      weatherSymbol: 0,
      Forecast: []
    }
  )

  useEffect(() => {
    fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${user.location.Long}/lat/${user.location.Lat}/data.json`)
      .then(response => response.json())
      .then(data => {
        const forecast = [];
        for (let i = 1; i <= 3; i++) {
          const item = data.timeSeries.find((item) => item.validTime.includes(currentDateTime(i).date));
          forecast.push({
            ...item,
            Day: currentDateTime(i).dayOfWeek
          });
        }

        setWeatherData({
          temperature: data.timeSeries[0].parameters[10].values[0],
          humidity: data.timeSeries[0].parameters[15].values[0],
          windSpeed: data.timeSeries[0].parameters[14].values[0],
          weatherSymbol: data.timeSeries[0].parameters[18].values[0],
          Forecast: forecast,
        });
      }).catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [user.location.Lat, user.location.Long]);



  return (
    <Container>
      <Button style={{backgroundColor: '#1d4890'}} className='fw-bold' onClick={() => setAuth(false)}>Log Out</Button>
      <WeatherCard user={user} weatherData={weatherData} />
      <ForecastCards weatherData={weatherData} />
    </Container>
  )
}
