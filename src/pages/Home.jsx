import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Weatherdisplay from "../components/Weather";
const Home=()=>{
    const [weatherData , setWeatherData] = useState(null);

const fetchWeather= async(city)=>{
const apiKey = 'c3281df2bc5b1f49fe3bc5246cc9f3e1';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try{
     const response = await fetch(url);
     const  data = await response.json();
 setWeatherData(data);
} 
catch(error) {
 setWeatherData(null);
}
 }

 return(
<div className="home">
    <SearchBar onSearch={fetchWeather} />
    <Weatherdisplay weatherData={weatherData} />
</div>
    );
};
export default Home;