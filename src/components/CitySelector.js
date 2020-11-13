import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import {API_KEY, BASE_URL} from '../apis/config';

const CitySelector = () => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);

    const onSearch = () => {
        fetch(`${BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((result) => setResults(result));
    };

    const onKeyDown = (event) => {
        // key code 13 = Enter key
        if (event.keyCode === 13) {
            onSearch();
        }
    };

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
                        onKeyDown={onKeyDown}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button onClick={onSearch}>Check Weather</Button>
                </Col>
            </Row>
        </>
    );
};

export default CitySelector;
