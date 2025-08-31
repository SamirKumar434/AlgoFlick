import React from 'react';

const QueueInfo = ({ message, operationCount }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3"> Queue Basics</h3>
          <ul className="text-blue-200 space-y-2 text-sm">
            <li>• <strong>FIFO</strong> - First In, First Out</li>
            <li>• <strong>Enqueue</strong>: Add element to rear</li>
            <li>• <strong>Dequeue</strong>: Remove element from front</li>
            <li>• <strong>Peek</strong>: View front element</li>
            <li>• Time Complexity: O(1) for all operations</li>
            <li>• Used in: BFS, scheduling, buffering</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3"> Status</h3>
          <div className="bg-blue-900 p-4 rounded-lg">
            <p className="text-blue-200 mb-2">{message}</p>
            <p className="text-green-300">Operations performed: {operationCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueInfo;