import React from 'react';
import './ForecastCard.css';

export default function ForecastCard({forecast}) {
    //Getting datas which we will use to display from a singleData object.
    const {name, weather :[{main, description}], coord : {lon, lat}, main : {temp_min, temp_max}, sys : {country} ,id } = forecast;

    return (
        <div className='card-container' key={id}>
            <h1>{name}, {country}</h1>
            <div className="description">
                <h2>{main}</h2>
                <p>{description}</p>
            </div>
            
            <p><span>min. temp</span> <span>: {(temp_min - 273.15).toFixed(2)} &#x2103;</span></p>
            <p><span>max. temp</span> <span>: {(temp_max - 273.15).toFixed(2)} &#x2103;</span></p>
            <p><span>location</span> <span>: {lat}, {lon}</span></p>
        </div>
    )
}
