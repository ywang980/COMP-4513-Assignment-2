import React from 'react';
import { useYear } from '../ContextProviders/YearProvider';
import { useRace } from '../ContextProviders/RaceProvider';

/**
 * Component that allows users to select a season from a dropdown.
 */

const SeasonSelector = () => {
  const { selectedYear, setSelectedYear } = useYear();
  const { setCurrentView } = useRace();

  const startYear = 2000;
  const endYear = 2023;

  // Populate list of years
  const yearOptions = [];
  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }
  // Updates the selectedYear when a different year is selected from the dropdown.
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);

    setCurrentView({
      associatedRace: null,
      view: null
    });
  };

  return (
    <>
      <label htmlFor="season" className="mr-2">
        Season
      </label>
      <select id="season" className="bg-white text-gray-800 rounded p-2"
        value={selectedYear} onChange={handleYearChange}>
        {yearOptions}
      </select>
    </>
  );
};

export default SeasonSelector;