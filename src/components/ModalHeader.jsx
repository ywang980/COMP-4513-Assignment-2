import React from 'react';
import { Button } from 'react-daisyui';
import { useModal } from './ModalProvider';

import ModalButton from './DaisyButton';

const ModalHeader = ({ title, buttons }) => {
    const { closeModal } = useModal();

    const titleStyles = {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#666',
    };

    return (
        <div className="flex justify-between items-center w-full">
            <div className="w-1/2">
                <h2 style={titleStyles}>{title}</h2>
            </div>
            <div className="w-1/2 flex justify-end space-x-4">
                <div className="flex space-x-4">
                    {buttons && buttons.map((button, index) =>
                        React.cloneElement(button, { key: index })
                    )}
                </div>
                <ModalButton onClick={closeModal}>Close</ModalButton>
            </div>
        </div>
    );
};

export default ModalHeader;