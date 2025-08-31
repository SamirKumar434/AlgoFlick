import React from 'react';

const QueueVisualizer = ({ queue, isOperating, frontHighlight, rearHighlight }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-white mb-4 text-center"> Queue Visualization</h2>
      
      <div className="flex items-center justify-center min-h-60 bg-gray-900 rounded-lg p-4 border-2 border-gray-700">
        {queue.length === 0 ? (
          <div className="text-gray-500 text-center">
            <p className="text-lg">Queue is empty</p>
            <p className="text-sm">Use Enqueue to add elements</p>
          </div>
        ) : (
          <div className="flex items-center gap-3 overflow-x-auto pb-4">
            {queue.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 font-bold text-white transition-all duration-300
                    ${index === 0 && frontHighlight
                      ? 'bg-red-500 border-red-400 transform scale-110' // Red for front peek
                      : index === 0
                      ? 'bg-green-500 border-green-400' // Green for front
                      : index === queue.length - 1 && rearHighlight
                      ? 'bg-blue-500 border-blue-400 transform scale-110' // Blue for rear highlight
                      : index === queue.length - 1
                      ? 'bg-blue-600 border-blue-500' // Blue for rear
                      : 'bg-gray-600 border-gray-500' // Gray for others
                    }`}
                >
                  {item}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  {index === 0 && 'FRONT'}
                  {index === queue.length - 1 && 'REAR'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-4 text-center text-gray-400">
        <p>Front → Rear (FIFO - First In, First Out)</p>
        <p>Size: {queue.length}</p>
      </div>
    </div>
  );
};

export default QueueVisualizer;