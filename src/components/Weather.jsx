const Weatherdisplay =({weatherData})=>{

    if (!weatherData) {
    return <div className="weather">no weather data available</div>;
}
    
    const {main, name , weather} = weatherData;
    return (
        <div className="weatherview">
            <h1>Weather in {name} </h1>
            <p className="temperature">Temperature:{Math.round(main.temp)}&#9451;</p>
            <p className="condition">Condition:{weather[0].description} </p>
            <p className="humidity">Humidity:{main.humidity}%</p>
        </div>
    );
};
export default Weatherdisplay;