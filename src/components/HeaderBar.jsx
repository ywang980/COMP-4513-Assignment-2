import React from 'react';

import DaisyButton from './DaisyButton';
import { useModal } from './ModalProvider';
import ModalHeader from './ModalHeader';

import SubHeaderBar from './SubHeaderBar';
import SeasonSelector from './SeasonSelector';

import FavoritesContent from './FavoritesContent';

const favoritesData = {
    drivers: ["Driver 1", "Driver 2", "Driver 3"],
    constructors: ["Constructor 1", "Constructor 2", "Constructor 3"],
    circuits: null
};

const headerStyles = {
    border: '1px solid black',
};

const titleStyles = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
}

const HeaderBar = () => {
    const { openModal, closeModal } = useModal();

    const handleFavoritesClick = () => {
        openModal(
            <ModalHeader
                title="Favorites"
                buttons={[
                    <DaisyButton key="1" color="primary" onClick={() => alert("Complete this later!")}>
                        Additional Button
                    </DaisyButton>
                ]}
            />,
            // <div>Favorites content</div>
            <FavoritesContent {...favoritesData} />
        );
    };

    const handleAboutClick = () => {
        openModal(
            <ModalHeader title="About" />,
            <div>About content</div>
        );
    };

    return (
        <div className="bg-gray-800 py-4" style={headerStyles}>
            <div className="flex">
                <SubHeaderBar alignment="left" flexClass="flex-grow">
                    <SeasonSelector />
                </SubHeaderBar>
                <SubHeaderBar flexClass="flex-grow">
                    <div className="flex justify-center items-center w-full" style={titleStyles}>
                        F1 Dashboard Project
                    </div>
                </SubHeaderBar>
                <SubHeaderBar alignment="right" flexClass="flex-grow">
                    <div className="flex justify-end space-x-4">
                        <DaisyButton onClick={handleFavoritesClick}>Favorites</DaisyButton>
                        <DaisyButton onClick={handleAboutClick}>About</DaisyButton>
                    </div>
                </SubHeaderBar>
            </div>
        </div>
    );
};

export default HeaderBar;