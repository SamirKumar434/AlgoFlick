import  React, { useState } from 'react';
import { sortingAlgorithms } from '../Components/algorithm/sortingAlgorithm';
import ArrayVisualizer from '../Components/algorithm/sorting/ArrayVisualizer';
import SortingControls from '../Components/algorithm/sorting/sortingControl';
import SortingInfo from '../Components/algorithm/sorting/SortingInfo';
import ScrollAnimationWrapper from '../Components/ScrollAnimationWrapper';
import useResponsiveArray from '../Components/algorithm/userResponsive';

const InsertionSort = () => {
  // Use the responsive hook to get array size based on screen width
  const responsiveArraySize = useResponsiveArray(15);
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [message, setMessage] = useState('Generate an array to begin sorting');
  const [currentIndex, setCurrentIndex] = useState(-1);

  const generateArray = (size = responsiveArraySize) => {
    const newArray = Array.from({ length: size }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setCurrentIndex(-1);
    setMessage('New array generated. Ready to sort!');
  };

  const startSorting = async () => {
    if (array.length === 0) {
      setMessage('Please generate an array first');
      return;
    }

    const updateState = {
      setArray,
      setCurrentIndex,
      setMessage,
      setIsSorting
    };

    await sortingAlgorithms.insertionSort(array, speed, updateState);
  };

  // Generate array on component mount AND when responsiveArraySize changes
  useEffect(() => {
    generateArray(responsiveArraySize);
  }, [responsiveArraySize]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-white bg-clip-text text-transparent">
              Insertion Sort Visualizer
            </span>
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper>
          <SortingControls
            onGenerateArray={() => generateArray(responsiveArraySize)}
            onStartSorting={startSorting}
            arraySize={responsiveArraySize}
            setArraySize={() => {}} // This is now handled by the hook
            speed={speed}
            setSpeed={setSpeed}
            isSorting={isSorting}
          />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <ArrayVisualizer
            array={array}
            currentIndex={currentIndex}
            isSorting={isSorting}
          />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <SortingInfo
            message={message}
            algorithm="insertion"
            arraySize={responsiveArraySize}
          />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default InsertionSort;