import React from 'react';
import { Button } from 'react-daisyui';

/**
 * DaisyButton is a reusable button component for modals.
 * @param {ReactNode} props.children The content to be displayed inside the button.
 * @param {Function} props.onClick The function to be executed when the button is
 * clicked.
 *
 * @returns {ReactElement} A styled button element with the provided content and
 * click handler.
 */
const DaisyButton = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} className="w-32 text-center flex items-center
    justify-center bg-white text-black">
      {children}
    </Button>
  );
};

export default DaisyButton;