import React, { createContext, useState, useContext } from 'react';

export const FavoritesContext = createContext();

/**
 * FavoritesProvider is a component that maintains the state for favorites data.
 * It provides an interface to add to favorites and empty favorites. There is
 * also a method to check if favorites is empty.
 */
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState({
        drivers: [],
        constructors: [],
        circuits: []
    });

    const addToFavorites = (category, item) => {
        setFavorites(prevFavorites => {
            // Check if the item already exists in the favorites
            if (!prevFavorites[category].includes(item)) {
                // If it doesn't exist, add it to the favorites
                return {
                    ...prevFavorites,
                    [category]: [...prevFavorites[category], item]
                };
            }
            // If it already exists, return the previous favorites
            return prevFavorites;
        });
    };


    const emptyFavorites = () => {
        setFavorites({
            drivers: [],
            constructors: [],
            circuits: []
        });
    };

    const isFavoritesEmpty = () => {
        return favorites.drivers.length == 0 &&
            favorites.constructors.length == 0 &&
            favorites.circuits.length == 0;
    };

    return (
        <FavoritesContext.Provider value={{
            favorites, setFavorites, addToFavorites,
            emptyFavorites, isFavoritesEmpty
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};

/**
 * Custom hook that provides access to the favorites context.
 */
export const useFavorites = () => useContext(FavoritesContext);