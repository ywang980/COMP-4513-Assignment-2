import React from 'react';
import { YearProvider } from './YearProvider';
import { RaceProvider } from './RaceProvider';
import { FavoritesProvider } from './FavoritesProvider';
import { ModalProvider } from './ModalProvider';

/**
 * Component to wrap all required context providers.
 */
const AllProviders = ({ children }) => {
  return (
    <YearProvider>
      <RaceProvider>
        <FavoritesProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </FavoritesProvider>
      </RaceProvider>
    </YearProvider>
  );
};

export default AllProviders;