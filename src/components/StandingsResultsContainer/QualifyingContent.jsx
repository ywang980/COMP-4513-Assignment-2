import React, { useEffect, useState } from 'react';
import { useRace } from '../ContextProviders/RaceProvider';
import { fetchQualifyingByRaceID } from '../../supabase/dataProvider';
import { usePopupHandlers } from '../Popups/PopupHandlers';
import GeneralTable from '../General/GeneralTable';

/**
 * Displays qualifying data for a specific race in a table.
 */
const QualifyingContent = () => {
    const { currentView } = useRace();
    const { handleDriverNameClick, handleConstructorNameClick } = usePopupHandlers();
    const [data, setData] = useState([]);

    // Fetch qualifying data
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchQualifyingByRaceID(currentView.raceId);
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
        { header: 'Q1', width: 'w-1/10', render: (row) => row.q1 },
        { header: 'Q2', width: 'w-1/10', render: (row) => row.q2 },
        { header: 'Q3', width: 'w-1/10', render: (row) => row.q3 }
    ];

    return (
        <GeneralTable
            header="Qualifying"
            columns={columns}
            data={data}
        />
    );
};

export default QualifyingContent;