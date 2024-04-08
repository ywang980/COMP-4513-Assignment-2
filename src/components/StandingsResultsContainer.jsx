import React from 'react';
import { useRace } from './ContextProviders/RaceProvider';
import ResultsSubHeader from './ResultsSubHeader';
import QualifyingContent from './QualifyingContent';
import ResultsContent from './ResultsContent';
import DriverStandingsContent from './DriverStandingsContent';
import ConstructorStandingsContent from './ConstructorStandingsContent';

const StandingsResultsContainer = () => {
    const { currentView } = useRace();
    let header, subheader, leftComponent, rightComponent;

    if (currentView.view === 'results') {
        header = 'Results';
        subheader = <ResultsSubHeader />;
        leftComponent = <QualifyingContent />;
        rightComponent = <ResultsContent />;
    } else if (currentView.view === 'standings') {
        header = 'Standings';
        subheader = `After Round ${currentView.round}`;
        leftComponent = <DriverStandingsContent />;
        rightComponent = <ConstructorStandingsContent/>
    }

    return (
        <main className="w-full md:w-1/2 lg:w-2/3 h-full bg-gray-600 p-4 border border-gray-600 overflow-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">{header}</h1>
            {subheader && <h2 className="text-xl mb-4 text-center">{subheader}</h2>}
            <div className="flex flex-col sm:flex-row justify-between w-full h-full">
                <div className="flex flex-col xl:flex-row justify-between w-full h-full">
                    <div className="w-full xl:w-1/2 h-1/2 xl:h-full bg-gray-500 p-4 border border-gray-400 mb-2 xl:mb-0 xl:mr-2">
                        {leftComponent}
                    </div>
                    <div className="w-full xl:w-1/2 h-1/2 xl:h-full bg-gray-500 p-4 border border-gray-400 mt-2 xl:mt-0 xl:ml-2">
                        {rightComponent}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StandingsResultsContainer;