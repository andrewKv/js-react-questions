import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayCountry from './DisplayCountry';
import DisplayIP from './DisplayIP';
import SortArrays from './SortArrays'
import Axios from "axios";

export type countryAndIP = {
    ip: string,
    network: string,
    version: string,
    city: string,
    region: string,
    regioncode: string,
    country: string,
    countryname: string,
    countrycode: string,
    countrycode_iso3: string,
    countrycapital: string,
    countrytld: string,
    continentcode: string,
    ineu: boolean,
    postal: string,
    latitude: number,
    longitude: number,
    timezone: string,
    utcoffset: string,
    countrycalling_code: string,
    currency: string,
    currencyname: string,
    languages: string,
    countryarea: number,
    countrypopulation: number,
    asn: string,
    org: string
}

function App() {
  const [task1Visible, setTask1Visible] = useState<boolean>(true); 
  const [dataToRender, setDataToRender] = useState<countryAndIP | undefined>(undefined); 
  
  async function postData() {
    try {
      const resp = await Axios.post('api placeholder', dataToRender);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    async function fetchData() {
      const IPInfo = await Axios.get("https://ipapi.co/json")
      setDataToRender(IPInfo.data)
    }
    if (!dataToRender){
      fetchData();
    }
  }, [dataToRender]); 
  
  console.log(dataToRender)
  return (
    <div className='App-container'>
      <header className="Selector-row">
       <button type="button" className="Task-selector" onClick={() => setTask1Visible(!task1Visible)}>
        {`Show task ${task1Visible? "2": "1"}`}
       </button>
      </header>
      <div>
        {task1Visible ? (
        <SortArrays />
        ):
        (
          <div>
            <DisplayCountry country={dataToRender?.region ?? 'Error'} />
            <DisplayIP ip={dataToRender?.ip ?? 'Error'} />
            <div  className="Task2-container">
            <button type="button" className="Post-button" onClick={postData}>
              {`Post fetched data`}
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App;
