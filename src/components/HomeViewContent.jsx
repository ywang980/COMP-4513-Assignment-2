import React from 'react';
import RacesAsideBar from '../RacesAsideBar/RacesAsideBar';
import StandingsResultsContainer from './StandingsResultsContainer/StandingsResultsContainer';

/**
 * Displays the content on the home view.
 */
const HomeViewContent = () => {
  return (
    <div className="flex justify-between space-x-4 w-full h-[90vh] bg-gray-800 text-white p-4">
      <RacesAsideBar />
      <StandingsResultsContainer />
    </div>
  );
};

export default HomeViewContent;