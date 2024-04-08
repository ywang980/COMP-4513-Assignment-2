import React from 'react';
import { useRace } from '../components/ContextProviders/RaceProvider';

const RaceButtons = ({ associatedRace }) => {
    const { setCurrentView } = useRace();

    const handleResultsClick = () => {
        setCurrentView({
            round: associatedRace.round,
            circuit: associatedRace.circuitName,
            raceId: associatedRace.raceId,
            circuitId: associatedRace.circuitId,
            view: 'results'
        });
    };

    const handleStandingsClick = () => {
        setCurrentView({
            round: associatedRace.round,
            circuit: associatedRace.circuitName,
            raceId: associatedRace.raceId,
            view: 'standings'
        });
    };

    return (
        <div className="flex justify-around">
            <div className="w-1/2 p-1">
                <button onClick={handleResultsClick} className="w-full bg-blue-500
                hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Results
                </button>
            </div>
            <div className="w-1/2 p-1">
                <button onClick={handleStandingsClick} className="w-full bg-green-500
                hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Standings
                </button>
            </div>
        </div>
    );
};

export default RaceButtons;