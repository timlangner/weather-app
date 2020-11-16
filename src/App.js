import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, BASE_URL} from './apis/config'
import WeatherList from './components/WeatherList';

const App = () => {
    const {data, error, isLoading, setUrl} = UseFetch();

    // error handling and loading
    const getContent = () => {
        if (error) return <h2>Errror when fetching: {error}</h2>
        if (!data && isLoading) return <h2>LOADING...</h2>
        if (!data) return null;
        console.log(data);
        return <WeatherList weathers={data.list} />
    }

    return (
        <Container className="App">
            <CitySelector onSearch={(city) => setUrl(`${BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&units=metric&appid=${API_KEY}`)} />

            {getContent()}
        </Container>
    );
};

export default App;
