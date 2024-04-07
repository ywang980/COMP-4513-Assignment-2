import React from 'react';

const SeasonSelector = () => {
  const startYear = 2000;
  const endYear = 2023;

  const yearOptions = [];
  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  return (
    <>
      <label htmlFor="season" className="mr-2">
        Season
      </label>
      <select id="season" className="bg-white text-gray-800 rounded p-2">
        {yearOptions}
      </select>
    </>
  );
};

export default SeasonSelector;