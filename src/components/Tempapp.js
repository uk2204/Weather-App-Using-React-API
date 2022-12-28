import React, { useEffect, useState } from "react";
import "./css/styles.css";
function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");
  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=23aea30b1a00826e55308bf6e63d3002`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchapi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputdata">
          <input
            type="search"
            value={search}
            className="inputfield"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="error">No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}° Cel</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tempapp;
