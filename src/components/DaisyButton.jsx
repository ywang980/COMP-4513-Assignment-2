import React from 'react';
import { Button } from 'react-daisyui';

const ModalButton = ({ children, onClick }) => {
  return (
    <Button  onClick={onClick} className="w-32 text-center flex items-center justify-center bg-white text-black">
      {children}
    </Button>
  );
};

export default ModalButton;