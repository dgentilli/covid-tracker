import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = (props) => {
  const activeCases = props.active ? props.active : null;
  const deaths = props.deaths ? props.deaths : null;
  const recovered = props.recovered ? props.recovered : null;
  console.log("chart variables: ", activeCases, deaths, recovered);
  return <h3>Chart</h3>;
  //   return (
  // <Doughnut data={{labels: ['Active Cases', 'Deaths', 'Recovered'] }, dataSets: [{data: activeCases, label: 'Active Cases'}, {data: recovered, label: 'Recovered'}, {data: deaths, label: 'deaths'}]} />
  //   )
};
export default Chart;
