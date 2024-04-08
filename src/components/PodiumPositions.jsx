import React from 'react';
import { usePopupHandlers } from './PopupHandlers';

const PodiumPositions = ({ results }) => {
    const { handleDriverNameClick } = usePopupHandlers();

    // Filter out the top 3 positions
    const topResults = results.slice(0, 3);

    const positionColors = ['gold', 'silver', '#cd7f32']; // Gold, Silver, Bronze
    const positionTexts = ['1st', '2nd', '3rd']; // Texts for positions
    const positionSizes = ['text-4xl', 'text-3xl', 'text-2xl']; // Text sizes for positions
    const positionBorders = ['8px double gold', '6px ridge silver', '4px groove #cd7f32']; // Borders for positions

    return (
        <div className="flex justify-around">
            {topResults.map((result, index) => (
                <div key={index} className="card flex-1 m-2 w-1/3 h-1/1 text-center shadow-lg rounded-lg p-4 transform transition duration-500 hover:scale-105"
                    style={{ border: positionBorders[index] }}>
                    <h2
                        className="underline cursor-pointer"
                        onClick={() => handleDriverNameClick(result.driverId)}
                    >
                        {result.driverName}
                    </h2>
                    <h1 className={positionSizes[index]} style={{ color: positionColors[index] }}>
                        {positionTexts[index]}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default PodiumPositions;