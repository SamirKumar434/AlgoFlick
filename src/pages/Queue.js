import React, { useState } from 'react';
import { queueOperations } from '../Components/algorithm/queueOperation';
import QueueVisualizer from '../Components/QueueVisualizer';
import QueueControls from '../Components/QueueControl';
import QueueInfo from '../Components/QueueInfo';
import ScrollAnimationWrapper from '../Components/UseScrollAnimation';



const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [isOperating, setIsOperating] = useState(false);
  const [message, setMessage] = useState('Welcome! Start queue operations');
  const [speed, setSpeed] = useState(500);
  const [operationCount, setOperationCount] = useState(0);
  const [frontHighlight, setFrontHighlight] = useState(false);
  const [rearHighlight, setRearHighlight] = useState(false);

  const handleEnqueue = async (value) => {
    setRearHighlight(true);
    await queueOperations.enqueue(queue, setQueue, value, speed, {
      setMessage,
      setIsOperating
    });
    setRearHighlight(false);
    setOperationCount(prev => prev + 1);
  };

  const handleDequeue = async () => {
    await queueOperations.dequeue(queue, setQueue, speed, {
      setMessage,
      setIsOperating,
      setFrontHighlight
    });
    setOperationCount(prev => prev + 1);
  };

  const handlePeek = async () => {
    await queueOperations.peek(queue, speed, {
      setMessage,
      setFrontHighlight
    });
    setOperationCount(prev => prev + 1);
  };

  return (
 <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper>
<h1 className="text-4xl font-bold text-center mb-8">
  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:drop-shadow-[0_0_35px_rgba(139,92,246,0.9)] transition-all duration-500">
     Queue Visualizer
  </span>
</h1>
</ScrollAnimationWrapper>
  
        <ScrollAnimationWrapper>
        <QueueVisualizer
          queue={queue}
          isOperating={isOperating}
          frontHighlight={frontHighlight}
          rearHighlight={rearHighlight}
        />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
        <QueueControls
      onEnqueue={handleEnqueue}
      onDequeue={handleDequeue}
      onPeek={handlePeek}
      isOperating={isOperating}
      queue={queue} // Add this line to pass the queue
      speed={speed}
      setSpeed={setSpeed}
      />
      </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper>
        <QueueInfo
          message={message}
          operationCount={operationCount}
        />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Queue;