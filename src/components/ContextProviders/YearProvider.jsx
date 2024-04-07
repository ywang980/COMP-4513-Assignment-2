import React, { createContext, useState, useContext } from 'react';

export const YearContext = createContext();

export const YearProvider = ({ children }) => {
    const start = 2000;

    const [selectedYear, setSelectedYear] = useState(start);

    return (
        <YearContext.Provider value={{ selectedYear, setSelectedYear }}>
            {children}
        </YearContext.Provider>
    );
};

// Create a hook to use the year context
export const useYear = () => useContext(YearContext);