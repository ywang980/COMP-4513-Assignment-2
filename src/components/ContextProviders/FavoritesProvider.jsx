import React, { createContext, useState, useContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState({
        drivers: ["Driver 1", "Driver 2", "Driver 3"],
        constructors: ["Constructor 1", "Constructor 2", "Constructor 3"],
        circuits: null
    });

    const addToFavorites = (category, item) => {
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [category]: [...prevFavorites[category], item]
        }));
    };

    const emptyFavorites = () => {
        setFavorites({
            drivers: [],
            constructors: [],
            circuits: []
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, addToFavorites, emptyFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Create a hook to use the favorites context
export const useFavorites = () => useContext(FavoritesContext);