import React from 'react';

import BarChart from '../../components/ui/Chart/BarChart';
import LineChart from '../../components/ui/Chart/LineChart';
import PieChart from '../../components/ui/Chart/PieChart';

const Chart = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex flex-col xl:flex-row gap-20">
        <div className="w-full">
          <LineChart />
        </div>
        <div className="w-full">
          <BarChart />
        </div>
      </div>
      <div className="max-w-md">
        <PieChart />
      </div>
    </div>
  );
};

export default Chart;
