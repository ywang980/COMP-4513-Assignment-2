import React, { useEffect, useState } from 'react';
import { useFavorites } from "../ContextProviders/FavoritesProvider";
import { useModal } from '../ContextProviders/ModalProvider';
import { fetchConstructorByID } from "../../supabase/dataProvider";

import ModalHeader from "./ModalHeader";
import DaisyButton from '../General/DaisyButton';
import ConstructorDetailsContent from "./Content/ConstructorDetailsContent";

/**
 * Displays the details of a constructor.
 */
const ConstructorDetails = ({ constructorId }) => {
    const { addToFavorites } = useFavorites();
    const { openModal } = useModal();
    const [constructorData, setConstructorData] = useState(null);

    // Fetches the constructor data.
    useEffect(() => {
        const fetchData = async () => {
            const fetchedConstructorData = await fetchConstructorByID(constructorId);
            setConstructorData(fetchedConstructorData);
        }

        fetchData();
    }, [constructorId]);

    const handleAddToFavorites = () => {
        addToFavorites('constructors', constructorData.name);
    };

    // Opens a modal with the details once the data is available.
    useEffect(() => {
        if (constructorData) {
            openModal(
                <ModalHeader title="Constructor Details" buttons={[
                    <DaisyButton key="1" color="primary" onClick={handleAddToFavorites}>
                        Add Favorites
                    </DaisyButton>
                ]}
                />,
                <ConstructorDetailsContent constructor={constructorData} />
            );
        }
    }, [constructorData, openModal, handleAddToFavorites]);

    // Display an error message if no data available.
    if (!constructorData) {
        return <div>Error: Constructor with constructorId: {constructorId} not found</div>;
    }

    // Don't render anything if the another modal is already open.
    return null;
};

export default ConstructorDetails;