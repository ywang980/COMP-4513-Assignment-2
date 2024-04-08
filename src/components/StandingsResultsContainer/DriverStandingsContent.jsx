import React, { useEffect, useState } from 'react';
import { useRace } from '../ContextProviders/RaceProvider';
import { fetchDriverStandingsByRaceID } from '../../supabase/dataProvider';
import { usePopupHandlers } from '../Popups/PopupHandlers';
import GeneralTable from '../General/GeneralTable';

/**
 * Displays driver standings after a specific round in a table.
 */
const DriverStandingsContent = () => {
    const { currentView } = useRace();
    const { handleDriverNameClick } = usePopupHandlers();
    const [data, setData] = useState([]);

    // Fetch driver standings data
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchDriverStandingsByRaceID(currentView.raceId);
            setData(result);
        };

        fetchData();
    }, [currentView.raceId]);

    // Define the table columns
    const columns = [
        { header: 'Position', width: 'w-2/10', render: (row) => row.position },
        {
            header: 'Driver',
            width: 'w-2/5',
            render: (row) => (
                <span
                    className="underline cursor-pointer"
                    onClick={() => handleDriverNameClick(row.driverId)}
                >
                    {row.driverName}
                </span>
            )
        },
        { header: 'Points', width: 'w-2/10', render: (row) => row.points },
        { header: 'Wins', width: 'w-2/10', render: (row) => row.wins }
    ];

    return (
        <GeneralTable
            header="Driver Standings"
            columns={columns}
            data={data}
        />
    );
};

export default DriverStandingsContent;