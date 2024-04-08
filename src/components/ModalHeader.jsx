import React from 'react';
import { useModal } from './ContextProviders/ModalProvider';
import ModalButton from './DaisyButton';

/**
 * ModalHeader is a component that displays a header for a modal.
 *
 * @param {string} title The title to be displayed as the header of the modal.
 * @param {Array} buttons An array of buttons to be displayed on the right side of the header.
 */
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
                    {/* Map through the buttons array and display each button */}
                    {buttons && buttons.map((button, index) =>
                        React.cloneElement(button, { key: index })
                    )}
                </div>
                {/* Add a Close button that closes the modal when clicked */}
                <ModalButton onClick={closeModal}>Close</ModalButton>
            </div>
        </div>
    );
};

export default ModalHeader;
