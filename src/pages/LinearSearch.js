import React, { useState, useEffect } from 'react';
import { linearSearch } from '../Components/algorithm/linearsearch';
import ArrayVisualizer from '../Components/ArrayViusalizer';
import Controls from '../Components/Controls';
import AlgorithmInfo from '../Components/AlgorithmInfo';
import CodeEditor from '../Components/data/CodeEditor';
import ScrollAnimationWrapper from '../Components/ScrollAnimationWrapper';

const LinearSearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [message, setMessage] = useState('Enter a target value and start search');
  const [speed, setSpeed] = useState(500);
  const [language, setLanguage] = useState('javascript');

  const generateArray = () => {
    const newArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 20) + 1);
    setArray(newArray);
    setCurrentIndex(-1);
    setMessage('New array generated. Enter target value');
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
      setIsSearching
    };
    
    linearSearch(array, parseInt(target), speed, updateState);
  };

  useEffect(() => { generateArray(); }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
           <ScrollAnimationWrapper>
       <h1 className="text-4xl font-bold text-center mb-8">
  <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-500">
     Linear Search Visualizer
  </span>
</h1>
</ScrollAnimationWrapper>
 
        <ScrollAnimationWrapper delay={200}>
        <Controls
          algorithm="linear"
          target={target}
          setTarget={setTarget}
          speed={speed}
          setSpeed={setSpeed}
          generateArray={generateArray}
          startSearch={startSearch}
          isSearching={isSearching}
        />
        </ScrollAnimationWrapper>
  
        <ScrollAnimationWrapper delay={400}>
        <ArrayVisualizer
          array={array}
          currentIndex={currentIndex}
          isSearching={isSearching}
        />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={600}>
        <AlgorithmInfo
          algorithm="linear"
          message={message}
        />
        </ScrollAnimationWrapper>

        
        <CodeEditor
          algorithm="linear"
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </div>
  );
};

export default LinearSearch;