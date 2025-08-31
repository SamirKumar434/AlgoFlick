import React, { useState, useEffect } from 'react';
import { binarySearch } from '../Components/algorithm/binarysearch';
import ArrayVisualizer from '../Components/ArrayViusalizer';
import Controls from '../Components/Controls';
import AlgorithmInfo from '../Components/AlgorithmInfo';
import CodeEditor from '../Components/data/CodeEditor';
import ScrollAnimationWrapper from '../Components/ScrollAnimationWrapper';

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [mid, setMid] = useState(-1);
  const [message, setMessage] = useState('Generate a sorted array and enter target value');
  const [speed, setSpeed] = useState(500);
  const [language, setLanguage] = useState('javascript');

  // Generate sorted array for binary search
  const generateArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    newArray.sort((a, b) => a - b); // Sort the array
    setArray(newArray);
    setCurrentIndex(-1);
    setLow(0);
    setHigh(newArray.length - 1);
    setMid(-1);
    setMessage('Sorted array generated. Enter target value');
    setTarget('');
  };

  const startSearch = () => {
    if (!target) {
      setMessage('Please enter a target value');
      return;
    }
    
    const updateState = {
      setCurrentIndex,
      setMessage,
      setIsSearching,
      setLow,
      setHigh,
      setMid
    };
    
    binarySearch(array, parseInt(target), speed, updateState);
  };

  useEffect(() => { 
    generateArray(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper>
        <h1 className="text-4xl font-bold text-center mb-8">
  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-500">
     Binary Search Visualizer
  </span>
</h1>
</ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
        <Controls
          algorithm="binary"
          target={target}
          setTarget={setTarget}
          speed={speed}
          setSpeed={setSpeed}
          generateArray={generateArray}
          startSearch={startSearch}
          isSearching={isSearching}
        />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
        <ArrayVisualizer
          array={array}
          currentIndex={currentIndex}
          isSearching={isSearching}
          low={low}
          high={high}
          mid={mid}
        />
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper>
        <AlgorithmInfo
          algorithm="binary"
          message={message}
        />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
        <CodeEditor
          algorithm="binary"
          language={language}
          setLanguage={setLanguage}
        />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default BinarySearch;