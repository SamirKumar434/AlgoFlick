import React from 'react';

const SortingInfo = ({ message, algorithm, arraySize }) => {
  const algorithmInfo = {
    bubble: {
      complexity: 'O(n²)',
      description: 'Repeatedly swaps adjacent elements if they are in wrong order'
    },
    selection: {
      complexity: 'O(n²)', 
      description: 'Finds minimum element and swaps it with the first unsorted element'
    },
    insertion: {
      complexity: 'O(n²)',
      description: 'Builds sorted array one item at a time by inserting elements in correct position'
    },
    merge: {
      complexity: 'O(n log n)',
      description: 'Divide and conquer algorithm that divides array into halves, sorts them, and merges back'
    },
    quick: {
      complexity: 'O(n log n) average, O(n²) worst',
      description: 'Divide and conquer algorithm that selects a pivot and partitions the array around it'
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3"> Sorting Basics</h3>
          <div className="text-blue-200 space-y-2 text-sm">
            <p><strong>Algorithm:</strong> {algorithmInfo[algorithm]?.description}</p>
            <p><strong>Time Complexity:</strong> {algorithmInfo[algorithm]?.complexity}</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            <p><strong>Array Size:</strong> {arraySize} elements</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3"> Status</h3>
          <div className="bg-blue-900 p-4 rounded-lg">
            <p className="text-blue-200">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingInfo;