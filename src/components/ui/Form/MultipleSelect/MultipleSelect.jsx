import React, { useState } from 'react';
import Select from 'react-select';

import 'tailwindcss/tailwind.css';
const colourOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'orange', label: 'Orange' },
  { value: 'purple', label: 'Purple' },
  { value: 'pink', label: 'Pink' },
];
const MultipleTagSelect = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Select Tags:</h2>
      <Select
        isMulti={true}
        options={colourOptions}
        value={selectedTags}
        onChange={handleTagChange}
      />
    </div>
  );
};
export default MultipleTagSelect;
