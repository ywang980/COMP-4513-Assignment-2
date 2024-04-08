import React, { useEffect, useState } from 'react';
import { useRace } from './ContextProviders/RaceProvider';
import { fetchResultsByRaceID } from '../supabase/dataProvider';
import PodiumPositions from './PodiumPositions';
import GeneralTable from './GeneralTable';

const ResultsContent = () => {
    const { currentView } = useRace();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchResultsByRaceID(currentView.raceId);
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
        { header: 'Laps', width: 'w-3/20', render: (row) => row.laps },
        { header: 'Points', width: 'w-3/20', render: (row) => row.points },
    ];

    return (
        <div className="h-full flex flex-col">
            <h1 className="h-1/10 text-center text-2xl mb-4">Results</h1>
            <div className="h-2/10">
                <PodiumPositions results={data}/>
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