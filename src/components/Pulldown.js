import React from "react";
import { useSelector } from "react-redux";

const Pulldown = (props) => {
  const countryReduxState = useSelector((state) => state.countryReducer);
  const { countryList } = countryReduxState;
  const countries = countryList.map((country) => country.Country);
  const alphaList = countries.sort();

  return (
    <div className="pulldown-container">
      <select>
        <option>Global</option>
        {alphaList.length > 0
          ? alphaList.map((country, key) => (
              <option key={key} value={country}>
                {country}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};
export default Pulldown;
