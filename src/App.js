import './App.css';
import React,{useState} from 'react';
import axios from 'axios'

function App() {
   
  const [data,setData]=useState({})
  const [location,setlocation]=useState('')


  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=afff540ba535de2bc2a0bbb88f8ec89b`

  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((Response)=>{
           setData(Response.data)
           console.log(Response.data)
      })
      setlocation('')
    }

  }
  return (
    <div className="App">
           <input placeholder='Enter City Name' className='location' value={location} onChange={event =>setlocation(event.target.value)} onKeyPress={searchLocation}/>
           <p className='data'>{data.name}</p>
           {data.main ? <h2 className='data'>{(data.main.temp - 273.15).toFixed(2)}ºC</h2>:null}  
    </div>
  );
}

export default App;
