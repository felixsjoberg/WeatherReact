import React from 'react'
import WeatherCard from '../components/WeatherCard'

export default function Dashboard({user}) {
    return (
        <div>
            <WeatherCard user={user}/>
        </div>
    )
}
