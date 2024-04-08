import React, { useEffect, useState } from 'react';
import { useFavorites } from "../ContextProviders/FavoritesProvider";
import { useModal } from '../ContextProviders/ModalProvider';
import { fetchCircuitById } from '../../supabase/dataProvider';

import ModalHeader from "../ModalHeader";
import DaisyButton from '../DaisyButton';
import CircuitDetailsContent from "./CircuitDetailsContent";

const CircuitDetails = ({ circuitId }) => {
    const { addToFavorites } = useFavorites();
    const { openModal } = useModal();
    const [circuit, setCircuit] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const circuitData = await fetchCircuitById(circuitId);
            setCircuit(circuitData);
        }

        fetchData();
    }, [circuitId]);

    const handleAddToFavorites = () => {
        addToFavorites('circuits', circuit.name);
    }

    useEffect(() => {
        if (circuit) {
            openModal(
                <ModalHeader title="Circuit Details" buttons={[
                    <DaisyButton key="1" color="primary" onClick={handleAddToFavorites}>
                        Add to Favorites
                    </DaisyButton>
                ]}
                />,
                <CircuitDetailsContent circuit={circuit} />
            );
        }
    }, [circuit, openModal, handleAddToFavorites]);

    if (!circuit) {
        return <div>Error: Circuit with circuitId: {circuitId} not found</div>;
    }

    return null;
};

export default CircuitDetails;