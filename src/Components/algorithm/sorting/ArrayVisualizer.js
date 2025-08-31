/// changes have been made 31aug
import React from 'react';

const ArrayVisualizer = ({ 
  array, 
  currentIndex, 
  comparingIndex, 
  minIndex, 
  isSorting,
  mergeState,
  quickState 
}) => {
  // Calculate max value for proportional height, with a minimum of 10
  const maxValue = Math.max(...array, 10);
  
  // Calculate bar width as a percentage of the container
  const barWidthPercent = Math.max(3, 90 / array.length); // Min width 3% of container

  const getBarColor = (index) => {
    if (!isSorting) return 'bg-green-400';
    
    if (mergeState) {
      if (index >= mergeState.leftStart && index <= mergeState.leftEnd) return 'bg-blue-400';
      if (index >= mergeState.rightStart && index <= mergeState.rightEnd) return 'bg-purple-400';
      if (index === mergeState.mergingIndex) return 'bg-yellow-500';
    }
    
    if (quickState) {
      if (index === quickState.pivotIndex) return 'bg-red-500';
      if (index === quickState.comparingIndex) return 'bg-yellow-500';
      if (index === quickState.currentPartition) return 'bg-green-500';
      if (quickState.currentLow !== undefined && index >= quickState.currentLow && 
          index <= quickState.currentHigh) return 'bg-blue-400';
    }
    
    if (index === currentIndex) return 'bg-red-500';
    if (index === comparingIndex) return 'bg-yellow-500';
    if (index === minIndex) return 'bg-green-500';
    
    return 'bg-blue-600';
  };

  const getBarHeight = (value) => {
    const minHeight = 30;
    return Math.max(minHeight, (value / maxValue) * 180);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-6">
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center">Array Visualization</h2>
      
      {/* Horizontal scroll container for very small screens */}
      <div className="overflow-x-auto py-2">
        <div className="flex items-end justify-center gap-1 sm:gap-2 min-h-60 sm:min-h-80 bg-gray-900 rounded-lg p-4 sm:p-6 border-2 border-gray-700 min-w-fit mx-auto">
          {array.map((value, index) => (
            <div key={index} className="flex flex-col items-center transition-all duration-300">
              <div
                className={`rounded-t-lg transition-all duration-300 ${getBarColor(index)} border border-white flex items-end justify-center`}
                style={{ 
                  height: `${getBarHeight(value)}px`,
                  width: `${barWidthPercent}%`,
                  minWidth: '28px' // Slightly reduced minimum width for mobile
                }}
              >
                <div className="text-white font-bold text-center text-[10px] sm:text-xs mb-1">
                  {value}
                </div>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2">[{index}]</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend with responsive grid */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-[10px] sm:text-xs text-white">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded"></div>
          <span>Unsorted</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded"></div>
          <span>Pivot/Current</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded"></div>
          <span>Comparing</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded"></div>
          <span>Partition/Min</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded"></div>
          <span>Left Subarray</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded"></div>
          <span>Right Subarray</span>
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualizer;