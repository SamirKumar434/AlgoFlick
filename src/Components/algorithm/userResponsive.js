import { useState, useEffect } from 'react';

const useResponsiveArray = (defaultSize = 10) => {
  const [arraySize, setArraySize] = useState(defaultSize);

  useEffect(() => {
    const calculateSize = () => {
      const screenWidth = window.innerWidth;
      // Define breakpoints and corresponding array sizes
      if (screenWidth < 550) { // Very small devices
        setArraySize(5);
      } else if (screenWidth < 768) { // Small devices (phones)
        setArraySize(8);
      } else if (screenWidth < 1024) { // Medium devices (tablets)
        setArraySize(12);
      } else { // Large devices (desktops)
        setArraySize(15); // Or your original defaultSize
      }
    };

    // Calculate initial size
    calculateSize();

    // Add event listener to update on window resize
    window.addEventListener('resize', calculateSize);

    // Cleanup
    return () => window.removeEventListener('resize', calculateSize);
  }, [defaultSize]);

  return arraySize;
};

export default useResponsiveArray;