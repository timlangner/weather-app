import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, BASE_URL} from './apis/config'
import WeatherList from './components/WeatherList';

const App = () => {
    const {data, error, isLoading, setUrl} = UseFetch();
    console.log(data);

    return (
        <Container className="App">
            <CitySelector onSearch={(city) => setUrl(`${BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />

            {data && <WeatherList weathers={data.list} />}
        </Container>
    );
};

export default App;
