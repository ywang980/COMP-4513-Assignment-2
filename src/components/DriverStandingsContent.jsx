import React, { useEffect, useState } from 'react';
import { useRace } from './ContextProviders/RaceProvider';
import { fetchDriverStandingsByRaceID } from '../supabase/dataProvider';
import GeneralTable from './GeneralTable';

const DriverStandingsContent = () => {
    const { currentView } = useRace();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchDriverStandingsByRaceID(currentView.raceId);
            setData(result);
        };

        fetchData();
    }, [currentView.raceId]);

    // Define the columns
    const columns = [
        { header: 'Position', width: 'w-2/10', render: (row) => row.position },
        {
            header: 'Driver',
            width: 'w-2/5',
            render: (row) => (
                <span
                    className="underline cursor-pointer"
                    onClick={() => alert(`Driver: ${row.driverName}`)}
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