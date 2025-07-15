import React from "react";
import "./weather.scss";
import clouds from "../assets/cloudy.png";
import searchImg from "../assets/search.png";
import humidi from "../assets/humidity.png";
import wind from "../assets/wind.png";
import { useEffect, useState ,useRef } from 'react'




const Weather = () => {
const inputValue = useRef();

    const [weatherData, setWeatherData] = useState(false);
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
            const response = await fetch(url);
            const responseData = await response.json();
            console.log(responseData);
            setWeatherData({

                humidity: responseData.main.humidity,
                wind: responseData.wind.speed,
                temperature: Math.floor(responseData.main.temp),
                city: responseData.name
            }
            )

        } catch (err) {

            alert(err);

        }
    }
    useEffect(() => {
        search(" ");
    },
        []

    );


    return (

        <div className="weather-box">
            <div className="weather-box__search-box">
                <input ref={inputValue} type ="text" placeholder="search" />
                <img src={searchImg} alt=""  onClick={()=>search(inputValue.current.value)}/>

            </div>
            <div className="weather-box__data">
                <img src={clouds} />
                <p className="temp">{weatherData.temperature} °C</p>
                <p className="location">{weatherData.city}</p>
                <div className="weather-box__data__details">
                    <div className="weather-box__data__details__humidity">
                        <img src={humidi}  />
                        <p >{weatherData.humidity} %</p>
                        <span>Humidity</span>
                    </div>

                    <div className="weather-box__data__details__wind">
                        <img src={wind} />
                        <p >{weatherData.wind} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default Weather;
