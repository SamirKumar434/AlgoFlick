import React from 'react';

const StackVisualizer = ({ stack, isOperating, peekValue }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Stack Visualization</h2>
      
      <div className="flex flex-col-reverse items-center min-h-80 bg-gray-900 rounded-lg p-4 border-2 border-gray-700">
        {stack.length === 0 ? (
          <div className="text-gray-500 text-center py-16">
            <p className="text-lg">Stack is empty</p>
            <p className="text-sm">Use Push to add elements</p>
          </div>
        ) : (
          <div className="w-full flex flex-col-reverse items-center space-y-reverse space-y-2">
            {stack.map((item, index) => {
              const displayIndex = stack.length - 1 - index;
              return (
                <div
                  key={index}
                  className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 font-bold text-white transition-all duration-300
                    ${displayIndex === stack.length - 1 // Top element (last pushed)
                      ? peekValue !== null && peekValue === item
                        ? 'bg-red-500 border-red-400 transform scale-110' // Red for peek
                        : 'bg-green-500 border-green-400 transform scale-110' // Green for top
                      : 'bg-blue-600 border-blue-500' // Blue for others
                    }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      <div className="mt-4 text-center text-gray-400">
        <p>Top → Bottom (LIFO - Last In, First Out)</p>
        <p>Size: {stack.length}</p>
        {peekValue !== null && (
          <p className="text-red-400 font-semibold">Peeked: {peekValue}</p>
        )}
      </div>
    </div>
  );
};

export default StackVisualizer;