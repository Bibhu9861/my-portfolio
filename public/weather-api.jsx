import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

let cityContext = createContext(null);

export function WeatherWidget(){

    let cityName = useContext(cityContext);

    const [weatherObj, setWeatherObj] = useState({main:{temp:0}, weather:[{description:''}], wind:{speed:0}});


    useEffect(()=>{

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1318ca6725c69160d346c41fc0612596&units=metric`)
        .then(response=> {
            setWeatherObj(response.data);
        })

    },[cityName])

     return(
        <div>
            <h3>{weatherObj.name}</h3>
            <dl>
                <dt>Temp</dt>
                <dd>{weatherObj.main.temp} &deg; C </dd>
                <dt className="bi bi-cloud"> Description</dt>
                <dd>{weatherObj.weather[0].description}</dd>
                <dt className="bi bi-water"> Wind Speed </dt>
                <dd>{weatherObj.wind.speed.toLocaleString('en-in',{style:"unit", unit:"kilometer-per-hour"})}</dd>
            </dl>
        </div>
     )
}


export function WeatherAPI(){

    const [searchText, setSearchText] = useState();
    const [contextValue, setContextValue] = useState('Hyderabad');

    function handleTextChange(e){
        setSearchText(e.target.value);
    }

    function handleSearchClick(){
        setContextValue(searchText);
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="p-4 border border-1 w-50">
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} placeholder="Enter City Name" className="form-control" />
                    <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                </div>
                <div className="mt-4">
                    <cityContext.Provider value={contextValue}>
                        <WeatherWidget />
                    </cityContext.Provider>
                </div>
            </div>
        </div>
    )
}