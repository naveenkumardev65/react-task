
import axios from 'axios';

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=e6050cb2943db69209997980d9ec1a3f`;
const NEWS_FEED_API_URL = `https://newsapi.org/v2/everything?apiKey=fdfff2d8a21145f28cf4f8ad82ed344b`;


async function getWeather(city) {
    return await axios.get(`${WEATHER_API_URL}&q=${city}`).then(res => res.data).catch(err => Promise.reject(err))
}

async function newsFeed(keyword) {
    return await axios.get(`${NEWS_FEED_API_URL}&q=${keyword}`).then(res => res.data).catch(err => Promise.reject(err))
}


export {
    getWeather,
    newsFeed
}