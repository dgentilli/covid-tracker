import React, { useEffect, useState, useRef } from "react";
import DataDisplay from "./DataDisplay";
import { getSummary, getCountryList } from "../api/fetchDataApi";

const DisplayControl = (props) => {
  console.log("displayControl props", props);

  return (
    <div>
      <div className="pulldown-container">
        <div>
          <h1>COVID TRACKER</h1>
          <select>
            <option>Global</option>
            {props.countries
              ? props.countries.map((country, key) => (
                  <option key={key} value={country}>
                    {country}
                  </option>
                ))
              : ""}
          </select>
        </div>
      </div>
      <DataDisplay data={props.data} countries={props.countries} />
    </div>
  );
};
export default DisplayControl;
