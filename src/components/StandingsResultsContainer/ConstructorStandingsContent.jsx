import React, { useEffect, useState } from 'react';
import { useRace } from '../ContextProviders/RaceProvider';
import { fetchConstructorStandingsByRaceID } from '../../supabase/dataProvider';
import { usePopupHandlers } from '../Popups/PopupHandlers';
import GeneralTable from '../General/GeneralTable';

/**
 * Displays constructor standings after a specific round in a table.
 */
const ConstructorStandingsContent = () => {
    const { currentView } = useRace();
    const { handleConstructorNameClick } = usePopupHandlers();
    const [data, setData] = useState([]);

    // Fetch constructor standings data
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchConstructorStandingsByRaceID(currentView.raceId);
            setData(result);
        };

        fetchData();
    }, [currentView.raceId]);

    // Define the table columns
    const columns = [
        { header: 'Position', width: 'w-2/10', render: (row) => row.position },
        {
            header: 'Constructor',
            width: 'w-2/5',
            render: (row) => (
                <span
                    className="underline cursor-pointer"
                    onClick={() => handleConstructorNameClick(row.constructorId)}
                >
                    {row.constructorName}
                </span>
            )
        },
        { header: 'Points', width: 'w-2/10', render: (row) => row.points },
        { header: 'Wins', width: 'w-2/10', render: (row) => row.wins }
    ];

    return (
        <GeneralTable
            header="Constructor Standings"
            columns={columns}
            data={data}
        />
    );
};

export default ConstructorStandingsContent;