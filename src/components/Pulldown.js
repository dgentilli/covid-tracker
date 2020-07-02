import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "./redux/actions";
import * as actions from "./redux/actions";
import { getCountryList } from "../api/fetchDataApi";

const Pulldown = () => {
  const countryReduxState = useSelector((state) => state.countryReducer);
  const { countryList, selectedCountry } = countryReduxState;
  const countries = countryList
    ? countryList.map((country) => country.Country)
    : null;
  const alphaList = countries ? countries.sort() : null;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(selectCountry(e.target.value));
  };

  useEffect(() => {
    const getCountries = async () => {
      const data = await getCountryList();
      dispatch(actions.setCountryList(data));
    };
    getCountries();
  }, [selectedCountry]);

  return (
    <div className="pulldown-container">
      <label>Select a Country:</label>
      <br></br>
      <select value={selectedCountry} onChange={handleChange}>
        <option value={"Worldwide"}>Worldwide</option>
        {alphaList && alphaList.length > 0
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
