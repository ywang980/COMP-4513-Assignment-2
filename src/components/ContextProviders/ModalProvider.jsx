import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

/**
 * ModalProvider is a component that maintains the state for modal operations.
 * It provides an interface to open and close the modal, as well as to set its content.
 */
export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [header, setHeader] = useState(null);
    const [content, setContent] = useState(null);

    const openModal = (header, content) => {
        setIsOpen(true);
        setHeader(header);
        setContent(content);
    };

    const closeModal = () => {
        setIsOpen(false);
        setHeader(null);
        setContent(null);
    };

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, content, header }}>
            {children}
            {/* If the modal is open, render a modal with the provided header and content */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-400 rounded shadow-lg w-full h-full md:w-3/4 md:h-3/4">
                        <div className="h-16 border-b-2 border-gray-200">{header}</div>
                        <div className="h-full overflow-auto">{content}</div>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

/**
 * Custom hook that provides access to the modal context.
 */
export const useModal = () => useContext(ModalContext);