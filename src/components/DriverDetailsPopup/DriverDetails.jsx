import React, { useEffect, useState } from 'react';
import { useFavorites } from "../ContextProviders/FavoritesProvider";
import { useModal } from '../ContextProviders/ModalProvider';
import { fetchDriverByID } from "../../supabase/dataProvider";

import ModalHeader from "../ModalHeader";
import DaisyButton from '../DaisyButton';
import DriversDetailsContent from "./DriversDetailsContent";

const DriverDetails = ({ driverId }) => {
    const { addToFavorites } = useFavorites();
    const { openModal } = useModal();
    const [driver, setDriver] = useState(null);

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


    if (!driver) {
        return <div>Error: Driver with driverId: {driverId} not found</div>;
    }

    return null;
};

export default DriverDetails;