import React from 'react';

const AlgorithmInfo = ({ algorithm, message }) => {
  const algorithmInfo = {
    linear: {
      complexity: 'O(n)',
      description: 'Checks each element sequentially until found'
    },
    binary: {
      complexity: 'O(log n)', 
      description: 'Requires sorted array, divides search space in half each time'
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Current Algorithm</h3>
          <p className="text-blue-200">{algorithmInfo[algorithm]?.description}</p>
          <p className="text-green-300 mt-2">Time Complexity: {algorithmInfo[algorithm]?.complexity}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-2"> Status</h3>
          <div className="bg-blue-900 p-3 rounded-lg">
            <p className="text-blue-200">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmInfo;