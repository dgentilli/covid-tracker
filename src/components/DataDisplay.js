import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import { getSummary } from "../api/fetchDataApi";

import Card from "./Card";
import Chart from "./Chart";

const DataDisplay = () => {
  const dispatch = useDispatch();

  const countryReduxState = useSelector((state) => state.countryReducer);
  const { selectedCountry, countryData } = countryReduxState
    ? countryReduxState
    : null;

  console.log(
    "countryData.Global form DataDisplay: ",
    countryData.Global.NewConfirmed
  );
  //const global = countryData.Global ? countryData.Global : null;
  // console.log("countryData.Global from datadisplay: ", global);
  // console.log("countryData: ", countryData);

  useEffect(() => {
    const getData = async () => {
      const data = await getSummary();
      dispatch(actions.setCountryData(data));
    };
    //getData();
  }, [selectedCountry]);

  // const newConfirmed =
  //   countryData && selectedCountry === "Worldwide"
  //     ? countryData.Global.NewConfirmed
  //     : countryData && countryData.Countries.Country === selectedCountry
  //     ? countryData.Countries.Country.NewConfirmed
  //     : "Loading...";

  // const newConfirmed = countryData
  //   ? countryData.Global.NewConfirmed
  //   : "Loading...";

  // console.log("newConfirmed", newConfirmed);

  return <h1>DataDisplay</h1>;
  // console.log("DataDisplay props: ", props);

  // const totalConfirmed = props.data.Global
  //   ? props.data.Global.TotalConfirmed
  //   : null;

  // const totalDeaths = props.data.Global ? props.data.Global.TotalDeaths : null;

  // const totalRecovered = props.data.Global
  //   ? props.data.Global.TotalRecovered
  //   : null;

  // const activeCases = props.data.Global
  //   ? totalConfirmed - totalRecovered - totalDeaths
  //   : null;

  // const newCases = props.data.Global ? newConfirmed : "Loading...";
  // const totalCases = props.data.Global ? totalConfirmed : "Loading...";
  // const totalActiveCases = props.data.Global ? activeCases : "Loading...";
  // const dateUpdated = props.data.Date ? props.data.Date : "Loading...";

  // return (
  //   <div id="data-display-container">
  //     <div className="top">
  //       <div className="top-card-container">
  //         <Card title={"New Cases"} data={newCases} updated={dateUpdated} />
  //         <Card title={"Total Cases"} data={totalCases} updated={dateUpdated} />
  //         <Card
  //           title={"Active Cases"}
  //           data={totalActiveCases}
  //           updated={dateUpdated}
  //         />
  //       </div>
  //     </div>
  //     <div className="center">
  //       <Chart
  //         active={activeCases}
  //         deaths={totalDeaths}
  //         recovered={totalRecovered}
  //       />
  //     </div>
  //     <div className="side-r">
  //       <Card title={"Recovered"} data={totalRecovered} updated={dateUpdated} />
  //     </div>
  //     <div className="side-d">
  //       <Card title={"Deaths"} data={totalDeaths} updated={dateUpdated} />
  //     </div>
  //   </div>
  // );
};

export default DataDisplay;
