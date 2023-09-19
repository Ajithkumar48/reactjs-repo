import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const arrayValue = props.datapoints.map((datapoint) => datapoint.value); // object to number
  const totalMaxValue = Math.max(...arrayValue);

  console.log(totalMaxValue);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
