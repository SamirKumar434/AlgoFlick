import React from 'react';

const Controls = ({ target, setTarget, speed, setSpeed, generateArray, startSearch, isSearching }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Target value"
          className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white w-32"
          disabled={isSearching}
        />

        <select
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
          className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
          disabled={isSearching}
        >
          <option value="1000">Slow</option>
          <option value="500">Medium</option>
          <option value="200">Fast</option>
        </select>

        <button
          onClick={startSearch}
          disabled={isSearching || !target}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-600"
        >
          {isSearching ? 'Searching...' : 'Start Search'}
        </button>

        <button
          onClick={generateArray}
          disabled={isSearching}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-600"
        >
          New Array
        </button>
      </div>
    </div>
  );
};

export default Controls;