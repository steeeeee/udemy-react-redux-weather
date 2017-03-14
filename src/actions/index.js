import axios from 'axios';

const API_KEY = '4da3cb50c656508a5ff29e3bea876246';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},it`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}