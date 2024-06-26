import React, { useEffect, useState } from 'react';
import { useYear } from '../components/ContextProviders/YearProvider';
import { usePopupHandlers } from '../components/Popups/PopupHandlers';

import GeneralTable from '../components/General/GeneralTable';
import LoadingWheel from '../components/General/LoadingWheel';
import RaceButtons from './RaceButtons';

/**
 * RacesAsideBar Component
 * 
 * This component displays a list of races for the selected year.
 * It fetches the data from the YearProvider and updates the table data
 * whenever the current year races data changes.
 * 
 * Conditional rendering is used to display different components based on the state of
 * 'selectedYear' and 'currentYearRaces'.
 * 
 * Display nothing if no year selected.
 * Display a loading wheel if a year is selected but the data hasn't been fetched yet.
 * Display the selected year's races otherwise.
 */
const RacesAsideBar = () => {
    const { selectedYear, currentYearRaces } = useYear();
    const { handleCircuitNameClick } = usePopupHandlers();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(currentYearRaces);
    }, [currentYearRaces]);

    const columns = [
        {
            header: 'Round', width: 'w-1/4', render: (race) => race.round
        },
        {
            header: 'Circuit',
            width: 'w-1 /2',
            render: (race) => (
                <span
                    className="underline cursor-pointer"
                    onClick={() => handleCircuitNameClick(race.circuitId)}
                >
                    {race.circuitName}
                </span>
            )
        },
        {
            width: 'w-1/4',
            render: (race) => <RaceButtons associatedRace={race} />
        }
    ];

    return (
        <aside className="w-full md:w-1/2 lg:w-1/3 h-full bg-gray-600 p-4 border
        border-gray-600 overflow-auto">
            {selectedYear ? (
                currentYearRaces ? (
                    <GeneralTable header={`${selectedYear} Races`}
                        columns={columns} data={currentYearRaces} />
                ) : (
                    <LoadingWheel message={`Fetching Races for Year ${selectedYear}`} />
                )
            ) : null}
        </aside>
    );
};

export default RacesAsideBar;
