import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import {API_KEY, BASE_URL} from '../apis/config';

const CitySelector = ({ onSearch }) => {
    const [city, setCity] = useState('');

    return (
        <>
            <Row>
                <Col>
                    <h1>Search your city</h1>
                </Col>
            </Row>

            <Row>
                {/* xs={4} takes the one third  of the page*/}
                <Col xs={4} className="text-center">
                    <FormControl
                        placeholder="Enter city"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button onClick={() => onSearch(city)}>Check Weather</Button>
                </Col>
            </Row>
        </>
    );
};

export default CitySelector;
