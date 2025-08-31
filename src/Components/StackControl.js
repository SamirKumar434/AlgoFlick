import React, { useState } from 'react';

const StackControls = ({ onPush, onPop, onPeek, isOperating, speed, setSpeed }) => {
  const [pushValue, setPushValue] = useState('');

const handlePush = () => {
  const value = parseInt(pushValue);
  if (!isNaN(value)) {
    onPush(value);
    setPushValue('');
  }
};

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-white mb-4 text-center"> Stack Operations</h3>
      
      <div className="flex flex-wrap gap-4 items-center justify-center mb-4">
        {/* Push Operation */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={pushValue}
            onChange={(e) => setPushValue(e.target.value)}
            placeholder="Enter value"
            className="px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white w-20"
            disabled={isOperating}
          />
          <button
            onClick={handlePush}
            disabled={isOperating || !pushValue.trim()}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-600"
          >
            Push
          </button>
        </div>

        {/* Pop Operation */}
        <button
          onClick={onPop}
          disabled={isOperating}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-600"
        >
          Pop
        </button>

        {/* Peek Operation */}
        <button
          onClick={onPeek}
          disabled={isOperating}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 disabled:bg-gray-600"
        >
          Peek
        </button>
      </div>

      {/* Speed Control */}
      <div className="flex items-center justify-center gap-3">
        <span className="text-white">Speed:</span>
        <select
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
          className="px-3 py-1 border border-gray-600 rounded bg-gray-700 text-white"
          disabled={isOperating}
        >
          <option value="800">Slow</option>
          <option value="500">Medium</option>
          <option value="300">Fast</option>
        </select>
      </div>
    </div>
  );
};

export default StackControls;