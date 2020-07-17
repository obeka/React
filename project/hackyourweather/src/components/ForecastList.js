import React from 'react';
import ForecastCard from './ForecastCard';
import './ForecastList.css'

export default function ForecastList({forecastData}) {
    
    return (
        <div className='container'>
            {forecastData.map(forecast => <ForecastCard  singleData={forecast}/>)}   
        </div>
    )
}
