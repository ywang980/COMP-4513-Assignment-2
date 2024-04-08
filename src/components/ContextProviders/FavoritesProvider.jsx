import React, { createContext, useState, useContext } from 'react';

export const FavoritesContext = createContext();

/**
 * FavoritesProvider is a component that maintains the state for favorites data.
 * It provides an interface to add to favorites and empty favorites.
 */
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState({
        drivers: [],
        constructors: [],
        circuits: []
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

/**
 * Custom hook that provides access to the favorites context.
 */
export const useFavorites = () => useContext(FavoritesContext);
