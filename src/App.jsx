import React, { useState, useEffect } from 'react';
import { Button } from 'react-daisyui';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import ForgotPasswordForm from './Components/ForgotPasswordForm/ForgotPasswordForm';

// the background image used for LoginForm, RegisterForm, and ForgotPasswordForm is from
// https://www.pexels.com/photo/a-formula-1-car-on-a-race-track-10807493/

const App = () => {
  const gridItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const [columnCount, setColumnCount] = useState(getColumnCount());

  function getColumnCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 'lg:grid-cols-4';
    } else if (screenWidth >= 768) {
      return 'md:grid-cols-3';
    } else {
      return 'sm:grid-cols-2';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*
  return (
    <div className={`grid ${columnCount} gap-4`}>
      {gridItems.map((item, index) => (
        <div key={index} className="border p-4">
          {item}
        </div>
      ))}
      <Button color="primary" className="mt-4">
        Click me!
      </Button>
    </div>
  );
  */
 return(
 <div>
<LoginForm />
 </div>
 )
};

export default App;