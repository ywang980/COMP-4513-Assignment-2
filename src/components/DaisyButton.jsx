import React from 'react';
import { Button } from 'react-daisyui';

const ModalButton = ({ children, onClick }) => {
  return (
    <Button color="primary" onClick={onClick} className="w-32 text-center flex items-center justify-center">
      {children}
    </Button>
  );
};

export default ModalButton;