import React, { useEffect, useState } from 'react';
import { useFavorites } from "../ContextProviders/FavoritesProvider";
import { useModal } from '../ContextProviders/ModalProvider';
import { fetchDriverByID } from "../../supabase/dataProvider";

import ModalHeader from "./ModalHeader";
import DaisyButton from '../General/DaisyButton';
import DriversDetailsContent from "./Content/DriversDetailsContent";

/**
 * Displays the details of a driver.
 */
const DriverDetails = ({ driverId }) => {
    const { addToFavorites } = useFavorites();
    const { openModal } = useModal();
    const [driver, setDriver] = useState(null);

    // Fetches the driver data.
    useEffect(() => {
        const fetchData = async () => {
            const driverData = await fetchDriverByID(driverId);
            setDriver(driverData);
        }

        fetchData();
    }, [driverId]);

    const handleAddToFavorites = () => {
        if (driver) {
            addToFavorites('drivers', driver.name);
        }
    };

    // Opens a modal with the details once the data is available.
    useEffect(() => {
        if (driver) {
            openModal(
                <ModalHeader title="Driver Details" buttons={[
                    <DaisyButton key="1" color="primary" onClick={handleAddToFavorites}>
                        Add Favorites
                    </DaisyButton>
                ]}
                />,
                <DriversDetailsContent driver={driver} />
            );
        }
    }, [driver, openModal, handleAddToFavorites]);

    // Display an error message if no data available.
    if (!driver) {
        return <div>Error: Driver with driverId: {driverId} not found</div>;
    }
    
    // Don't render anything if the another modal is already open.
    return null;
};

export default DriverDetails;