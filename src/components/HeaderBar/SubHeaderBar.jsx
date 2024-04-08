import React from 'react';

/**
 * SubHeaderBar is a component that displays a subheader bar with customizable
 * alignment and style.
 *
 * @param {ReactNode} children The child components to be displayed within the subheader bar.
 * @param {string} alignment The alignment of the content within the subheader bar.
 * Can be 'left', 'right', or 'center'.
 * @param {object} style The styles to be applied to the subheader bar.
 */
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
