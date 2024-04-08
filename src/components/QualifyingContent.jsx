import React, { useEffect, useState } from 'react';
import { useRace } from './ContextProviders/RaceProvider';
import { fetchQualifyingByRaceID } from '../supabase/dataProvider';
import GeneralTable from './GeneralTable';

const QualifyingContent = () => {
    const { currentView } = useRace();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchQualifyingByRaceID(currentView.raceId);
            setData(result);
        };

        fetchData();
    }, [currentView.raceId]);

    const handleDriverNameClick = (name) => {
        alert(`Driver: ${name}`);
    };

    const handleConstructorNameClick = (name) => {
        alert(`Constructor: ${name}`);
    };

    // Define the columns
    const columns = [
        { header: 'Position', width: 'w-2/10', render: (row) => row.position },
        {
            header: '',
            width: 'w-1/4',
            render: (row) => (
                <span
                    className="underline cursor-pointer"
                    onClick={() => handleDriverNameClick(row.driverName)}
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
                    onClick={() => handleConstructorNameClick(row.constructorName)}
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