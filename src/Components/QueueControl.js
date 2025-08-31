import React, { useState } from 'react';

const QueueControls = ({ onEnqueue, onDequeue, onPeek, isOperating, speed, setSpeed, queue }) => {
  const [enqueueValue, setEnqueueValue] = useState('');

  const handleEnqueue = () => {
    const value = parseInt(enqueueValue);
    if (!isNaN(value)) {
      onEnqueue(value);
      setEnqueueValue('');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-white mb-4 text-center"> Queue Operations</h3>
      
      <div className="flex flex-wrap gap-4 items-center justify-center mb-4">
        {/* Enqueue Operation */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={enqueueValue}
            onChange={(e) => setEnqueueValue(e.target.value)}
            placeholder="Enter value"
            className="px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white w-20"
            disabled={isOperating}
          />
          <button
            onClick={handleEnqueue}
            disabled={isOperating || !enqueueValue.trim()}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-600"
          >
            Enqueue
          </button>
        </div>

        {/* Dequeue Operation */}
        <button
          onClick={onDequeue}
          disabled={isOperating || !queue || queue.length === 0}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-600"
        >
          Dequeue
        </button>

        {/* Peek Operation */}
        <button
          onClick={onPeek}
          disabled={isOperating || !queue || queue.length === 0}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 disabled:bg-gray-600"
        >
          Peek Front
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

export default QueueControls;