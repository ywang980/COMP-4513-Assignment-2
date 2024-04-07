import React, { useState, useEffect } from 'react';
import { Button } from 'react-daisyui';

import { ModalProvider } from './components/ModalProvider';
import HeaderBar from './components/HeaderBar';


// const App = () => {
//   return (
//     <ModalProvider>
//       <HeaderBar />
//       {/* other components */}
//     </ModalProvider>
//   );
// }

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
};

export default App;