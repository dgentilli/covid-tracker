import React, { useEffect, useState } from "react";
import { getSummary, getCountryList } from "./api/fetchDataApi";
import "./App.css";
import DisplayControl from "./components/DisplayControl";

function App() {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const summaryData = await getSummary();
      const countryList = await getCountryList();
      const mappedCountries = countryList.map((country) => country.Country);
      const sortedCountries = mappedCountries.sort();
      setCountries(sortedCountries);
      setData(summaryData);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <DisplayControl countries={countries} data={data} />
    </div>
  );
}

export default App;
