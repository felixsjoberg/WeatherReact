import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ForecastCards from '../components/ForecastCards';
import WeatherCard from '../components/WeatherCard'

import sunny from '../assets/Sunny.svg';
import cloudy from '../assets/Cloudy.svg';
import rainy from '../assets/Rainy.svg';
import snowy from '../assets/Snowy.svg';
import mostlySunny from '../assets/MostlySunny.svg';
export default function Dashboard({ user }) {
    const [weatherData, setWeatherData] = useState(
        {
            temperature: 0,
            humidity: 0,
            windSpeed: 0,
            weatherSymbol: 0,
            Forecast: []
        }
    )

    // function that returns the correct weather icon based on the weather symbol.
    // The weather symbol is a number between 1-27, and each number represents a different weather.
    // If no parameter is given, todays weather symbol will be used.
    function weatherIcon(weatherSymbol) {
        const symbol = weatherSymbol ? weatherSymbol : weatherData.weatherSymbol;
        if (symbol >= 1 && symbol <= 4) {
            return sunny;
        } else if (symbol >= 5 && symbol <= 7) {
            return mostlySunny;
        } else if ((symbol >= 8 && symbol <= 14) || (symbol >= 18 && symbol <= 20)) {
            return rainy;
        } else if (symbol >= 14 && symbol <= 19) {
            return cloudy;
        }
        else if (symbol >= 21 && symbol <= 27) {
            return snowy;
        }
    }

    // function that shows current date, with a parameter where you can add days to the date.
    // The parameter will be used to get date for the next 3 days, so I can use that in my forecast.
    function currentDateTime(futureDays = 0) {
        // Get current or future date
        const today = new Date();
        const date = new Date(today);
        date.setDate(today.getDate() + futureDays);

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeekName = daysOfWeek[date.getDay()];

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate() + futureDays;


        return { date: `${year}-0${month}-${day}T12`, dayOfWeek: dayOfWeekName };
    }

    useEffect(() => {
        fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${user.location.Long}/lat/${user.location.Lat}/data.json`)
            .then(response => response.json())
            .then(data => {
                const forecast = data.timeSeries.filter((item) => {
                    const date = item.validTime;
                    return date.includes(currentDateTime(1).date)
                        || date.includes(currentDateTime(2).date)
                        || date.includes(currentDateTime(3).date);
                }).map((item, index) => {
                    return {
                        ...item,
                        Day: currentDateTime(index + 1).dayOfWeek
                    }
                });

                setWeatherData({
                    temperature: data.timeSeries[0].parameters[10].values[0],
                    humidity: data.timeSeries[0].parameters[15].values[0],
                    windSpeed: data.timeSeries[0].parameters[14].values[0],
                    weatherSymbol: data.timeSeries[0].parameters[18].values[0],
                    Forecast: forecast
                });
            });
    }, []);

    return (
        <Container>
            <WeatherCard user={user} weatherData={weatherData} weatherIcon={weatherIcon} />
            <ForecastCards weatherData={weatherData} weatherIcon={weatherIcon} />
        </Container>
    )
}
