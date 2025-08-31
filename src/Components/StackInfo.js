import React from 'react';

const StackInfo = ({ message, operationCount }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3"> Stack Basics</h3>
          <ul className="text-blue-200 space-y-2 text-sm">
            <li>• <strong>LIFO</strong> - Last In, First Out</li>
            <li>• <strong>Push</strong>: Add element to top</li>
            <li>• <strong>Pop</strong>: Remove element from top</li>
            <li>• <strong>Peek</strong>: View top element</li>
            <li>• Time Complexity: O(1) for all operations</li>
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

export default StackInfo;