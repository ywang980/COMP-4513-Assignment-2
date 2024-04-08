import React, { createContext, useState, useContext } from 'react';

export const RaceContext = createContext();

export const RaceProvider = ({ children }) => {
    const [currentView, setCurrentView] = useState({ associatedRace: null, view: null });

    return (
        <RaceContext.Provider value={{ currentView, setCurrentView }}>
            {children}
        </RaceContext.Provider>
    );
};

export const useRace = () => useContext(RaceContext);