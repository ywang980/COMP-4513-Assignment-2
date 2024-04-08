import React, { useState, useEffect } from 'react';
import { useRace } from './ContextProviders/RaceProvider';
import { fetchRaceByID } from '../supabase/dataProvider';

import { usePopupHandlers } from './PopupHandlers';

const ResultsSubHeader = () => {
    const { currentView } = useRace();
    const raceId = currentView.raceId;
    const { handleCircuitNameClick } = usePopupHandlers();

    const [raceData, setRaceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchRaceByID(raceId);
            setRaceData(data);
        };

        fetchData();
    }, [raceId]);

    if (!raceData) {
        return null;
    }

    // const handleCircuitNameClick = () => {
    //     alert(`Circuit Name: ${currentView.circuit}`);
    // };

    return (
        <div className="text-left">
            <div className="flex justify-between"><p>Race Name:</p> <p>{raceData.name}</p></div>
            <div className="flex justify-between"><p>Round #:</p> <p>{raceData.round}</p></div>
            <div className="flex justify-between" >
                <p>Circuit Name:</p>
                <p className="underline cursor-pointer"
                    onClick={() => handleCircuitNameClick(currentView.circuitId)}>
                    {currentView.circuit}
                </p>
            </div>
            <div className="flex justify-between"><p>Year:</p> <p>{raceData.year}</p></div>
            <div className="flex justify-between"><p>Date:</p> <p>{raceData.date}</p></div>
            <div className="flex justify-between"><p>URL:</p> <p><a href={raceData.url} className="text-blue-500 underline cursor-pointer">{raceData.url}</a></p></div>
        </div>
    );
}

export default ResultsSubHeader;