import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import sunny from '../assets/Sunny.webp';
import Clock from './Clock';
import MostlySunnyDay from '../assets/MostlySunnyDay.svg';
export default function WeatherCard({ user }) {

  const [weatherData, setWeatherData] = useState()

  // const temp = weatherData.value[0].value
  // ${user.city}
  useEffect(() => {
    fetch(`https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/97400/period/latest-hour/data.json`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
  }, [])

  if (!weatherData) {
    return <Spinner animation="border" />;
    ;
  }
  return (
    <Card className="bg-dark text-white" >
      <Card.Img src={sunny} alt="Card image" />
      <Card.ImgOverlay>
        <h2 className='fs-5 m-0'>Vädret just nu</h2>
        <Clock />
        <Card.Title>{weatherData.station?.name}</Card.Title>
        <Card.Text>
          <div className='fs-1 fw-bold'><img src={MostlySunnyDay} alt="" />{weatherData.value[0].value}°C</div>
        </Card.Text>
        <Card.Text>Det blir en bra dag idag, så ta och njut.</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

