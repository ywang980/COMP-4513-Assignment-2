import React from 'react';

import { useYear } from './ContextProviders/YearProvider';

import GeneralTable from './GeneralTable';

const HomeViewContent = () => {
  const { selectedYear } = useYear();

  const races = [
    { round: 1, circuit: 'Circuit 1' },
    { round: 2, circuit: 'Circuit 2' },
  ];

  const columns = [
    { header: 'Round', width: 'w-1/4', render: (race) => race.round },
    { header: 'Circuit', width: 'w-1/2', render: (race) => race.circuit },
    {
      width: 'w-1/4',
      render: (race) => (
        <div className="flex justify-around">
          <div className="w-1/2 p-1">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Results
            </button>
          </div>
          <div className="w-1/2 p-1">
            <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Standings
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex justify-between space-x-4 w-full h-[90vh] bg-gray-800 text-white p-4">
      <aside className="w-full md:w-1/2 lg:w-1/3 h-full bg-gray-600 p-4 border border-gray-600 overflow-auto">
        <GeneralTable header={`${selectedYear} Races`} columns={columns} data={races} />
      </aside>
      <main className="w-full md:w-1/2 lg:w-2/3 h-full bg-gray-600 p-4 border border-gray-600 overflow-auto">
        <p>This is the main section.</p>
      </main>
    </div>
  );
};

export default HomeViewContent; 