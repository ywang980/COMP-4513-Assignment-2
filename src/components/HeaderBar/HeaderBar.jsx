import React from 'react';
import { useModal } from '../ContextProviders/ModalProvider';
import { useFavorites } from '../ContextProviders/FavoritesProvider';

import SubHeaderBar from './SubHeaderBar';
import SeasonSelector from './SeasonSelector';
import DaisyButton from '../General/DaisyButton';
import FavoritesContent from '../Popups/Content/FavoritesContent';
import AboutCard from '../Popups/Content/AboutCard';
import ModalHeader from '../Popups/ModalHeader';

const headerStyles = {
    border: '1px solid black',
};

const titleStyles = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
}

/**
 * HeaderBar is a component that displays a header bar with 3 sub-components
 * containing a season selector, title, and buttons for favorites and about,
 * respectively.
 */
const HeaderBar = () => {
    const { openModal } = useModal();
    const { emptyFavorites, isFavoritesEmpty } = useFavorites();

    // Handle the click event for the favorites button
    const handleFavoritesClick = () => {
        isFavoritesEmpty()
            ? null
            : openModal(
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

    // Handle the click event for the about button
    const handleAboutClick = () => {
        openModal(
            <ModalHeader title="About" />,
            <AboutCard/>
        );

    };

    return (
        <div className="bg-gray-800 py-4" style={headerStyles}>
            <div className="flex">
                <SubHeaderBar alignment="left" flexClass="flex-grow">
                    <SeasonSelector />
                </SubHeaderBar>
                <SubHeaderBar flexClass="flex-grow">
                    <div className="flex justify-center items-center w-full"
                        style={titleStyles}>
                        RacingLineAnalytics
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