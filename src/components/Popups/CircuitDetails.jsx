import React, { useEffect, useState } from 'react';
import { useFavorites } from "../ContextProviders/FavoritesProvider";
import { useModal } from '../ContextProviders/ModalProvider';
import { fetchCircuitByID } from '../../supabase/dataProvider';

import ModalHeader from "./ModalHeader";
import DaisyButton from '../General/DaisyButton';
import CircuitDetailsContent from "./Content/CircuitDetailsContent";

/**
 * Displays the details of a circuit.
 */
const CircuitDetails = ({ circuitId }) => {
    const { addToFavorites } = useFavorites();
    const { openModal } = useModal();
    const [circuit, setCircuit] = useState(null);

    // Fetches the circuit data.
    useEffect(() => {
        const fetchData = async () => {
            const circuitData = await fetchCircuitByID(circuitId);
            setCircuit(circuitData);
        }

        fetchData();
    }, [circuitId]);

    const handleAddToFavorites = () => {
        addToFavorites('circuits', circuit.name);
    }

    // Opens a modal with the details once the data is available.
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

    // Display an error message if no data available.
    if (!circuit) {
        return <div>Error: Circuit with circuitId: {circuitId} not found</div>;
    }

    // Don't render anything if the another modal is already open.
    return null;
};

export default CircuitDetails;