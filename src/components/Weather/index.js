import React, { useEffect, useState } from "react";
import { getWeather } from "../../api";
import styles from './styles.module.css';
import search from '../../assets/search.png';
import Icons from "../../utils/icons";

function Weather() {
    const [city, setCity] = useState('chennai');
    const [weatherDetails, setWeatherDetails] = useState(false);


    useEffect(() => {
        getWeatherDetails(city)
    }, []);

    async function getWeatherDetails(city) {
        if (!city) {
            alert('Please enter the city name');
        } else {
            try {
                const res = await getWeather(city);
                if (res) {
                    setWeatherDetails({
                        location: res.name,
                        coord: res.coord,
                        humidity: res?.main?.humidity,
                        temp: res?.main?.temp,
                        wind: res?.wind,
                        iconType: res?.weather?.[0]?.icon
                    })
                }
            } catch (error) {
                alert('Invalid City');
            }
        }

    }



    return <div className={styles.weather_widget_container}>
        <h3 className={styles.header}>Weather Widget</h3>
        <div className={styles.search_container}>
            <input type="input" value={city} placeholder="Search City" className={styles.weather_input} onChange={(e) => setCity(e.target.value)} /> <button type="button" className={styles.search_button} onClick={() => getWeatherDetails(city)}><img src={search} className={styles.search_icon} /></button>
        </div>
        <div className={styles.img_container}>
            <h4 style={{ color: "#3f6377" }}>{weatherDetails?.location}</h4>
            <img src={Icons(weatherDetails.iconType)} className={styles.weather_image} />
        </div>
        <div className={styles.details}>
            <div>
                <div>Temp: {weatherDetails?.temp}<sup>o</sup>C</div>
                <div>WS: {weatherDetails?.wind?.speed} Km/h</div>
            </div>
            <div>
                <div>Hum: {weatherDetails?.humidity}%</div>
            </div>
        </div>

    </div>;
}

export default Weather;
