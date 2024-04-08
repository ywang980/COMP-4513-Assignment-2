import React, { useState, useEffect } from 'react';
import { useRace } from '../ContextProviders/RaceProvider';
import { fetchRaceByID } from '../../supabase/dataProvider';
import { usePopupHandlers } from '../Popups/PopupHandlers';

/**
 * Displays information about a specific race in a header.
 */
const ResultsSubHeader = () => {
    const { currentView } = useRace();
    const raceId = currentView.raceId;
    const { handleCircuitNameClick } = usePopupHandlers();

    const [raceData, setRaceData] = useState(null);

    // Fetch race data
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

    return (
        <div className="text-left">
            <div className="flex justify-start items-start"><p className="w-48">
                Race Name:</p> <p>{raceData.name}</p></div>
            <div className="flex justify-start items-start"><p className="w-48">
                Round #:</p> <p>{raceData.round}</p></div>
            <div className="flex justify-start items-start">
                <p className="w-48">Circuit Name:</p>
                <p className="underline cursor-pointer"
                    onClick={() => handleCircuitNameClick(currentView.circuitId)}>
                    {currentView.circuit}
                </p>
            </div>
            <div className="flex justify-start items-start"><p className="w-48">
                Year:</p> <p>{raceData.year}</p></div>
            <div className="flex justify-start items-start"><p className="w-48">
                Date:</p> <p>{raceData.date}</p></div>
            <div className="flex justify-start items-start"><p className="w-48">
                URL:</p> <p><a href={raceData.url}
                    className="text-blue-500 underline cursor-pointer">{raceData.url}</a></p></div>
        </div>
    );
}

export default ResultsSubHeader;