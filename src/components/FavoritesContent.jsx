import React from 'react';
import { useFavorites } from './ContextProviders/FavoritesProvider';
import ListWithHeader from './ListWithHeader';

const FavoritesContent = () => {

    const { favorites } = useFavorites();
    const { drivers, constructors, circuits } = favorites;

    return (
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
            <div className="w-full md:w-1/3 border-b md:border-b-0">
                <ListWithHeader header="Drivers" elements={drivers} />
            </div>
            <div className="w-full md:w-1/3 border-b md:border-b-0">
                <ListWithHeader header="Constructors" elements={constructors} />
            </div>
            <div className="w-full md:w-1/3">
                <ListWithHeader header="Circuits" elements={circuits} />
            </div>
        </div>
    );
};

export default FavoritesContent;