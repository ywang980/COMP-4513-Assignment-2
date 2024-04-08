import React, { useEffect, useState } from 'react';
import { useRace } from '../ContextProviders/RaceProvider';
import { fetchResultsByRaceID } from '../../supabase/dataProvider';
import { usePopupHandlers } from '../Popups/PopupHandlers';

import GeneralTable from '../General/GeneralTable';
import PodiumPositions from './PodiumPositions';

/**
 * Displays results data for a specific race in a table.
 * 
 * Also includes a "podium bar" for the top 3 finishes.
 */
const ResultsContent = () => {
    const { currentView } = useRace();
    const { handleDriverNameClick, handleConstructorNameClick } = usePopupHandlers();
    const [data, setData] = useState([]);

    // Fetch results data
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchResultsByRaceID(currentView.raceId);
            setData(result);
        };

        fetchData();
    }, [currentView.raceId]);

    // Define the table columns
    const columns = [
        { header: 'Position', width: 'w-2/10', render: (row) => row.position },
        {
            header: '',
            width: 'w-1/4',
            render: (row) => (
                <span
                    className="underline cursor-pointer"
                    onClick={() => handleDriverNameClick(row.driverId)}
                >
                    {row.driverName}
                </span>
            )
        },
        {
            header: '',
            width: 'w-1/4',
            render: (row) => (
                <span
                    className="underline cursor-pointer"
                    onClick={() => handleConstructorNameClick(row.constructorId)}
                >
                    {row.constructorName}
                </span>
            )
        },
        { header: 'Laps', width: 'w-3/20', render: (row) => row.laps },
        { header: 'Points', width: 'w-3/20', render: (row) => row.points },
    ];

    return (
        <div className="h-full flex flex-col">
            <h1 className="h-1/10 text-center text-2xl mb-4">Results</h1>
            <div className="h-2/10">
                <PodiumPositions results={data} />
            </div>
            <div className="h-7/10 overflow-auto">
                <GeneralTable
                    columns={columns}
                    data={data}
                />
            </div>
        </div>
    );
}

export default ResultsContent;