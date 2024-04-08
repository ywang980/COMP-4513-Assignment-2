import React, { useEffect, useState } from 'react';
import { useFavorites } from "../ContextProviders/FavoritesProvider";
import { useModal } from '../ContextProviders/ModalProvider';
import { fetchConstructorByID } from "../../supabase/dataProvider";

import ModalHeader from "../ModalHeader";
import DaisyButton from '../DaisyButton';
import ConstructorDetailsContent from "./ConstructorDetailsContent";

const ConstructorDetails = ({ constructorId }) => {
    const { addToFavorites } = useFavorites();
    const { openModal } = useModal();
    const [constructorData, setConstructorData] = useState(null);

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


    if (!constructorData) {
        return <div>Error: Constructor with constructorId: {constructorId} not found</div>;
    }

    return null;
};

export default ConstructorDetails;