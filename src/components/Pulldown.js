import React, { useState, useEffect } from "react";

const Pulldown = (props) => {
  const [countryList, setCountryList] = useState([]);
  console.log("Pulldown props: ", props);
  console.log("countryList: ", countryList);

  useEffect(() => {
    let countryMap =
      props.countries.length > 0
        ? props.countries.map((country) => country.Country).sort()
        : [];
    setCountryList(countryMap);
  }, [props.countries]);
  return (
    <div className="pulldown-container">
      <select>
        <option>Global</option>
        {countryList
          ? countryList.map((country, key) => (
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
