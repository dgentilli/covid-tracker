import React, { useEffect, useState } from "react";
import Card from "./Card";
import Chart from "./Chart";

const DataDisplay = (props) => {
  const [getCountryData, setGetCountryData] = useState([]);
  //const [newConfirmed, setNewConfirmed] = useState("");
  console.log("DataDisplay props: ", props);
  console.log("getCountryData", getCountryData);
  const selectedCountry = props.selectedCountry ? props.selectedCountry : null;

  useEffect(() => {
    const dataObj =
      props.data.Countries && selectedCountry
        ? props.data.Countries.filter(
            (country) => country.Country === selectedCountry
          )
        : "";
    setGetCountryData(dataObj);
    console.log("dataObj======", dataObj);
  }, [props.selectedCountry]);

  const newConfirmed =
    selectedCountry === "Global" && props.data.Global
      ? props.data.Global.NewConfirmed
      : getCountryData.length > 0
      ? getCountryData[0].NewConfirmed
      : "Loading";

  //const newConfirmed = 10;

  const totalConfirmed = props.data.Global
    ? props.data.Global.TotalConfirmed
    : null;

  const totalDeaths = props.data.Global ? props.data.Global.TotalDeaths : null;

  const totalRecovered = props.data.Global
    ? props.data.Global.TotalRecovered
    : null;

  const activeCases = props.data.Global
    ? totalConfirmed - totalRecovered - totalDeaths
    : null;

  const newCases = props.data.Global ? newConfirmed : "Loading...";
  const totalCases = props.data.Global ? totalConfirmed : "Loading...";
  const totalActiveCases = props.data.Global ? activeCases : "Loading...";
  const dateUpdated = props.data.Date ? props.data.Date : "Loading...";

  return (
    <div id="data-display-container">
      <div className="top">
        <div className="top-card-container">
          <Card title={"New Cases"} data={newCases} updated={dateUpdated} />
          <Card title={"Total Cases"} data={totalCases} updated={dateUpdated} />
          <Card
            title={"Active Cases"}
            data={totalActiveCases}
            updated={dateUpdated}
          />
        </div>
      </div>
      <div className="center">
        <Chart
          active={activeCases}
          deaths={totalDeaths}
          recovered={totalRecovered}
        />
      </div>
      <div className="side-r">
        <Card title={"Recovered"} data={totalRecovered} updated={dateUpdated} />
      </div>
      <div className="side-d">
        <Card title={"Deaths"} data={totalDeaths} updated={dateUpdated} />
      </div>
    </div>
  );
};

export default DataDisplay;
