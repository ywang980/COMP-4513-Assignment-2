import React from 'react';
import { YearProvider } from './YearProvider';
import { FavoritesProvider } from './FavoritesProvider';
import { ModalProvider } from './ModalProvider';

const AllProviders = ({ children }) => {
  return (
    <YearProvider>
      <FavoritesProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </FavoritesProvider>
    </YearProvider>
  );
};

export default AllProviders;