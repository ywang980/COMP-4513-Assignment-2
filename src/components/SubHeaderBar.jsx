import React from 'react';

const SubHeaderBar = ({ children, alignment, style }) => {
    const alignmentClass =
        alignment === 'left'
            ? 'justify-start'
            : alignment === 'right'
                ? 'justify-end'
                : 'justify-center';

    return (
        <div className={`w-1/3 p-4 text-white ${alignmentClass}`} style={style}>
            {children}
        </div>
    );
};

export default SubHeaderBar;
