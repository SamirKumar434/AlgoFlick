
//changes done here
import React from 'react';

const ArrayVisualizer = ({ array, currentIndex, isSearching, low, high, mid }) => {
  // Calculate dynamic width based on array length
  const getElementWidth = () => {
    if (array.length <= 5) return 'w-12'; // 48px for 5 or fewer elements
    if (array.length <= 8) return 'w-10'; // 40px for 6-8 elements
    if (array.length <= 12) return 'w-8';  // 32px for 9-12 elements
    return 'w-6'; // 24px for more than 12 elements
  };

  // Calculate dynamic height based on array length
  const getElementHeight = () => {
    if (array.length <= 5) return 'h-12'; // 48px
    if (array.length <= 8) return 'h-10'; // 40px
    if (array.length <= 12) return 'h-8';  // 32px
    return 'h-6'; // 24px
  };

  // Calculate font size based on element size
  const getFontSize = () => {
    if (array.length <= 5) return 'text-base'; // 16px
    if (array.length <= 8) return 'text-sm';   // 14px
    if (array.length <= 12) return 'text-xs';  // 12px
    return 'text-xs'; // 12px (very small)
  };

  const elementWidth = getElementWidth();
  const elementHeight = getElementHeight();
  const fontSize = getFontSize();

  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-6">
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 text-center"> Array Visualization</h2>
      
      <div className="flex justify-center items-end gap-1 sm:gap-2 min-h-[100px] sm:min-h-[120px] overflow-x-auto pb-2">
        {array.map((value, index) => {
          let borderColor = 'border-gray-500';
          let bgColor = 'bg-gray-700';
          
          if (index === currentIndex) {
            borderColor = 'border-blue-500';
            bgColor = 'bg-blue-600';
          } else if (index === mid) {
            borderColor = 'border-purple-500';
            bgColor = 'bg-purple-600';
          } else if (index >= low && index <= high) {
            borderColor = 'border-green-400';
            bgColor = 'bg-gray-600';
          }
          
          return (
            <div key={index} className="flex flex-col items-center min-w-[20px]">
              <div className={`${elementWidth} ${elementHeight} flex items-center justify-center rounded-lg border-2 font-bold ${bgColor} ${borderColor} text-white ${fontSize}`}>
                {value}
              </div>
              <span className="text-[10px] xs:text-xs text-gray-400 mt-1">[{index}]</span>
              <div className="h-4 mt-1">
                {index === low && <span className="text-[10px] xs:text-xs text-green-400">low</span>}
                {index === high && <span className="text-[10px] xs:text-xs text-red-400">high</span>}
                {index === mid && <span className="text-[10px] xs:text-xs text-purple-400">mid</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Responsive Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-4 text-[10px] xs:text-xs text-white">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-600 rounded border border-blue-500"></div>
          <span>Current</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-purple-600 rounded border border-purple-500"></div>
          <span>Mid</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-600 rounded border border-green-400"></div>
          <span>Range</span>
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualizer;