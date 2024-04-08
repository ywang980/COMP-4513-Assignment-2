import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchRacesCircuitsBySeason } from '../../supabase/dataProvider';

export const YearContext = createContext();

/**
 * YearProvider is a component that maintains the state for year data.
 * It fetches races for all years on initial load and updates current races whenever the selected year changes.
 */
export const YearProvider = ({ children }) => {
    const [selectedYear, setSelectedYear] = useState("");
    const [allYearsRaces, setAllYearsRaces] = useState({});
    const [currentYearRaces, setCurrentYearRaces] = useState([]);

    // Fetch races for all years on initial load
    useEffect(() => {
        const fetchAllRaces = async () => {
            const startYear = 2000;
            const endYear = 2023;
            const allRaces = {};

            for (let year = startYear; year <= endYear; year++) {
                const races = await fetchRacesCircuitsBySeason(year);
                allRaces[year] = races;
            }

            setAllYearsRaces(allRaces);
            setCurrentYearRaces(allRaces[selectedYear]);
        };

        fetchAllRaces();
    }, []);

    // Update current races whenever the selected year changes
    useEffect(() => {
        setCurrentYearRaces(allYearsRaces[selectedYear]);
    }, [selectedYear, allYearsRaces])
        ;


    return (
        <YearContext.Provider value={{ selectedYear, setSelectedYear, currentYearRaces }}>
            {children}
        </YearContext.Provider>
    );
};

/**
 * Custom hook that provides access to the modal context.
 */
export const useYear = () => useContext(YearContext);