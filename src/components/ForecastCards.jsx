import React from 'react'
import { Card } from 'react-bootstrap';
import { getWeatherIcon } from '../utils/WeatherIcons';

export default function ForecastCards({ weatherData }) {

    return (
        <div className='row p-1'>
            {weatherData &&
                weatherData.Forecast.map((forecast, index) => (
                    <Card className=' col text-center text-white  forecastCards ' key={index} style={{ margin: '0.5rem' }} >
                        <Card.Title className='m-0 fs-5'>{forecast.Day}</Card.Title>
                        <Card.Body >
                            <img id='forecastIcons' className='fs-1 p-2 fw-bold' src={getWeatherIcon(forecast.parameters[18].values[0])} alt="" />
                            <Card.Text>
                                <span id='forecastCelsius' className='fs-3 p-2 fw-bold '>{forecast.parameters[1].values[0]}°C</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
        </div>
    );
}