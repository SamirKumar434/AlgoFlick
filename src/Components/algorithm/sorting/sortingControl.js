import React from 'react';

const SortingControls = ({ 
  onGenerateArray, 
  onStartSorting, 
  arraySize, 
  setArraySize, 
  speed, 
  setSpeed, 
  isSorting 
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-white mb-4 text-center"> Sorting Controls</h3>
      
      <div className="grid md:grid-cols-3 gap-6 items-center justify-items-center">
        {/* Array Size Control */}
        <div className="w-full max-w-xs">
          <label className="text-white text-sm mb-2 block text-center">Array Size</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="5"
              max="15"
              value={arraySize}
              onChange={(e) => setArraySize(parseInt(e.target.value))}
              disabled={isSorting}
              className="flex-1"
            />
            <span className="text-blue-300 font-mono text-lg w-8 text-center">
              {arraySize}
            </span>
          </div>
          <p className="text-gray-400 text-xs text-center mt-1">Max: 15 elements</p>
        </div>

        {/* Speed Control */}
        <div className="w-full max-w-xs">
          <label className="text-white text-sm mb-2 block text-center">Animation Speed</label>
          <select
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            disabled={isSorting}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 text-center"
          >
            <option value="800">Slow</option>
            <option value="500">Medium</option>
            <option value="300">Fast</option>
            <option value="100">Very Fast</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-xs">
          <label className="text-white text-sm mb-2 block text-center">Actions</label>
          <div className="flex gap-3 justify-center">
            <button
              onClick={onGenerateArray}
              disabled={isSorting}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-600 text-sm font-medium"
            >
              New Array
            </button>
            <button
              onClick={onStartSorting}
              disabled={isSorting}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-600 text-sm font-medium"
            >
              Start Sort
            </button>
          </div>
        </div>
      </div>

      {/* Visual Size Indicator */}
      <div className="mt-6 flex justify-center items-center gap-2">
        <span className="text-gray-400 text-sm">Smaller</span>
        <div className="flex gap-1">
          {[5, 10, 15].map((size) => (
            <div
              key={size}
              className={`w-3 h-3 rounded-full ${
                arraySize >= size ? 'bg-blue-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        <span className="text-gray-400 text-sm">Larger</span>
      </div>
    </div>
  );
};

export default SortingControls;