import React from 'react';

/**
 * ListWithHeader is a component that displays a list with a header.
 *
 * @param {string} props.header The header of the list.
 * @param {Array} props.elements The elements to be displayed in the list.
 */
const ListWithHeader = ({ header, elements }) => {
    return (
        <div className="list-container">
            <h2 className="text-center text-2xl font-bold mb-4">{header}</h2>

            <div className="list-content overflow-auto">
                {/* If elements exist, map through them and display each one.
                Otherwise, display a default message. */}
                {elements && elements.length > 0 ? (
                    elements.map((item, index) => (
                        <div key={index} className="p-4 text-center">
                            {item}
                        </div>
                    ))
                ) : (
                    <div className="p-4 text-center">
                        No favorites added.
                    </div>
                )}
            </div>

        </div>
    );
};

export default ListWithHeader;