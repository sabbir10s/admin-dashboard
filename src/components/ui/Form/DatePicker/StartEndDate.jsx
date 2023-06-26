import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const StartEndDate = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="p-4">
      <h2 className="text-sm font-bold mb-2 dark:text-gray-400">
        Select Date Range:
      </h2>
      <div className="flex space-x-4">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart={true}
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          className="border border-gray-300 p-2 rounded-md"
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd={true}
          startDate={startDate}
          endDate={endDate}
          placeholderText="End Date"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default StartEndDate;
