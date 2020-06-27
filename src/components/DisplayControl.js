import React, { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";
import Pulldown from "./Pulldown";
import { getSummary, getCountryList } from "../api/fetchDataApi";

const DisplayControl = (props) => {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);

  useEffect(async () => {
    getSummary();
    const countryList = await getCountryList();
    setCountries(countryList);
    const summaryData = await getSummary();
    setData(summaryData);
  }, []);

  return (
    <div>
      <DataDisplay data={data} />
      <Pulldown countries={countries} />
    </div>
  );
};
export default DisplayControl;
