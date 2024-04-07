import React from 'react';

const ListWithHeader = ({ header, elements }) => {
    return (
        <div className="list-container">
            <h2 className="text-center text-2xl font-bold mb-4">{header}</h2>
            <div className="list-content overflow-auto">
                {elements ? (
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