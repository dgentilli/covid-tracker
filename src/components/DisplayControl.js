import React, { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";

const DisplayControl = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("Global");
  console.log("displayControl props", props);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    console.log("useEffect selectedCountry", selectedCountry);
  }, []);

  return (
    <div>
      <div className="pulldown-container">
        <div>
          <h1>COVID TRACKER</h1>
          <select value={selectedCountry} onChange={handleChange}>
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
      <DataDisplay
        selectedCountry={selectedCountry}
        data={props.data}
        countries={props.countries}
      />
    </div>
  );
};
export default DisplayControl;
