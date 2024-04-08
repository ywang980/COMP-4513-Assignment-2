import React, { createContext, useState, useContext } from 'react';

export const RaceContext = createContext();

/**
 * RaceProvider is a component that maintains the state for the current view
 * of an opened race when the 'Results' or 'Standings' button is clicked. It provides
 * an interface for components in the tree to read the current view state and update it.
 */
export const RaceProvider = ({ children }) => {
    const [currentView, setCurrentView] = useState({ associatedRace: null, view: null });

    return (
        <RaceContext.Provider value={{ currentView, setCurrentView }}>
            {children}
        </RaceContext.Provider>
    );
};

/**
 * Custom hook that provides access to the race context.
 */
export const useRace = () => useContext(RaceContext);