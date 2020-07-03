import React, { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";
import { getSummary, getCountryList } from "../api/fetchDataApi";

const DisplayControl = (props) => {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const summaryData = await getSummary();
      const countryList = await getCountryList();
      setCountries(countryList);
      setData(summaryData);
    };
    getData();
  }, []);
  return (
    <div>
      <DataDisplay data={data} countries={countries} />
    </div>
  );
};
export default DisplayControl;
