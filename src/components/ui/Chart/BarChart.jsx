import 'chart.js/auto';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'My Dataset',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#93bbe6',
      borderColor: '#2460a5',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  // chart options
};

const BarChart = () => {
  return <Bar data={chartData} options={chartOptions} />;
};
export default BarChart;
