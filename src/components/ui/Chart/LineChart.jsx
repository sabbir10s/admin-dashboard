import 'chart.js/auto';
import React from 'react';
import { Line } from 'react-chartjs-2';
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'My Dataset',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: '#2460a5',
      tension: 0.1,
    },
  ],
};

const chartOptions = {
  // chart options
};
const LineChart = () => {
  return <Line data={chartData} options={chartOptions} />;
};
export default LineChart;
