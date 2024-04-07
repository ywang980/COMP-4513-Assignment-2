import React from 'react';

import DaisyButton from './DaisyButton';
import { useModal } from './ContextProviders/ModalProvider';
import ModalHeader from './ModalHeader';

import SubHeaderBar from './SubHeaderBar';
import SeasonSelector from './SeasonSelector';

import { useFavorites } from './ContextProviders/FavoritesProvider';
import FavoritesContent from './FavoritesContent';

const headerStyles = {
    border: '1px solid black',
};

const titleStyles = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
}

const HeaderBar = () => {
    const { openModal } = useModal();
    const { emptyFavorites } = useFavorites();

    const handleFavoritesClick = () => {
        openModal(
            <ModalHeader
                title="Favorites"
                buttons={[
                    <DaisyButton key="1" color="primary" onClick={emptyFavorites}>
                        Empty Favorites
                    </DaisyButton>
                ]}
            />,
            <FavoritesContent />
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