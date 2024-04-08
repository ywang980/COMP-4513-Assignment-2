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
        paddingLeft: '5px',
        color: '#666',
        width: '100%', // Make the title take the full width
    };

    const buttonStyles = {
        paddingTop: '5px', // Add padding to the top of the buttons
        paddingRight: '5px',
    };

    return (
        <div className="flex justify-between items-center w-full">
            <div style={titleStyles}>
                <h2>{title}</h2>
            </div>
            <div style={buttonStyles} className="flex justify-end space-x-4">
                {/* Map through the buttons array and display each button */}
                {buttons && buttons.map((button, index) =>
                    React.cloneElement(button, { key: index })
                )}
                {/* Add a Close button that closes the modal when clicked */}
                <ModalButton  onClick={closeModal}>Close</ModalButton>
            </div>
        </div>
    );
};

export default ModalHeader