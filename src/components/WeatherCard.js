import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    // create a date object with Date class constructor
    const date = new Date(dt);
    return (
        <Card>
            <Card.Img
                variant="top"
                // get the src from example url and pass the icon prop for icon code
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                {/* turning datetime into local datetime */}
                <p>
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                <p>Min: {temp_min} °C</p>
                <p>Max: {temp_max} °C</p>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;
