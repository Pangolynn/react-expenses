import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  // transforming the dataPoint objects into just data point values so we can use max()
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // We want to find the biggest value across all months for our maxValue
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
