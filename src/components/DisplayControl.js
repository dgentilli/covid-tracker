import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./redux/actions";

import DataDisplay from "./DataDisplay";
import Pulldown from "./Pulldown";
import { getSummary, getCountryList } from "../api/fetchDataApi";

const DisplayControl = (props) => {
  const dispatch = useDispatch();
  // const [countries, setCountries] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const summaryData = await getSummary();
      const countryList = await getCountryList();
      // setCountries(countryList);
      // setData(summaryData);
      dispatch(actions.setCountryList(countryList));
      dispatch(actions.setCountryData(summaryData));
    };
    getData();
  }, []);
  // return (
  //   <div>
  //     <h1>COVID TRACKER</h1>
  //     <Pulldown countries={countries} />
  //     <DataDisplay data={data} countries={countries} />
  //   </div>
  // );
  return (
    <div>
      <h1>COVID TRACKER</h1>
      <Pulldown />
      <DataDisplay />
    </div>
  );
};
export default DisplayControl;
