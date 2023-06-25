import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Select Date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="border border-gray-300 p-2 rounded-md"
      />
    </div>
  );
};
export default MyDatePicker;
