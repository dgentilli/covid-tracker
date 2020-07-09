import React from "react";
import { Doughnut } from "react-chartjs-2";

/**
 * REFS: https://www.npmjs.com/package/react-chartjs-2
 * http://jerairrest.github.io/react-chartjs-2/
 */

const Chart = (props) => {
  const activeCases = props.active ? props.active : null;
  const deaths = props.deaths ? props.deaths : null;
  const recovered = props.recovered ? props.recovered : null;
  console.log("chart variables: ", activeCases, deaths, recovered);
  const doughnut = (
    <Doughnut
      data={{
        labels: ["Active", "Recovered", "Deaths"],
        datasets: [
          {
            data: [activeCases, recovered, deaths],
            label: ["Active", "Recovered", "Deaths"],
            borderColor: "#ccc",
            backgroundColor: ["#ffea08", "#24a822", "#e81f10"],
            fill: true,
          },
        ],
      }}
    />
  );
  return (
    <div className="chart-container">
      {activeCases ? doughnut : "Loading..."}
    </div>
  );
};
export default Chart;
